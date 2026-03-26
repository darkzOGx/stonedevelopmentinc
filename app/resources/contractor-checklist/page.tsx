import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';
import { buildResourceSchemasWithHowTo } from '@/lib/resource-schemas';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    'Contractor Vetting Checklist: 15 Questions Before You Hire | Stone Development',
  description:
    'The complete 15-point checklist for hiring a contractor in Southern California. Verify licenses, insurance, references, and contracts before signing. Free printable download.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/contractor-checklist',
  },
  openGraph: {
    title:
      'Contractor Vetting Checklist: 15 Questions Before You Hire | Stone Development',
    description:
      'The complete 15-point checklist for hiring a contractor in Southern California. Verify licenses, insurance, references, and contracts before signing.',
    url: 'https://www.stonedevelopmentinc.com/resources/contractor-checklist',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const jsonLd = buildResourceSchemasWithHowTo({
  slug: 'contractor-checklist',
  title: "The Homeowner's 15-Point Contractor Vetting Checklist",
  description:
    'The complete 15-point checklist for hiring a contractor in Southern California. Verify licenses, insurance, references, and contracts before signing.',
  faqs: [
    {
      question: 'How do I check if a contractor is licensed in California?',
      answer:
        'Visit cslb.ca.gov and enter the contractor name or license number. The CSLB database shows license status, classification, bond, and complaint history.',
    },
    {
      question: 'How much should I pay a contractor upfront in California?',
      answer:
        'California law limits upfront payments to 10% of the contract price or $1,000, whichever is less. Remaining payments tie to completed milestones.',
    },
    {
      question: 'What insurance should a contractor have?',
      answer:
        "A contractor needs general liability insurance (minimum $1,000,000) and workers' compensation coverage for all employees on the job site.",
    },
    {
      question: 'How do I protect myself from contractor fraud?',
      answer:
        'Verify CSLB license, confirm insurance, never pay cash, get a detailed written contract, and require lien waivers from all subcontractors and suppliers.',
    },
    {
      question: "What is a mechanic's lien and how do I prevent one?",
      answer:
        "A mechanic's lien lets unpaid subcontractors or suppliers place a legal claim on your property. Require unconditional lien waivers with every payment to prevent this.",
    },
  ],
  howTo: {
    name: 'How to Vet a General Contractor in Southern California',
    description:
      'A 15-step process for verifying a contractor before you sign a contract. Covers license verification, insurance, references, contracts, and red flags.',
    steps: [
      {
        name: 'Verify Their Contractor License',
        text: 'Look up the contractor on the California CSLB website at cslb.ca.gov. Confirm the license is active, in good standing, and matches the correct classification for your project.',
      },
      {
        name: 'Confirm General Liability Insurance',
        text: 'Request a certificate of insurance showing a minimum $1,000,000 general liability policy. Ask to be named as additional insured for the duration of the project.',
      },
      {
        name: "Verify Workers' Compensation Coverage",
        text: "Confirm the contractor carries workers' compensation insurance for all employees. This is required by California law and protects you from liability if a worker is injured on your property.",
      },
      {
        name: 'Check Their Bond Status',
        text: 'California requires a $25,000 contractor bond. Verify the bond is current through the CSLB license lookup tool.',
      },
      {
        name: 'Request and Call References',
        text: 'Ask for at least three references from recent projects similar in scope to yours. Call each reference and ask about communication, timeline adherence, and job-site cleanup.',
      },
      {
        name: 'Review Their Portfolio In Person',
        text: 'Visit a completed project in person if possible. Photos are curated and do not reveal finish quality, alignment, or craftsmanship the way a walkthrough does.',
      },
      {
        name: 'Get Everything in Writing',
        text: 'Require a detailed written contract that includes full scope of work, materials specified by brand and model, start and end dates, and a payment schedule.',
      },
      {
        name: 'Understand the Payment Schedule',
        text: 'California law caps upfront payments at 10% of the contract price or $1,000, whichever is less. All subsequent payments must be tied to completed milestones.',
      },
      {
        name: 'Ask About Permits',
        text: 'Your contractor must pull all required building permits. If they suggest skipping permits, end the conversation immediately. Unpermitted work destroys resale value.',
      },
      {
        name: 'Clarify the Change Order Process',
        text: 'Establish a written change order process before work begins. Every change must be documented with updated pricing and timeline impact before any additional work proceeds.',
      },
      {
        name: 'Discuss Lien Waivers',
        text: 'Require unconditional lien waivers from all subcontractors and material suppliers upon each payment. This protects you from mechanic liens filed by unpaid third parties.',
      },
      {
        name: 'Confirm Warranty Terms',
        text: 'Get written warranty terms covering a minimum of one year on workmanship. Verify that manufacturer warranties on materials are registered and transferred to you.',
      },
      {
        name: 'Evaluate Communication Style',
        text: 'Ask how the contractor communicates, how often you will receive updates, and who your daily point of contact will be. Set communication expectations before work begins.',
      },
      {
        name: 'Ask About Subcontractor Management',
        text: 'Find out who the regular subcontractors are, whether they are licensed and insured, and who supervises work on-site every day.',
      },
      {
        name: 'Trust Your Instincts',
        text: 'If anything feels off during vetting, it will be worse during construction. Walk away from contractors who pressure you to sign fast, demand cash-only payments, or lack a physical office.',
      },
    ],
  },
});

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ContractorChecklistPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* ----------------------------------------------------------------- */}
          {/* Hero */}
          {/* ----------------------------------------------------------------- */}
          <section className="pt-32 pb-12">
            <SectionLabel>Free Resource</SectionLabel>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              The Homeowner&apos;s 15-Point Contractor Vetting Checklist
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              Vet a contractor by verifying their CSLB license, confirming
              insurance and bond status, calling references, and reviewing a
              detailed written contract before signing.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              Hiring the wrong contractor is one of the most expensive mistakes a
              Southern California homeowner can make. This 15-point checklist
              gives you a repeatable, step-by-step process for evaluating every
              contractor who bids on your project&mdash;whether you are
              remodeling a kitchen in Irvine, building an ADU in Mission Viejo,
              or adding a second story in Orange County. Print it, bring it to
              every meeting, and do not sign until every box is checked.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Why This Checklist Matters */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Why This Checklist Matters
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Hiring the wrong contractor costs California homeowners an average
              of $15,000&ndash;$30,000 in rework, legal fees, and project
              delays. The California Contractors State License Board (CSLB)
              receives over 20,000 complaints per year from homeowners who
              signed contracts without proper due diligence. Many of those
              complaints involve unlicensed operators, abandoned projects, and
              substandard workmanship that fails city inspection.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              In Orange County, where the average home renovation runs $150,000
              to $500,000, the financial exposure is enormous. A single failed
              inspection can delay your project by weeks. An unlicensed
              contractor who disappears mid-project leaves you holding the bill
              for demolition, re-permitting, and hiring a replacement. The CSLB
              reports that unlicensed contracting activity increases during
              construction booms&mdash;exactly the market conditions Southern
              California faces in 2026.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              This checklist eliminates guesswork. Every item maps to a specific
              risk that real homeowners encounter during the hiring process. Work
              through it methodically, and you will enter your project with a
              vetted, qualified contractor who is legally compliant, properly
              insured, and contractually accountable.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The Complete 15-Point Checklist */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              The Complete 15-Point Checklist
            </h2>

            {/* 1 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">1.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Verify Their Contractor&apos;s License
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Every contractor performing work valued at $500 or more in
                California must hold a valid CSLB license. Go to{' '}
                <a
                  href="https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  cslb.ca.gov
                </a>{' '}
                and enter the contractor&apos;s name or license number. Confirm
                the license is active and in good standing. Understand the
                license classifications: Class A is General Engineering, Class B
                is General Building (the most common for residential remodels),
                and Class C covers specialty trades like electrical (C-10),
                plumbing (C-36), and HVAC (C-20). The license class must match
                the work you need done. A C-36 plumber cannot legally act as
                your general contractor on a full kitchen renovation.
              </p>
            </div>

            {/* 2 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">2.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Confirm General Liability Insurance
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Require a certificate of insurance (COI) showing a minimum
                $1,000,000 general liability policy. This protects your property
                if the contractor causes damage during construction&mdash;a
                broken water line, fire from welding, or structural damage from
                improper demolition. Ask to be named as an additional insured on
                the policy for the duration of your project. Call the insurance
                carrier directly to verify the policy is active. Do not accept a
                photocopy of an expired or forged certificate.
              </p>
            </div>

            {/* 3 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">3.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Verify Workers&apos; Compensation Coverage
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                California law requires every contractor with employees to carry
                workers&apos; compensation insurance. If a worker is injured on
                your property and the contractor lacks coverage, you face
                personal liability for medical bills and lost wages. Request the
                workers&apos; comp certificate alongside the general liability
                COI. If the contractor claims to have no employees and uses only
                subcontractors, verify that each subcontractor carries their own
                workers&apos; comp policy.
              </p>
            </div>

            {/* 4 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">4.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Check Their Bond Status
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                California requires all licensed contractors to maintain a
                $25,000 contractor&apos;s bond. This bond provides a financial
                safety net if the contractor violates the terms of your contract
                or fails to pay subcontractors and suppliers. Verify the bond is
                current through the CSLB license lookup tool&mdash;the bond
                status appears directly on the license detail page. An expired
                bond means the license is not in good standing, regardless of
                what the contractor tells you.
              </p>
            </div>

            {/* 5 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">5.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Request and Call References
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Ask for at least three references from recent projects similar in
                scope to yours. A contractor bidding on your $200,000 kitchen
                remodel should have references from $150,000+ kitchen projects,
                not $15,000 bathroom refreshes. Call every reference. Ask
                specific questions: Did the project finish on time? How did the
                contractor handle unexpected problems? Was the job site kept
                clean? Did final costs match the original estimate? Were punch
                list items completed promptly? Written reviews on Google and Yelp
                add context, but direct phone calls reveal the full story.
              </p>
            </div>

            {/* 6 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">6.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Review Their Portfolio In Person
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Photos on a website are curated and edited. They do not reveal
                finish quality, grout alignment, cabinet fit, or paint
                consistency the way a physical walkthrough does. Ask to visit a
                recently completed project&mdash;ideally one that was finished 6
                to 12 months ago so you can see how the work has held up over
                time. Pay attention to details: Are cabinet doors aligned? Do
                drawers close smoothly? Are tile lines straight? Is caulking
                clean and consistent? These details separate a competent
                contractor from an excellent one.
              </p>
            </div>

            {/* 7 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">7.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Get Everything in Writing
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                A handshake deal is not a contract. Require a detailed written
                agreement that specifies the full scope of work, materials by
                brand and model number, start and completion dates, a
                milestone-based payment schedule, and procedures for handling
                disputes. California law (Business and Professions Code Section
                7159) requires written contracts for any home improvement project
                over $500. The contract must include the contractor&apos;s
                license number, a notice of the three-day right to cancel, and a
                description of the work to be performed. If the contractor
                resists putting details in writing, that is a disqualifying red
                flag.
              </p>
            </div>

            {/* 8 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">8.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Understand the Payment Schedule
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                California law (Business and Professions Code Section 7159.5)
                caps upfront payments at 10% of the contract price or $1,000,
                whichever is less. Any contractor who asks for more upfront is
                either unfamiliar with the law or deliberately violating it.
                Structure all remaining payments around completed milestones:
                demolition complete, rough framing inspected, drywall finished,
                final walkthrough approved. Never pay ahead of work
                performed&mdash;this is the single most effective way to
                maintain leverage throughout your project.
              </p>
            </div>

            {/* 9 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">9.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Ask About Permits
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Your contractor must pull all required building permits before
                work begins. Permits ensure that structural, electrical,
                plumbing, and mechanical work meets current California building
                code. In Orange County, permit fees range from $2,000 for a
                bathroom remodel to $15,000+ for a major addition or ADU. If a
                contractor suggests skipping permits to save money, walk away
                immediately. Unpermitted work creates inspection failures,
                insurance coverage gaps, and devastating resale consequences.
                When you sell your home, unpermitted square footage or
                modifications must be disclosed and will reduce your
                property&apos;s market value.
              </p>
            </div>

            {/* 10 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">10.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Clarify the Change Order Process
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Changes happen on every construction project. What matters is how
                those changes are documented. Establish a written change order
                process before the first day of work. Every modification to
                scope, material, or timeline must be documented in a signed
                change order that includes the updated price, the impact on the
                schedule, and approval from both parties before additional work
                proceeds. Verbal approvals for changes lead to billing disputes
                and are the number one source of contractor-homeowner conflict in
                residential construction.
              </p>
            </div>

            {/* 11 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">11.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Discuss Lien Waivers
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                A mechanic&apos;s lien allows unpaid subcontractors and material
                suppliers to place a legal claim against your property&mdash;even
                if you already paid the general contractor. Protect yourself by
                requiring unconditional lien waivers from every subcontractor and
                supplier with each payment you make. California Civil Code
                Sections 8132&ndash;8138 define the specific waiver forms
                required. Your general contractor should provide these waivers
                proactively. If they do not understand what a lien waiver is or
                refuse to provide them, that indicates a serious problem with
                their business practices.
              </p>
            </div>

            {/* 12 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">12.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Confirm Warranty Terms
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Ask for written warranty terms covering a minimum of one year on
                all workmanship. The best contractors in Southern California
                offer two-year workmanship warranties because they stand behind
                their quality. Separate from the workmanship warranty, verify
                that manufacturer warranties on materials&mdash;appliances,
                roofing, windows, cabinetry&mdash;are properly registered and
                transferred to you as the homeowner. Keep all warranty documents
                organized in a project binder. A one-year workmanship warranty is
                the industry minimum; anything less signals a contractor who does
                not expect their work to last.
              </p>
            </div>

            {/* 13 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">13.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Evaluate Communication Style
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Communication breakdowns cause more homeowner frustration than
                any other issue during construction. Before you sign, ask the
                contractor: How do you communicate with clients? How often will I
                receive progress updates? Who is my daily point of contact on
                site? Will I receive weekly written summaries or photo updates?
                Set these expectations in writing as part of your contract. A
                contractor who is slow to return calls and vague about schedules
                during the sales process will be worse once they have your
                deposit.
              </p>
            </div>

            {/* 14 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">14.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Ask About Subcontractor Management
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Most general contractors rely on subcontractors for electrical,
                plumbing, HVAC, tile, and other specialty trades. Ask who their
                regular subcontractors are and how long they have worked
                together. Established relationships between a GC and their subs
                produce better coordination, fewer scheduling conflicts, and
                higher-quality work. Verify that subcontractors are licensed and
                insured. Ask who supervises the job site daily&mdash;a project
                manager or superintendent should be present every day work is
                being performed, not just the general contractor dropping by
                occasionally.
              </p>
            </div>

            {/* 15 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">15.</span>
                <h3 className="font-serif text-xl text-foreground">
                  Trust Your Instincts
                </h3>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed">
                If something feels off during the vetting process, it will be
                worse during construction. Trust the feeling. Red flags include:
                pressure to sign a contract immediately, requests for cash-only
                payment, no physical office or business address, reluctance to
                provide references, and evasive answers about insurance or
                licensing. A reputable contractor welcomes scrutiny because they
                have nothing to hide. You are about to trust this person with
                your home and your money&mdash;do not override your judgment
                because of a low bid or a charming sales pitch.
              </p>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Red Flags */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Red Flags That Should Make You Walk Away
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Any one of these red flags is reason enough to disqualify a
              contractor from your project:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">
                  They demand more than 10% or $1,000 upfront.
                </strong>{' '}
                This violates California law and signals financial instability.
              </li>
              <li>
                <strong className="text-foreground">
                  They refuse to provide a written contract.
                </strong>{' '}
                No contract means no legal protection for you.
              </li>
              <li>
                <strong className="text-foreground">
                  They suggest skipping permits to save time or money.
                </strong>{' '}
                This exposes you to code violations, failed inspections, and
                resale penalties.
              </li>
              <li>
                <strong className="text-foreground">
                  Their license is expired, suspended, or does not exist.
                </strong>{' '}
                Hiring an unlicensed contractor in California eliminates your
                access to the CSLB complaint process and the contractor bond.
              </li>
              <li>
                <strong className="text-foreground">
                  They pressure you to sign immediately.
                </strong>{' '}
                Legitimate contractors expect you to compare bids and do due
                diligence. High-pressure tactics indicate desperation, not
                quality.
              </li>
              <li>
                <strong className="text-foreground">
                  They want payment in cash only.
                </strong>{' '}
                Cash payments leave no paper trail and are a hallmark of
                unlicensed and uninsured operators.
              </li>
            </ul>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* FAQ */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How do I check if a contractor is licensed in California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Visit cslb.ca.gov and enter the contractor&apos;s name or
                  license number. The database shows license status,
                  classification, bond, and complaint history.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How much should I pay a contractor upfront in California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  California law limits upfront payments to 10% of the contract
                  price or $1,000, whichever is less. All remaining payments
                  must tie to completed milestones.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What insurance should a contractor have?
                </h3>
                <p className="text-foreground-secondary font-light">
                  A contractor needs general liability insurance with a minimum
                  $1,000,000 policy and workers&apos; compensation coverage for
                  all employees on the job site.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How do I protect myself from contractor fraud?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Verify the CSLB license, confirm insurance, never pay cash,
                  require a detailed written contract, and collect lien waivers
                  from all subcontractors and suppliers.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What is a mechanic&apos;s lien and how do I prevent one?
                </h3>
                <p className="text-foreground-secondary font-light">
                  A mechanic&apos;s lien lets unpaid subcontractors or suppliers
                  place a legal claim on your property. Require unconditional
                  lien waivers with every payment to prevent this.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Printable Checklist
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the complete 15-point Contractor Vetting Checklist as a
              printable PDF you can bring to every contractor meeting. The
              download includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                Printable PDF checklist with all 15 verification steps
              </li>
              <li>
                Pre-filled questions to ask each contractor during interviews
              </li>
              <li>
                Side-by-side comparison worksheet for evaluating multiple bids
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="Contractor Vetting Checklist"
                ctaLabel="Download Free Checklist"
              />
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Internal Links */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              More Resources for Homeowners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/resources/cost-guide"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Free Guide
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  2026 Remodeling Cost Guide
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  Accurate pricing for kitchens, bathrooms, ADUs, and full
                  renovations across Southern California.
                </p>
              </Link>
              <Link
                href="/resources/budget-calculator"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Interactive Tool
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Budget Calculator
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  Get a personalized cost estimate for your project in under 2
                  minutes.
                </p>
              </Link>
              <Link
                href="/contact"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Get Started
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Contact Us
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  Request a free consultation with our Southern California
                  renovation team.
                </p>
              </Link>
              <Link
                href="/blog"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Expert Insights
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Blog
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  In-depth articles on remodeling trends, permits, and project
                  planning in SoCal.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
