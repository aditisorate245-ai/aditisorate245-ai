import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-container min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-up">
          <div className="space-y-2">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              <img src="/profile.jpg" alt="Profile"
      className="w-24 h-24 rounded-full object-cover" />Aditi Kiran Sorate 
            </h1>
            <p className="text-xl text-muted-foreground">
              3rd Year B.E. Information Technology Student
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-xl">
            Building socially impactful websites with passion and purpose. I believe in using
            technology to create positive change in the world.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover-lift"
              asChild
            >
              <a
                href="https://github.com/aditisorate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover-lift"
              asChild
            >
              <a
                href="https://linkedin.com/in/aditisorate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all mt-8 group"
          >
            <span className="text-sm font-medium">Explore More</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>

        {/* Professional Photo */}
        <div className="animate-fade-up animate-delay-200">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-medium hover-lift">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
