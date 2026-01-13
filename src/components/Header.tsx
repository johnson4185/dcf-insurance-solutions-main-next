import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const products = [
    { name: "Insurance Basic", path: "/products/insurance-basic", description: "Essential for small teams" },
    { name: "Insurance Now", path: "/products/insurance-now", description: "Advanced for growth" },
    { name: "Insurance Suite", path: "/products/insurance-suite", description: "Enterprise solution" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DCF</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-4">
                  <div className="bg-card border border-border rounded-2xl shadow-xl py-4 min-w-[280px]">
                    <Link
                      to="/products"
                      className="block px-5 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      <span className="font-semibold">All Products</span>
                      <span className="block text-sm text-muted-foreground">View our complete product range</span>
                    </Link>
                    <div className="border-t border-border my-2" />
                    {products.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="block px-5 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        <span className="font-semibold">{product.name}</span>
                        <span className="block text-sm text-muted-foreground">{product.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/comparison"
              className={`font-medium transition-colors ${
                isActive("/comparison") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Compare
            </Link>

            <Link
              to="/solutions"
              className={`font-medium transition-colors ${
                isActive("/solutions") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Solutions
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+966" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </a>
            <Link to="/comparison" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/comparison"
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Compare
              </Link>
              <Link
                to="/solutions"
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/comparison"
                className="btn-primary w-fit mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;