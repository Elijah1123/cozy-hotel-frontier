
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const campusImages = [
  {
    title: "Main Building",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "University Library",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
  },
  {
    title: "Student Center",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Campus = () => {
  return (
    <section id="campus" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Campus</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful campus, featuring state-of-the-art facilities designed to enhance the learning experience.
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animate">
          {campusImages.map((item, index) => (
            <Card key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-72 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="text-primary hover:underline text-lg font-medium">
            View more campus photos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Campus;
