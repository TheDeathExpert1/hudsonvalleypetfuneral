import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Shield, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every pet and family receives our utmost care and empathy during their most difficult time.",
    },
    {
      icon: Shield,
      title: "Dignity & Respect",
      description: "We treat each beloved companion with the honor and reverence they deserve.",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "We offer environmentally responsible options for families who value sustainability.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Your needs guide our service, ensuring personalized care for you and your pet.",
    },
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
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born from personal experience with pet loss, we created Hudson Valley Pet Funeral to provide the compassionate, dignified service we wished we had during our own time of grief.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                    Why We Started
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      When our own beloved companion crossed the rainbow bridge, we found ourselves overwhelmed not just by grief, but by the difficult decisions that needed to be made immediately. We wished for someone who understood, someone who could guide us with both expertise and empathy.
                    </p>
                    <p>
                      That experience inspired us to create Hudson Valley Pet Funeral—a service dedicated to supporting families in Westchester, Rockland, and the Hudson Valley through one of life's most challenging moments. As a pet owner, you have the special responsibility of making aftercare choices on your pet's behalf. Working together with your veterinary clinic, we gently guide you through the process of making cremation arrangements that are fitting for you and your pet.
                    </p>
                    <p>
                      Today, we're honored to serve our community, helping families celebrate the unconditional love and joy their companions brought into their lives.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our dedicated team is here to support you with expertise, compassion, and understanding. Each member brings personal experience with pet loss and a genuine commitment to honoring the human-animal bond.
              </p>
              
              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Our staff includes certified pet loss counselors, experienced funeral service professionals, and compassionate support specialists who are available 24/7. We understand that losing a pet is losing a family member, and we're here to help you through every step of the journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Serving Your Community
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/95">
              Proudly serving families throughout Westchester County, Rockland County, and the Hudson Valley region with compassionate, professional pet funeral services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="px-6 py-2 bg-white/10 rounded-full">Westchester County</span>
              <span className="px-6 py-2 bg-white/10 rounded-full">Rockland County</span>
              <span className="px-6 py-2 bg-white/10 rounded-full">Hudson Valley</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
