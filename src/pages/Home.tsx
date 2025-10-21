import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Phone, Clock, Shield, Flower2, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-background.jpg";

const HomePage = () => {
  const services = [
    {
      icon: Flower2,
      title: "Pet Cremation",
      description: "Individual cremation services performed with dignity and respect.",
      link: "/services#cremation",
    },
    {
      icon: Flower2,
      title: "Aquamation",
      description: "Eco-friendly water-based cremation alternative.",
      link: "/services#aquamation",
    },
    {
      icon: Home,
      title: "Home Burial",
      description: "Expert guidance on home burial and green burial options.",
      link: "/services#burial",
    },
    {
      icon: Heart,
      title: "Memorial Products",
      description: "Beautiful urns, paw prints, jewelry, and keepsakes.",
      link: "/services#keepsakes",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Westchester",
      text: "The compassion and care shown during the most difficult time was beyond compare. They treated our beloved Max with such dignity.",
    },
    {
      name: "James R.",
      location: "Rockland",
      text: "Professional, caring, and available 24/7. They walked us through every step and made a heartbreaking process more bearable.",
    },
    {
      name: "Lisa K.",
      location: "Hudson Valley",
      text: "The memorial ceremony they helped arrange was perfect. It gave our family closure and a beautiful way to say goodbye.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 max-w-4xl mx-auto">
            Honoring the Bond You Shared
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto font-light">
            Compassionate pet funeral services available 24/7 in Westchester, Rockland, and Hudson Valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Arrange Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call 24/7
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">
                We're here whenever you need us, day or night
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Compassionate Care</h3>
              <p className="text-muted-foreground">
                Every pet is treated with dignity and respect
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Clear, honest pricing with no hidden fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive aftercare services to honor your beloved companion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link} className="text-primary font-medium hover:underline">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Families Say
            </h2>
            <p className="text-lg text-muted-foreground">
              We're honored to support families during their most difficult moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            We're Here for You, 24/7
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
            Let us help you honor your beloved companion with dignity and compassion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Arrange Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                (123) 456-7890
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
