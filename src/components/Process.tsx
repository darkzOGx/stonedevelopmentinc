const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We meet to discuss your vision, needs, and budget. Understanding your goals is the first step toward a successful project.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our team develops detailed plans and specifications, working with you to refine every detail before construction begins.",
  },
  {
    number: "03",
    title: "Permits & Approvals",
    description: "We handle all permits and regulatory requirements, ensuring your project meets all local codes and standards.",
  },
  {
    number: "04",
    title: "Construction",
    description: "Our skilled team executes the project with precision, keeping you informed with regular updates and clear communication.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "We conduct a thorough inspection together, addressing any details to ensure your complete satisfaction.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg text-foreground mb-4">Our Process</h2>
          <p className="body-base text-muted-foreground">
            A structured approach ensures quality results and a smooth experience from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border -translate-x-1/2" />
              )}
              
              <div className="flex flex-col">
                <span className="text-stone font-serif text-4xl font-medium mb-4">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="body-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
