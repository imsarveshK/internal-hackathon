import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-monastery.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-monastery-deep/80 via-primary/60 to-mountain-blue/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      {/* Floating Prayer Flags */}
      <div className="absolute top-20 left-10 w-16 h-2 bg-gradient-to-r from-prayer-orange to-prayer-yellow animate-float opacity-60" />
      <div className="absolute top-32 right-20 w-12 h-2 bg-gradient-to-r from-primary to-secondary animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 left-1/3 w-14 h-2 bg-gradient-to-r from-mountain-blue to-accent animate-float opacity-60" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 drop-shadow-2xl">
            Sacred
            <span className="bg-gradient-monastery bg-clip-text text-transparent"> Sikkim</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 font-medium drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            Discover the spiritual heritage of Himalayan monasteries. Book authentic experiences, explore ancient wisdom, and plan your journey through sacred landscapes.
          </p>
        </div>

        <div className="animate-slide-up flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            <Calendar className="group-hover:animate-bounce transition-all duration-300" />
            Explore Events
          </Button>
          <Button variant="golden" size="lg" className="group">
            <MapPin className="group-hover:animate-bounce transition-all duration-300" />
            Find Monasteries
          </Button>
          <Button variant="monastery" size="lg" className="group">
            <Users className="group-hover:animate-bounce transition-all duration-300" />
            Plan Tour
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-secondary-glow drop-shadow-lg">25+</div>
            <div className="text-background/80 font-medium">Sacred Monasteries</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold text-secondary-glow drop-shadow-lg">100+</div>
            <div className="text-background/80 font-medium">Cultural Events</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-secondary-glow drop-shadow-lg">500+</div>
            <div className="text-background/80 font-medium">Heritage Artifacts</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/60 rounded-full mt-2 animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;