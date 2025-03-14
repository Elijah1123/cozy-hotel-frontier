
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const facultyMembers = [
  {
    name: "Dr. Elizabeth Chen",
    position: "Dean of Business School",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Prof. James Wilson",
    position: "Computer Science Chair",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Dr. Sophia Martinez",
    position: "Liberal Arts Professor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
  },
  {
    name: "Prof. Michael Johnson",
    position: "International Relations Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Distinguished Faculty</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts and renowned academics who are leaders in their respective fields.
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animate">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${faculty.image})` }}></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-1">{faculty.name}</h3>
                <p className="text-muted-foreground">{faculty.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
