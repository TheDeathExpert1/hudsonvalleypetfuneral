import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQs", path: "/faqs" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="font-heading font-bold text-2xl text-primary">
              Peaceful Paws
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-primary font-medium">
              <Phone className="h-4 w-4" />
              <span className="text-sm">24/7 Support</span>
            </a>
            <Button asChild variant="default">
              <Link to="/contact">Arrange Services</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center space-x-2 text-primary font-medium py-3"
                >
                  <Phone className="h-4 w-4" />
                  <span>24/7 Support</span>
                </a>
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Arrange Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
