import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll reach out to you shortly with compassionate support.",
    });
    setFormData({ name: "", email: "", phone: "", petName: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                We're Here for You
              </h1>
              <p className="text-xl text-muted-foreground">
                Available 24/7 to provide compassionate support and guidance during this difficult time
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6 mb-8">
                  <Card className="border-border">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">24/7 Phone Support</h3>
                        <a href="tel:+1234567890" className="text-primary hover:underline text-lg font-medium">
                          (123) 456-7890
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We're always here when you need us
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <a href="mailto:info@peacefulpaws.com" className="text-primary hover:underline">
                          info@peacefulpaws.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We'll respond within 2 hours
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                        <p className="text-muted-foreground">
                          Westchester County<br />
                          Rockland County<br />
                          Hudson Valley Region
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Availability</h3>
                        <p className="text-muted-foreground">
                          24 hours a day<br />
                          7 days a week<br />
                          365 days a year
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Immediate Assistance Needed?</h3>
                  <p className="text-muted-foreground mb-4">
                    If your pet has just passed or you need urgent support, please call us directly for immediate assistance.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <a href="tel:+1234567890">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: (123) 456-7890
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form below and we'll get back to you as soon as possible
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="petName">Your Pet's Name (Optional)</Label>
                        <Input 
                          id="petName"
                          name="petName"
                          value={formData.petName}
                          onChange={handleChange}
                          placeholder="Enter your pet's name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">How Can We Help? *</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Please share any questions or let us know how we can support you during this time..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We typically respond within 2 hours during business hours, or the next business day for after-hours messages.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Prefer to Talk?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sometimes it's easier to speak with someone directly. We understand, and we're here to listen with compassion and without judgment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="tel:+1234567890">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us 24/7
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:info@peacefulpaws.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
