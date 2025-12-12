import { Shield, Clock, MapPin, Award } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    label: "20+ Years",
    sublabel: "In Business",
  },
  {
    icon: Shield,
    label: "Licensed & Insured",
    sublabel: "Bonded",
  },
  {
    icon: MapPin,
    label: "Local Expertise",
    sublabel: "Trusted Partners",
  },
  {
    icon: Clock,
    label: "On-Time",
    sublabel: "On-Budget Delivery",
  },
];

const TrustSignals = () => {
  return (
    <section className="bg-charcoal py-8 md:py-10">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-4"
            >
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 md:h-7 md:w-7 text-stone" />
              </div>
              <div>
                <p className="text-cream font-medium text-sm md:text-base tracking-wide">
                  {item.label}
                </p>
                <p className="text-cream/60 text-xs md:text-sm">
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
