import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, BarChart3, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Databases",
      icon: Database,
      color: "primary",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "secondary",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Express.js", "C++"],
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "accent",
      skills: ["Excel", "Power BI"],
    },
    {
      title: "Design",
      icon: Palette,
      color: "primary",
      skills: ["Web Design", "UI/UX Principles"],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building impactful digital solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`p-6 hover-lift bg-card animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${category.color}-light flex items-center justify-center`}
                  >
                    <Icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-muted hover:bg-muted/80 text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
