const testimonials = [
  {
    quote: "Stone Development transformed our outdated kitchen into a modern showpiece. Their attention to detail and professionalism exceeded our expectations.",
    author: "Michael R.",
    location: "Homeowner",
  },
  {
    quote: "From the initial consultation to the final walkthrough, the team was communicative, punctual, and delivered exceptional work. Highly recommend.",
    author: "Sarah K.",
    location: "Homeowner",
  },
  {
    quote: "They built our ADU on time and on budget. The quality of construction is outstanding, and the project management was seamless throughout.",
    author: "David & Lisa T.",
    location: "Property Owners",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg text-foreground mb-4">What Clients Say</h2>
          <p className="body-base text-muted-foreground">
            Our commitment to quality speaks through the words of our clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border/50"
            >
              <blockquote className="mb-6">
                <p className="body-base text-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div>
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
