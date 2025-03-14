
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "Student Satisfaction", value: 95 },
  { label: "Graduation Rate", value: 92 },
  { label: "Employment Rate", value: 89 },
  { label: "International Students", value: 30 },
];

const InstitutionAbout = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Institution</h2>
            <Separator className="mb-6 max-w-md" />
            <p className="text-muted-foreground mb-6">
              Founded in 1985, Achiever's Academy has established itself as a leading institution dedicated to academic excellence and innovation. Our mission is to empower students with knowledge, skills, and values necessary to thrive in a global society.
            </p>
            <p className="text-muted-foreground mb-8">
              With a faculty comprising distinguished scholars and industry professionals, we offer a dynamic learning environment that fosters critical thinking, creativity, and personal growth.
            </p>
            <Button>Learn Our History</Button>
          </div>
          
          <div className="bg-secondary/50 rounded-xl p-8 shadow-md reveal">
            <h3 className="text-2xl font-bold mb-6">Our Performance</h3>
            
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{stat.label}</span>
                    <span className="font-bold">{stat.value}%</span>
                  </div>
                  <Progress value={stat.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionAbout;
