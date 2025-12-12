import { ArrowUpRight } from "lucide-react";
import {
  UtensilsCrossed,
  Bath,
  PlusSquare,
  Home,
  Building,
  Droplets,
  Flame,
  Hammer,
  RefreshCw,
  Banknote,
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a functional, beautiful space.",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    description: "Modern bathroom renovations with quality finishes.",
  },
  {
    icon: PlusSquare,
    title: "Room Additions",
    description: "Expand your living space with seamless additions.",
  },
  {
    icon: Home,
    title: "New Construction",
    description: "Build your dream home from the ground up.",
  },
  {
    icon: Building,
    title: "Accessory Dwelling Units",
    description: "ADUs for guests, rental income, or multi-generational living.",
  },
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    description: "Fast response to restore your property after water damage.",
  },
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description: "Complete restoration services after fire damage.",
  },
  {
    icon: Hammer,
    title: "Structural Renovations",
    description: "Expert structural work for safety and longevity.",
  },
  {
    icon: RefreshCw,
    title: "Full Home Remodeling",
    description: "Comprehensive renovations to transform your entire home.",
  },
];

const secondaryService = {
  icon: Banknote,
  title: "We Buy Houses",
  description: "Sell your property quickly and hassle-free.",
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg text-foreground mb-4">Our Services</h2>
          <p className="body-base text-muted-foreground">
            From concept to completion, we manage every phase of construction with attention to detail and accountability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="group p-6 md:p-8 bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <service.icon className="h-8 w-8 text-earth" />
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="heading-sm text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="body-sm text-muted-foreground">
                {service.description}
              </p>
            </a>
          ))}
        </div>

        {/* Secondary Service */}
        <div className="mt-8 pt-8 border-t border-border">
          <a
            href="#"
            className="group flex items-center justify-between p-6 md:p-8 bg-muted/50 hover:bg-muted transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <secondaryService.icon className="h-6 w-6 text-stone" />
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {secondaryService.title}
                </h3>
                <p className="body-sm text-muted-foreground">
                  {secondaryService.description}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
