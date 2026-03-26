'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PROJECT_TYPES = [
  'Kitchen Remodel',
  'Bathroom Remodel',
  'ADU Construction',
  'Full Home Renovation',
  'Room Addition',
  'Commercial Build-Out',
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number];

const FINISH_TIERS = ['Standard', 'Mid-Range', 'Luxury'] as const;
type FinishTier = (typeof FINISH_TIERS)[number];

const FINISH_DESCRIPTIONS: Record<FinishTier, string> = {
  Standard: 'Quality materials, clean finishes',
  'Mid-Range': 'Premium materials, custom touches',
  Luxury: 'Top-tier everything, bespoke details',
};

const REGIONS = [
  'Orange County',
  'Los Angeles County',
  'Inland Empire',
  'San Diego County',
] as const;
type Region = (typeof REGIONS)[number];

const REGION_LABELS: Record<Region, string> = {
  'Orange County': 'Baseline',
  'Los Angeles County': '+5-10%',
  'Inland Empire': '-15-20%',
  'San Diego County': '-5%',
};

const SQFT_RANGES: Record<ProjectType, { min: number; max: number; default: number }> = {
  'Kitchen Remodel': { min: 100, max: 500, default: 200 },
  'Bathroom Remodel': { min: 40, max: 200, default: 80 },
  'ADU Construction': { min: 200, max: 1200, default: 600 },
  'Full Home Renovation': { min: 1000, max: 5000, default: 2000 },
  'Room Addition': { min: 100, max: 1000, default: 400 },
  'Commercial Build-Out': { min: 500, max: 10000, default: 2000 },
};

const PRICING: Record<string, Record<string, { low: number; high: number }>> = {
  'Kitchen Remodel': {
    Standard: { low: 150, high: 250 },
    'Mid-Range': { low: 250, high: 450 },
    Luxury: { low: 450, high: 800 },
  },
  'Bathroom Remodel': {
    Standard: { low: 200, high: 350 },
    'Mid-Range': { low: 350, high: 600 },
    Luxury: { low: 600, high: 1000 },
  },
  'ADU Construction': {
    Standard: { low: 250, high: 350 },
    'Mid-Range': { low: 350, high: 500 },
    Luxury: { low: 500, high: 750 },
  },
  'Full Home Renovation': {
    Standard: { low: 100, high: 200 },
    'Mid-Range': { low: 200, high: 400 },
    Luxury: { low: 400, high: 700 },
  },
  'Room Addition': {
    Standard: { low: 200, high: 350 },
    'Mid-Range': { low: 350, high: 550 },
    Luxury: { low: 550, high: 850 },
  },
  'Commercial Build-Out': {
    Standard: { low: 100, high: 200 },
    'Mid-Range': { low: 200, high: 400 },
    Luxury: { low: 400, high: 650 },
  },
};

const REGIONAL_MULTIPLIER: Record<string, number> = {
  'Orange County': 1.0,
  'Los Angeles County': 1.05,
  'Inland Empire': 0.85,
  'San Diego County': 0.95,
};

const STEP_LABELS = ['Project Type', 'Square Footage', 'Finish Tier', 'Region'];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};

// ---------------------------------------------------------------------------
// Formatter
// ---------------------------------------------------------------------------

const fmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function BudgetCalculator() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [sqft, setSqft] = useState<number | null>(null);
  const [finishTier, setFinishTier] = useState<FinishTier | null>(null);
  const [region, setRegion] = useState<Region | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Derived sqft range
  const sqftRange = projectType ? SQFT_RANGES[projectType] : null;

  // When project type changes, reset sqft to its default
  const handleProjectTypeSelect = (pt: ProjectType) => {
    setProjectType(pt);
    setSqft(SQFT_RANGES[pt].default);
  };

  // Calculate estimate
  const estimate = useMemo(() => {
    if (!projectType || !sqft || !finishTier || !region) return null;
    const price = PRICING[projectType][finishTier];
    const mult = REGIONAL_MULTIPLIER[region];
    return {
      low: Math.round(sqft * price.low * mult),
      high: Math.round(sqft * price.high * mult),
    };
  }, [projectType, sqft, finishTier, region]);

  const canAdvance = () => {
    if (step === 0) return projectType !== null;
    if (step === 1) return sqft !== null;
    if (step === 2) return finishTier !== null;
    if (step === 3) return region !== null;
    return false;
  };

  const goNext = () => {
    if (step < 3) {
      setDirection(1);
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const reset = () => {
    setStep(0);
    setDirection(-1);
    setProjectType(null);
    setSqft(null);
    setFinishTier(null);
    setRegion(null);
    setShowResult(false);
  };

  // ---------------------------------------------------------------------------
  // Step Indicator
  // ---------------------------------------------------------------------------

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
      {STEP_LABELS.map((label, i) => {
        const isCompleted = showResult || i < step;
        const isCurrent = !showResult && i === step;
        return (
          <div key={label} className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  isCompleted
                    ? 'bg-accent text-white'
                    : isCurrent
                    ? 'bg-accent/15 text-accent border-2 border-accent'
                    : 'bg-background-surface text-foreground-secondary border border-border-subtle'
                }`}
              >
                {isCompleted ? <Check size={16} strokeWidth={2.5} /> : i + 1}
              </div>
              <span
                className={`text-[10px] md:text-xs uppercase tracking-wider hidden md:block ${
                  isCurrent ? 'text-accent font-semibold' : 'text-foreground-secondary'
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div
                className={`w-6 md:w-12 h-[1px] mt-[-18px] md:mt-[-14px] ${
                  i < step || showResult ? 'bg-accent' : 'bg-border-subtle'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  // ---------------------------------------------------------------------------
  // Render Steps
  // ---------------------------------------------------------------------------

  const renderStep = () => {
    if (step === 0) {
      return (
        <div>
          <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
            What type of project are you planning?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {PROJECT_TYPES.map((pt) => (
              <button
                key={pt}
                onClick={() => handleProjectTypeSelect(pt)}
                className={`p-4 border rounded-lg cursor-pointer transition-all text-left ${
                  projectType === pt
                    ? 'border-accent bg-accent/5 shadow-md'
                    : 'border-border-subtle hover:border-accent/40'
                }`}
              >
                <span className="text-sm md:text-base font-medium text-foreground">{pt}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 1 && sqftRange && sqft !== null) {
      return (
        <div>
          <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
            How large is the space?
          </h3>
          <div className="max-w-md mx-auto space-y-8">
            <div className="text-center">
              <span className="text-5xl font-serif text-accent">{sqft.toLocaleString()}</span>
              <span className="text-foreground-secondary ml-2 text-lg">sq ft</span>
            </div>
            <div className="space-y-3">
              <input
                type="range"
                min={sqftRange.min}
                max={sqftRange.max}
                step={sqftRange.max <= 500 ? 10 : sqftRange.max <= 1200 ? 25 : 50}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#B8892A] bg-border-subtle [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
              />
              <div className="flex justify-between text-xs text-foreground-secondary">
                <span>{sqftRange.min} sq ft</span>
                <span>{sqftRange.max.toLocaleString()} sq ft</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <label className="text-sm text-foreground-secondary">Or enter exact:</label>
              <input
                type="number"
                min={sqftRange.min}
                max={sqftRange.max}
                value={sqft}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= sqftRange.min && val <= sqftRange.max) {
                    setSqft(val);
                  }
                }}
                className="w-28 px-3 py-2 border border-border-subtle rounded-lg text-center text-foreground bg-transparent focus:border-accent focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div>
          <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
            Choose your finish level
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {FINISH_TIERS.map((tier) => (
              <button
                key={tier}
                onClick={() => setFinishTier(tier)}
                className={`p-4 border rounded-lg cursor-pointer transition-all text-center ${
                  finishTier === tier
                    ? 'border-accent bg-accent/5 shadow-md'
                    : 'border-border-subtle hover:border-accent/40'
                }`}
              >
                <span className="block text-base font-semibold text-foreground mb-1">{tier}</span>
                <span className="block text-sm text-foreground-secondary font-light">
                  {FINISH_DESCRIPTIONS[tier]}
                </span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div>
          <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
            Where is the project located?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`p-4 border rounded-lg cursor-pointer transition-all text-left ${
                  region === r
                    ? 'border-accent bg-accent/5 shadow-md'
                    : 'border-border-subtle hover:border-accent/40'
                }`}
              >
                <span className="block text-sm md:text-base font-medium text-foreground">{r}</span>
                <span className="block text-xs text-foreground-secondary mt-0.5">
                  {REGION_LABELS[r]}
                </span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  // ---------------------------------------------------------------------------
  // Result
  // ---------------------------------------------------------------------------

  if (showResult && estimate) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-border-subtle p-8 md:p-12 max-w-2xl mx-auto">
        <StepIndicator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-serif text-foreground">Your Estimated Budget</h3>
          <p className="text-4xl md:text-5xl font-serif text-accent font-semibold">
            {fmt.format(estimate.low)} &ndash; {fmt.format(estimate.high)}
          </p>
          <p className="text-sm text-foreground-secondary font-light max-w-md mx-auto">
            Based on {sqft?.toLocaleString()} sq ft {projectType} with {finishTier} finishes in{' '}
            {region}
          </p>

          <div className="pt-8 border-t border-border-subtle mt-8">
            <h4 className="text-xl font-serif text-foreground mb-4">
              Want a Detailed Breakdown?
            </h4>
            <ResourceGateForm
              ctaLabel="Get Your Detailed Estimate"
              resourceName="Budget Calculator Estimate"
            />
          </div>

          <button
            onClick={reset}
            className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-accent transition-colors mt-6"
          >
            <RotateCcw size={14} />
            Start Over
          </button>
        </motion.div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Main wizard
  // ---------------------------------------------------------------------------

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border-subtle p-8 md:p-12 max-w-2xl mx-auto">
      <StepIndicator />

      <div className="min-h-[320px] flex flex-col justify-between">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            disabled={step === 0}
            className={step === 0 ? 'invisible' : ''}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </Button>
          <Button size="sm" onClick={goNext} disabled={!canAdvance()}>
            {step === 3 ? 'See Estimate' : 'Next'}
            {step < 3 && <ChevronRight size={16} className="ml-1" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
