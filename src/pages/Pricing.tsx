import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic Care",
      price: "$195",
      description: "Dignified communal cremation service",
      features: [
        "Compassionate pet pickup",
        "Communal cremation",
        "Memorial garden scattering",
        "Sympathy card",
        "24/7 phone support",
      ],
    },
    {
      name: "Standard Service",
      price: "$395",
      description: "Individual cremation with urn",
      popular: true,
      features: [
        "Everything in Basic Care",
        "Individual cremation",
        "Return of ashes",
        "Standard urn included",
        "Clay paw print keepsake",
        "Certificate of cremation",
        "Online memorial page",
      ],
    },
    {
      name: "Premium Tribute",
      price: "$695",
      description: "Complete memorial experience",
      features: [
        "Everything in Standard Service",
        "Premium decorative urn",
        "Witnessing option available",
        "Memorial ceremony coordination",
        "Custom photo frame",
        "Additional paw print keepsake",
        "Memorial jewelry piece",
        "Priority scheduling",
      ],
    },
  ];

  const addOns = [
    { name: "Premium Urn Upgrade", price: "$75 - $350" },
    { name: "Additional Paw Print", price: "$45" },
    { name: "Memorial Jewelry", price: "$85 - $200" },
    { name: "Custom Photo Frame", price: "$65" },
    { name: "Garden Memorial Stone", price: "$95 - $175" },
    { name: "Cremation Witnessing", price: "$150" },
    { name: "Memorial Ceremony", price: "$250 - $500" },
    { name: "Rush Service (24 hours)", price: "$100" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground">
                Honest, upfront pricing with no hidden fees. Choose the service that's right for you and your beloved companion.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`border-border relative ${pkg.popular ? 'border-2 border-primary shadow-lg' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-heading text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Link to="/contact">Select Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                * Prices based on pets up to 75 lbs. Additional fees apply for larger pets.
              </p>
              <p className="text-sm text-muted-foreground">
                Pickup fees vary by location. Contact us for exact pricing in your area.
              </p>
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Optional Add-Ons
                </h2>
                <p className="text-lg text-muted-foreground">
                  Personalize your service with these additional options
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6 flex justify-between items-center">
                      <span className="font-medium text-foreground">{addon.name}</span>
                      <span className="text-primary font-semibold">{addon.price}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">
                Pricing Questions
              </h2>
              
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">What's included in the pickup fee?</h3>
                    <p className="text-muted-foreground">
                      Our pickup fee covers compassionate transportation of your pet from your home, veterinary office, or other location to our facility. Fees range from $50-$100 depending on your location within our service area.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Do you offer payment plans?</h3>
                    <p className="text-muted-foreground">
                      Yes, we understand this is a difficult time. We accept all major credit cards and can work with you to arrange payment options if needed. Please contact us to discuss.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Are there extra fees for larger pets?</h3>
                    <p className="text-muted-foreground">
                      Our standard pricing covers pets up to 75 lbs. For pets over 75 lbs, there is an additional fee of $1.50 per pound. We'll always provide exact pricing upfront.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Can I customize my package?</h3>
                    <p className="text-muted-foreground">
                      Absolutely. You can start with any package and add or remove services to create exactly what you need. We'll work with you to design a service that honors your pet and fits your budget.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Questions About Pricing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
              We're here to help 24/7. Contact us for a personalized quote or to arrange services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+1234567890">(123) 456-7890</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
