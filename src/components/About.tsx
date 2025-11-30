import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container bg-muted/30">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a creative soul and a heart for social impact
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Personal Bio Card */}
          <Card className="p-6 hover-lift bg-card animate-fade-up">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a team player who loves using technology for social causes. Connecting with
                people energizes me, and I bring creativity from my love of acting, dancing, and
                sports into everything I do.
              </p>
            </div>
          </Card>

          {/* Education Card */}
          <Card className="p-6 hover-lift bg-card animate-fade-up animate-delay-100">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
              <div className="space-y-2">
                <p className="font-medium text-foreground">
                  B.E. in Information Technology
                </p>
                <p className="text-sm text-muted-foreground">
                  PES Modern College of Engineering (PES MCOE)
                </p>
                <p className="text-sm text-primary font-medium">
                  Currently in 3rd Year
                </p>
              </div>
            </div>
          </Card>

          {/* Interests Card */}
          <Card className="p-6 hover-lift bg-card animate-fade-up animate-delay-200">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Beyond Tech</h3>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me expressing creativity through dance and acting,
                or staying active with sports. I believe a balanced life fuels better innovation.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
