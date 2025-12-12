import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="container-narrow text-center">
        <h2 className="heading-lg text-cream mb-6">
          Let's Build Something Solid
        </h2>
        <p className="body-lg text-cream/70 mb-10 max-w-xl mx-auto">
          Tell us about your project and our team will reach out to schedule a consultation.
        </p>
        <Button variant="hero" size="xl">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
