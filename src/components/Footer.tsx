import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12 md:py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-medium text-cream">
                Stone Development Inc
              </span>
            </Link>
            <p className="body-sm text-cream/60 max-w-md mb-4">
              Full-service residential and commercial construction delivering exceptional quality, transparency, and craftsmanship.
            </p>
            <p className="text-sm text-cream/40">
              License #123456789
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-medium text-cream mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {["Los Angeles County", "Orange County", "Ventura County", "San Bernardino County"].map(
                (area) => (
                  <li key={area}>
                    <span className="text-sm text-cream/60">{area}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-cream mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@stonedevelopment.com"
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  info@stonedevelopment.com
                </a>
              </li>
              <li>
                <span className="text-sm text-cream/60">
                  123 Construction Way<br />
                  Los Angeles, CA 90001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <p className="text-sm text-cream/40 text-center">
            © {currentYear} Stone Development Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
