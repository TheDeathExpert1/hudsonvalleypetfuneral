import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flame, Home, Users, Heart, BookOpen } from "lucide-react";
import cremationImage from "@/assets/cremation-service.jpg";
import burialImage from "@/assets/burial-service.jpg";
import ceremonyImage from "@/assets/memorial-ceremony.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive, compassionate care to honor your beloved companion
              </p>
            </div>
          </div>
        </section>

        {/* Pet Cremation */}
        <section id="cremation" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={cremationImage} 
                  alt="Pet cremation urn with flowers and candles" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Pet Cremation
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We offer both individual and communal cremation services, each performed with the utmost dignity and respect. Our state-of-the-art facilities ensure your pet receives careful, professional care.
                </p>
                
                <div className="space-y-4">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">Individual Cremation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Your pet is cremated alone, ensuring you receive only their ashes. Includes a choice of urn and optional witnessing of the cremation process.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">Communal Cremation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A dignified option where pets are cremated together. Ashes are not returned but are scattered in a peaceful memorial garden.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Button asChild className="mt-6">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Burial Guidance */}
        <section id="burial" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Burial Guidance
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Many families wish to lay their pets to rest at home. We provide comprehensive guidance on legal requirements, best practices, and environmental considerations for home burial.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Local zoning and legal requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Proper burial depth and location selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Environmental and property considerations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">Memorial marker recommendations</span>
                  </li>
                </ul>

                <Button asChild variant="outline">
                  <Link to="/contact">Request Consultation</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={burialImage} 
                  alt="Peaceful garden memorial space with flowers" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Memorial Ceremonies */}
        <section id="ceremonies" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={ceremonyImage} 
                  alt="Memorial ceremony setup with candles and flowers" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Memorial Ceremonies
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Celebrate your pet's life with a personalized ceremony that honors the love you shared. We offer both virtual and in-person options to accommodate your family's needs.
                </p>
                
                <div className="space-y-3 mb-6">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">In-Person Ceremonies:</strong> Intimate gatherings at our peaceful memorial space or a location meaningful to you
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Virtual Services:</strong> Connect with distant family members through professionally facilitated online ceremonies
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Personalization:</strong> Photo displays, favorite toys, music, readings, and candle lighting
                  </p>
                </div>

                <Button asChild>
                  <Link to="/contact">Plan a Ceremony</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Keepsakes */}
        <section id="keepsakes" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Keepsakes & Memorial Items
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Tangible reminders to keep your beloved companion close to your heart
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Memorial Urns</h3>
                    <p className="text-sm text-muted-foreground">
                      Beautiful urns in various materials, sizes, and styles to honor your pet's memory
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Paw Print Keepsakes</h3>
                    <p className="text-sm text-muted-foreground">
                      Clay impressions or ink prints of your pet's paw, beautifully framed or mounted
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Memorial Jewelry</h3>
                    <p className="text-sm text-muted-foreground">
                      Pendants and bracelets that can hold a small portion of ashes or fur
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Photo Frames</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom frames designed to display your favorite photos alongside memorial details
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Garden Stones</h3>
                    <p className="text-sm text-muted-foreground">
                      Engraved memorial stones for your garden or special outdoor space
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Custom Items</h3>
                    <p className="text-sm text-muted-foreground">
                      Work with us to create a unique memorial piece that reflects your pet's personality
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Button asChild className="mt-8">
                <Link to="/pricing">View All Options & Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Grief Support */}
        <section id="grief-support" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Grief Support Resources
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Losing a pet is one of life's most difficult experiences. We provide resources, support, and connections to help you through the grieving process.
              </p>

              <Card className="border-border text-left">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground">Articles and guides on pet loss and grief</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground">Connection to pet loss support groups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground">Referrals to certified pet loss counselors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground">Resources for helping children cope with pet loss</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground">Rainbow Bridge readings and memorial poems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button asChild variant="outline" className="mt-8">
                <Link to="/resources">Visit Our Resource Center</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Let Us Help You Honor Your Beloved Companion
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
              Our compassionate team is available 24/7 to guide you through this difficult time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Arrange Services</Link>
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

export default Services;
