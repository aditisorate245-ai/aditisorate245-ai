import { Card } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "1st Rank - Platform Dance",
      event: "Firodiya Karandak (State Level)",
      icon: Award,
      description: "State-level dance competition showcasing creative excellence and performance skills",
    },
    {
      title: "1st Prize - Volleyball",
      event: "Kanetkar Trophy",
      icon: Trophy,
      description: "Team sport championship demonstrating leadership and athletic prowess",
    },
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excellence beyond academics - celebrating creativity and sportsmanship
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={achievement.title}
                className="p-8 hover-lift bg-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center">
                    <Icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-medium">{achievement.event}</p>
                    <p className="text-foreground/70 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
