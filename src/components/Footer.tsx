import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-5">
        <div className="container-wide mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-primary-foreground text-lg">
            SIGN UP FOR PRODUCT UPDATES
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2.5 rounded-full bg-white text-foreground text-sm w-40 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2.5 rounded-full bg-white text-foreground text-sm w-48 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-navy-light transition-colors">
              SUBMIT
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-3xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DCF</span>
            <p className="mt-4 text-secondary-foreground/70 text-sm max-w-sm">
              Enterprise insurance products for regulated markets. Trusted by leading insurers across the globe.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-secondary-foreground/70">Global Headquarters</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-display">Products</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>
                <Link to="/products/insurance-basic" className="hover:text-primary transition-colors">
                  Insurance Basic
                </Link>
              </li>
              <li>
                <Link to="/products/insurance-now" className="hover:text-primary transition-colors">
                  Insurance Now
                </Link>
              </li>
              <li>
                <Link to="/products/insurance-suite" className="hover:text-primary transition-colors">
                  Insurance Suite
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  TPA Product
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  Insurance Build
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-display">Industries</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Motor Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Travel Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Property & Casualty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-display">Company</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
          <p>© 2026 DCF. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Global Headquarters</span>
            <span>•</span>
            <span>support@dcf.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;