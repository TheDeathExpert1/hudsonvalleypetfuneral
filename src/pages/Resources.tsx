import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Users, Home } from "lucide-react";

const Resources = () => {
  const articles = [
    {
      title: "What to Do When Your Pet Dies at Home",
      excerpt: "A compassionate guide to the immediate steps to take when your beloved pet passes away at home, including who to call and how to care for your pet's body.",
      category: "Guidance",
      icon: Home,
    },
    {
      title: "How to Help a Child Cope with Pet Loss",
      excerpt: "Age-appropriate ways to explain pet death to children and support them through the grieving process. Includes conversation starters and activities.",
      category: "Family Support",
      icon: Heart,
    },
    {
      title: "Cremation vs Burial: What's Right for Your Pet?",
      excerpt: "An objective comparison of cremation and burial options, including costs, legal considerations, environmental impact, and personal preferences.",
      category: "Decision Making",
      icon: BookOpen,
    },
    {
      title: "Eco-Friendly Pet Aftercare Options",
      excerpt: "Explore environmentally conscious choices for pet aftercare, including biodegradable urns, green burial, and memorial trees.",
      category: "Sustainability",
      icon: Users,
    },
  ];

  const supportResources = [
    {
      title: "Pet Loss Support Hotline",
      description: "24/7 crisis support specifically for pet loss",
      contact: "1-855-PETS-LOVE",
    },
    {
      title: "Local Support Groups",
      description: "Monthly meetings in Westchester and Rockland",
      contact: "Contact us for schedule",
    },
    {
      title: "Online Pet Loss Community",
      description: "Connect with others who understand your grief",
      contact: "www.petlosscommunity.org",
    },
    {
      title: "Professional Counseling",
      description: "Licensed therapists specializing in pet loss",
      contact: "We can provide referrals",
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
                Resources & Support
              </h1>
              <p className="text-xl text-muted-foreground">
                Helpful information and support to guide you through pet loss and the grieving process
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
                Helpful Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                        <article.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-primary mb-2 block">
                        {article.category}
                      </span>
                      <CardTitle className="font-heading text-xl">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {article.excerpt}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Read Article →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-muted/50 rounded-lg text-center">
                <p className="text-muted-foreground mb-4">
                  We're continuously adding new articles and resources. Check back regularly or contact us with topics you'd like to see covered.
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">Suggest a Topic</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">
                Grief Support Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {supportResources.map((resource, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      <p className="text-primary font-medium">{resource.contact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-4 text-center">
                    Understanding Pet Grief
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Grief over the loss of a pet is real and valid. The bond between humans and their animal companions is profound, and it's natural to experience deep sorrow when that bond is broken.
                    </p>
                    <p>
                      Common feelings include sadness, anger, guilt, and even physical symptoms like fatigue or loss of appetite. Everyone grieves differently, and there's no "right" timeline for healing.
                    </p>
                    <p>
                      Remember that seeking support is a sign of strength, not weakness. Whether through support groups, counseling, or conversations with understanding friends and family, reaching out can make a significant difference in your healing journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rainbow Bridge */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-6 text-center text-foreground">
                    The Rainbow Bridge
                  </h3>
                  <div className="prose prose-lg max-w-none text-muted-foreground italic leading-relaxed">
                    <p>
                      "Just this side of heaven is a place called Rainbow Bridge. When an animal dies that has been especially close to someone here, that pet goes to Rainbow Bridge. There are meadows and hills for all of our special friends so they can run and play together. There is plenty of food, water and sunshine, and our friends are warm and comfortable.
                    </p>
                    <p className="mt-4">
                      All the animals who had been ill and old are restored to health and vigor. Those who were hurt or maimed are made whole and strong again, just as we remember them in our dreams of days and times gone by. The animals are happy and content, except for one small thing; they each miss someone very special to them, who had to be left behind.
                    </p>
                    <p className="mt-4">
                      They all run and play together, but the day comes when one suddenly stops and looks into the distance. His bright eyes are intent. His eager body quivers. Suddenly he begins to run from the group, flying over the green grass, his legs carrying him faster and faster.
                    </p>
                    <p className="mt-4">
                      You have been spotted, and when you and your special friend finally meet, you cling together in joyous reunion, never to be parted again. The happy kisses rain upon your face; your hands again caress the beloved head, and you look once more into the trusting eyes of your pet, so long gone from your life but never absent from your heart.
                    </p>
                    <p className="mt-4">
                      Then you cross Rainbow Bridge together..."
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 text-center">
                    - Author Unknown
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              We're Here to Support You
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
              Whether you need immediate assistance or just someone to talk to, our compassionate team is available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Us</Link>
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

export default Resources;
