import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Star, Eye } from "lucide-react";
import { useState, useEffect } from "react";

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    description: "The largest monastery in Sikkim, known as the Dharmachakra Centre",
    heritage: "3D Murals Available",
    events: 5,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    description: "One of the oldest monasteries, meaning 'Perfect Sublime Lotus'",
    heritage: "Ancient Manuscripts",
    events: 8,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1574438611568-4abf71f8e01f?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    description: "Sacred monastery believed to cleanse sins of devotees",
    heritage: "Sacred Artifacts",
    events: 3,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Enchey Monastery",
    location: "East Sikkim",
    description: "Known for its beautiful architecture and peaceful environment",
    heritage: "Traditional Arts",
    events: 6,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=400&fit=crop"
  }
];

const FeaturedMonasteries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % monasteries.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const getVisibleMonasteries = () => {
    return [monasteries[currentIndex]];
  };

  const nextMonastery = () => {
    setCurrentIndex((prev) => (prev + 1) % monasteries.length);
  };

  const prevMonastery = () => {
    setCurrentIndex((prev) => (prev - 1 + monasteries.length) % monasteries.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-monastery bg-clip-text text-transparent">Monasteries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most sacred and culturally significant monasteries across Sikkim
          </p>
        </div>

        {/* Single Monastery Display */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {getVisibleMonasteries().map((monastery) => (
              <Card key={monastery.id} className="group hover:shadow-heritage transition-all duration-500 hover:scale-105 border-monastery-light/20 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={monastery.image} 
                    alt={monastery.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-monastery-deep/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span className="text-sm font-medium">{monastery.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-background">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{monastery.location}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{monastery.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{monastery.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-accent" />
                      <span className="text-accent font-medium">{monastery.heritage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{monastery.events} upcoming events</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Heritage
                    </Button>
                    <Button variant="golden" size="sm" className="flex-1">
                      Book Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={prevMonastery}
            className="rounded-full p-2 w-10 h-10"
          >
            ←
          </Button>
          
          {/* Navigation Dots */}
          <div className="flex gap-3">
            {monasteries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary scale-125 shadow-golden' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={nextMonastery}
            className="rounded-full p-2 w-10 h-10"
          >
            →
          </Button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Monasteries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMonasteries;