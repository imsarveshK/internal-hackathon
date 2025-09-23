import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, QrCode, Ticket } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Losar Festival",
    monastery: "Rumtek Monastery",
    date: "2024-10-15",
    time: "06:00 AM",
    duration: "3 days",
    description: "Tibetan New Year celebration with traditional dances and rituals",
    price: "₹2,500",
    capacity: 100,
    booked: 75,
    featured: true
  },
  {
    id: 2,
    title: "Butter Lamp Festival",
    monastery: "Pemayangtse Monastery",
    date: "2024-10-22",
    time: "07:00 PM",
    duration: "1 day",
    description: "Sacred ceremony of lighting thousand butter lamps",
    price: "₹1,500",
    capacity: 80,
    booked: 45,
    featured: false
  },
  {
    id: 3,
    title: "Cham Dance Performance",
    monastery: "Tashiding Monastery",
    date: "2024-10-28",
    time: "10:00 AM",
    duration: "4 hours",
    description: "Traditional masked dance depicting Buddhist teachings",
    price: "₹1,200",
    capacity: 60,
    booked: 38,
    featured: true
  }
];

const EventsSection = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-monastery-light/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming <span className="bg-gradient-sunrise bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience authentic Buddhist festivals and ceremonies with exclusive monastery access
          </p>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="sm">All Events</Button>
            <Button variant="outline" size="sm">Festivals</Button>
            <Button variant="outline" size="sm">Rituals</Button>
            <Button variant="outline" size="sm">Workshops</Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className={`group hover:shadow-heritage transition-all duration-500 hover:scale-105 border-monastery-light/30 bg-card/60 backdrop-blur-sm animate-slide-up ${
                event.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                {event.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-monastery text-monastery-deep text-xs font-bold px-3 py-1 rounded-full shadow-golden">
                    Featured
                  </div>
                )}
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.monastery}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
                
                {/* Event Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{event.time} • {event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-mountain-blue" />
                    <span>{event.booked}/{event.capacity} booked</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-monastery h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(event.booked / event.capacity) * 100}%` }}
                  />
                </div>

                {/* Price and Booking */}
                <div className="flex items-center justify-between pt-2">
                  <div className="text-lg font-bold text-primary">{event.price}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="group">
                      <QrCode className="w-4 h-4 group-hover:animate-pulse" />
                    </Button>
                    <Button variant="golden" size="sm" className="group">
                      <Ticket className="w-4 h-4 group-hover:animate-bounce" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar View Toggle */}
        <div className="text-center">
          <div className="inline-flex bg-card/50 backdrop-blur-sm rounded-lg p-1 border border-monastery-light/20">
            <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Calendar View
            </Button>
            <Button variant="ghost" size="sm">
              List View
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;