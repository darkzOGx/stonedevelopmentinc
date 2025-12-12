import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern interior construction project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="heading-xl text-cream mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Building Exceptional Spaces From the Ground Up
          </h1>
          <p className="body-lg text-cream/85 mb-10 max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Stone Development Inc is a full-service construction company delivering high-quality residential and commercial projects with precision, transparency, and craftsmanship.
          </p>
          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl">
              Request a Consultation
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-cream/0 via-cream/50 to-cream/0" />
      </div>
    </section>
  );
};

export default Hero;
