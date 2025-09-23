import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Mountain, Route, Compass, Map as MapIcon } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-mountain">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
            Interactive <span className="text-secondary-glow">Monastery Map</span>
          </h2>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Explore monasteries across Sikkim with 3D mapping, optimal routes, and nearby attractions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Map Placeholder - Full Width */}
          <Card className="h-[500px] bg-card/90 backdrop-blur-sm border-background/20 shadow-heritage">
            <CardContent className="p-6 h-full flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-32 h-32 bg-gradient-monastery rounded-full flex items-center justify-center shadow-golden">
                  <MapIcon className="w-16 h-16 text-monastery-deep animate-float" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-glow"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">3D Interactive Map</h3>
                  <p className="text-muted-foreground">Coming Soon - Explore monasteries with immersive 3D mapping technology</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="monastery" size="sm">
                      <Compass className="w-4 h-4 mr-2" />
                      Preview Map
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center text-background animate-fade-in">
            <div className="text-3xl font-bold text-secondary-glow mb-2">25+</div>
            <div className="text-background/80">Mapped Monasteries</div>
          </div>
          <div className="text-center text-background animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-secondary-glow mb-2">50+</div>
            <div className="text-background/80">Travel Routes</div>
          </div>
          <div className="text-center text-background animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-secondary-glow mb-2">100+</div>
            <div className="text-background/80">Attractions</div>
          </div>
          <div className="text-center text-background animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-secondary-glow mb-2">4.9★</div>
            <div className="text-background/80">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;