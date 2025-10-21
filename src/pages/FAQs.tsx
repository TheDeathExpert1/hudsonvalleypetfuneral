import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQs = () => {
  const faqs = [
    {
      question: "What happens during pet cremation?",
      answer: "During individual cremation, your pet is placed in a clean cremation chamber alone. The process typically takes 2-4 hours depending on size. After cremation, the ashes are carefully collected, processed to ensure uniformity, and placed in your chosen urn or container. We maintain strict identification protocols throughout to ensure you receive only your pet's ashes."
    },
    {
      question: "Can I witness the cremation?",
      answer: "Yes, we offer witnessing services for families who wish to be present. This is available with our individual cremation packages for an additional fee. Many families find this provides closure and peace of mind. We provide a comfortable viewing area and our staff will guide you through the process with compassion and respect."
    },
    {
      question: "How long does the cremation process take?",
      answer: "Individual cremation typically takes 2-4 hours depending on your pet's size. The complete process, from pickup to return of ashes, usually takes 3-7 days. We offer rush service for families who need their pet's ashes returned more quickly. For standard service, we'll keep you informed throughout the process and schedule a convenient time for return or pickup of ashes."
    },
    {
      question: "Can I bury my pet at home?",
      answer: "Home burial is legal in many areas of New York, but regulations vary by county and municipality. We provide comprehensive guidance on local laws, proper burial depth (typically 3-4 feet), location selection (away from water sources and property lines), and environmental considerations. It's important to check with your local zoning board and consider future property plans before proceeding with home burial."
    },
    {
      question: "What's the difference between individual and communal cremation?",
      answer: "Individual cremation means your pet is cremated alone, and you receive their ashes back in an urn. Communal cremation means multiple pets are cremated together, and ashes are not returned but are respectfully scattered in our memorial garden. Individual cremation costs more but allows you to keep your pet's remains or scatter them in a location meaningful to you."
    },
    {
      question: "How do I know I'm getting my pet's ashes back?",
      answer: "We use a strict identification system throughout the entire process. Your pet is assigned a unique identification number that stays with them from pickup through cremation. This ID is cross-referenced at every step and is placed with the ashes in your chosen urn. We also provide a certificate of cremation that includes your pet's identification information."
    },
    {
      question: "What size urn do I need?",
      answer: "As a general rule, one pound of body weight equals approximately one cubic inch of ashes. For example, a 50-pound dog would need an urn with a capacity of at least 50 cubic inches. We always recommend going slightly larger to ensure plenty of room. Our team will help you select the appropriate size based on your pet's weight."
    },
    {
      question: "Do you offer services for all types of pets?",
      answer: "Yes, we provide compassionate aftercare for all pets including dogs, cats, birds, rabbits, guinea pigs, reptiles, and other companion animals. Our services are tailored to honor your beloved companion regardless of species or size. Pricing varies based on the size of your pet."
    },
    {
      question: "What should I do if my pet dies at home?",
      answer: "First, take a moment to say goodbye if you need to. Then, you can call us 24/7 at (123) 456-7890. While waiting for pickup, you can place your pet in a cool location, wrapped in a favorite blanket if you wish. There's no rush—we're available whenever you're ready. Our compassionate staff will guide you through the next steps when you call."
    },
    {
      question: "What if my pet dies after hours?",
      answer: "We're available 24/7, 365 days a year. There's never a wrong time to call us. Whether it's the middle of the night, a weekend, or a holiday, we're here to help. We can arrange pickup at a time that works for you, whether that's immediately or the next day."
    },
    {
      question: "Can I get a paw print of my pet?",
      answer: "Yes! Paw print keepsakes are included in our Standard and Premium packages, and can be added to any package for an additional fee. We create clay impression paw prints that are beautifully detailed and can be framed or displayed. We can also provide ink prints on special paper."
    },
    {
      question: "Do you offer grief support?",
      answer: "Yes, we provide grief resources and can connect you with pet loss support groups and certified pet loss counselors. We understand that losing a pet is losing a family member, and grief is a natural response. Our resource center includes articles, poems, and guidance for both adults and children dealing with pet loss."
    },
    {
      question: "How much does pickup cost?",
      answer: "Pickup fees range from $50-$100 depending on your location within our service area (Westchester, Rockland, and Hudson Valley). We'll provide an exact price when you call based on your specific address. Emergency or rush pickups may have additional fees."
    },
    {
      question: "Can you pick up my pet from my veterinarian?",
      answer: "Absolutely. We work closely with veterinary offices throughout our service area. We can arrange pickup directly from your vet's office at a time convenient for you and the practice. Many vets are familiar with our services and can coordinate with us on your behalf."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, debit cards, cash, and checks. Payment is typically due at the time of service arrangement. We understand this is a difficult time and can work with you on payment arrangements if needed. Please don't hesitate to discuss your situation with us."
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                We're here to answer your questions and provide guidance during this difficult time
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our compassionate team is available 24/7 to answer any questions you may have
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+1234567890">Call (123) 456-7890</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Help */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
              We understand this is an emotional time. Our team is available 24/7 to provide immediate support and guidance.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <a href="tel:+1234567890">Call Now: (123) 456-7890</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;
