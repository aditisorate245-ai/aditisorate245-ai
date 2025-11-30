import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aditisorate245@gmail.com",
      href: "mailto:aditi.sorate245@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8080043940",
      href: "tel:+8080043940",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aditisorate",
      href: "https://www.linkedin.com/in/aditi-sorate-7a9a6533b",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aditisorate",
      href: "https://github.com/aditisorate245-ai",
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="section-container bg-muted/30">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations. Reach out and
            let's create something amazing together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={contact.label}
                className="p-6 hover-lift bg-card animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="space-y-3 block"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-${contact.color}-light flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-6 w-6 text-${contact.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                    <p className="text-sm text-foreground font-medium break-all">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up animate-delay-300">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
            asChild
          >
            <a href="mailto:aditisorate245@gmail.com">
              <Send className="mr-2 h-5 w-5" />
              Send a Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
