import { Check } from "lucide-react";
import jobSiteImage from "@/assets/job-site.jpg";

const benefits = [
  "Experienced project management",
  "Clear communication and timelines",
  "Quality materials and craftsmanship",
  "Licensed, bonded, and insured",
  "Local expertise and trusted trade partners",
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-lg text-foreground mb-6">
              Why Work With Stone Development Inc
            </h2>
            <p className="body-base text-muted-foreground mb-8">
              We bring decades of experience, proven processes, and a commitment to quality that sets us apart. When you work with us, you're partnering with a team that treats your project like our own.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-earth/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-earth" />
                  </div>
                  <span className="body-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={jobSiteImage}
                alt="Stone Development construction team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-earth/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
