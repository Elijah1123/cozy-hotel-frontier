
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Globe, Monitor, Users } from "lucide-react";

const programs = [
  {
    title: "Business Administration",
    description: "Develop critical business skills and leadership qualities for the modern corporate world.",
    icon: Users,
  },
  {
    title: "Computer Science",
    description: "Learn programming, algorithms, and computational thinking to solve complex problems.",
    icon: Monitor,
  },
  {
    title: "Liberal Arts",
    description: "Explore philosophy, literature, and the arts while developing critical thinking abilities.",
    icon: BookOpen,
  },
  {
    title: "International Relations",
    description: "Understand global politics, economics, and cultural dynamics in our interconnected world.",
    icon: Globe,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive range of programs is designed to provide students with the knowledge and skills needed for success in their chosen fields.
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animate">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <program.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-primary hover:underline font-medium">
                  Learn more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
