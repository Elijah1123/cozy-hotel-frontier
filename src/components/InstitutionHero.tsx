
import { Button } from "@/components/ui/button";

const InstitutionHero = () => {
  return (
    <section id="home" className="pt-28 md:pt-36 pb-20 md:pb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent opacity-80 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Empowering Minds,<br />
              <span className="text-primary">Shaping Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Achiever's Academy is committed to providing a transformative educational experience that prepares students for success in a rapidly changing world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-medium">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Take a Virtual Tour
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionHero;
