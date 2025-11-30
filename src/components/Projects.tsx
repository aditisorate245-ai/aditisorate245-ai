import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, MapPin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Mental Health Website",
      description:
        "A compassionate platform leveraging artificial intelligence to provide mental health support and resources to those in need.",
      icon: Brain,
      color: "primary",
      tech: ["AI/ML", "JavaScript", "Express.js", "MongoDB"],
    },
    {
      title: "Disaster Management Platform",
      description:
        "A comprehensive system designed to coordinate emergency responses and provide real-time information during natural disasters.",
      icon: Shield,
      color: "secondary",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      title: "Rural Tour Website",
      description:
        "An innovative platform promoting rural tourism, connecting travelers with authentic village experiences and supporting local communities.",
      icon: MapPin,
      color: "accent",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "Power BI"],
    },
  ];

  return (
    <section id="projects" className="section-container bg-muted/30">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building solutions that make a real difference in people's lives
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="p-6 hover-lift bg-card animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-${project.color}-light flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-7 w-7 text-${project.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-foreground/70 leading-relaxed min-h-[4rem]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border hover:bg-muted/50"
                      >
                        {tech}
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

export default Projects;
