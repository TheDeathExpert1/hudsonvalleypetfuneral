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
                Honoring the Family Members Who Gave Us Unconditional Love
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hudson Valley Pet Funeral was born from a simple truth: pets are family. And when family passes, they deserve to be honored with the same dignity, compassion, and care that we extend to any beloved family member.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Story */}
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
                      As a third-generation funeral director, our founder has spent a lifetime helping families through their most difficult moments. Over the years, one thing became increasingly clear—the loss of a pet creates grief that is just as profound, just as real, and just as deserving of recognition as any other loss. Yet families often had nowhere to turn for the kind of compassionate, professional services they needed to properly say goodbye.
                    </p>
                    <p>
                      That's why Hudson Valley Pet Funeral exists.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Your Grief Deserves Recognition */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6 text-center">
                Your Grief Deserves Recognition
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We understand that your companion wasn't "just" anything. Whether they had feathers, fur, scales, or hooves—whether they greeted you at the door, perched on your shoulder, curled up in your lap, or grazed peacefully in your yard—they were yours. They were your friend through life's ups and downs, your source of comfort and joy, and a member of your family who loved you unconditionally.
                </p>
                <p>
                  The grief you feel when they pass is not something to minimize or rush through—it's something to honor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Every Life Deserves to Be Remembered */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6 text-center">
                Every Life Deserves to Be Remembered
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Hudson Valley Pet Funeral, we serve all companion animals. We've helped families say goodbye to dogs and cats, rabbits and ferrets, birds and hamsters, guinea pigs and gerbils, snakes and lizards, miniature pigs and goats, alpacas and even exotic pets like monkeys.
                </p>
                <p>
                  The size of your pet doesn't determine the size of your loss. What matters is that they were loved—and that makes them worthy of being remembered with dignity and respect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6 text-center">
                Compassionate Services Tailored to Your Needs
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                We created Hudson Valley Pet Funeral to give families throughout Westchester, Rockland, and the Hudson Valley the opportunity to mourn and celebrate their companions in meaningful ways.
              </p>

              <Card className="border-border">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">In-home funerals and memorial services</strong> that allow you to say goodbye in the comfort of your own home
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Private and communal cremation services</strong> handled with care and respect
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Aquamation (water cremation)</strong>, an eco-friendly alternative
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Home burial guidance and support</strong> for families who wish to lay their companion to rest on their own property
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pet cemetery coordination</strong> at respected facilities including Hartsdale Pet Cemetery, Snow Mountain Pet Cemetery & Crematory, Forever Angels Pet Cemetery, Riverside Pet Cemetery, Regency Forest Park, and other locations throughout New York, New Jersey, and Connecticut
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pet hospice support</strong> to help you through your companion's final days with compassion and guidance
                      </span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-6 text-center italic">
                    Whatever farewell feels right for your family, we're here to help you create it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Same Care */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6 text-center">
                The Same Care We've Always Provided
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Drawing on generations of funeral service experience, we bring the same professionalism, attention to detail, and genuine compassion to pet families that our family has provided to human families for decades. We handle your companion with the utmost respect and dignity from the moment they come into our care. We listen to what you need. We never rush you. And we help you create a memorial experience that truly honors the unique bond you shared.
                </p>
                <p>
                  Your pet gave you unconditional love. In their final journey, they deserve nothing less than our very best care—and you deserve support from people who truly understand that grief is grief, and love is love.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Serving Our Community
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/95">
              We're proud to serve families throughout the Hudson Valley region, and we're honored that you would trust us during this difficult time. Whether you need immediate assistance or want to plan ahead for the future, we're here for you with compassion, understanding, and the expertise that comes from generations of caring service.
            </p>
            <p className="text-2xl font-heading font-semibold mb-8 text-white">
              Because family is family—no matter how many legs they have, whether they have wings, fins, or paws.
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
