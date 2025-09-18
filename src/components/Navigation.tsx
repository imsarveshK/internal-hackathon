import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calendar, Map, Users, BookOpen, Menu, Mountain } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      title: "Monasteries",
      icon: Mountain,
      description: "Explore sacred sites",
      items: [
        { title: "All Monasteries", href: "/monasteries" },
        { title: "Heritage Gallery", href: "/heritage" },
        { title: "3D Virtual Tours", href: "/virtual-tours" },
        { title: "Historical Timeline", href: "/history" }
      ]
    },
    {
      title: "Events",
      icon: Calendar,
      description: "Festivals & ceremonies",
      items: [
        { title: "Upcoming Events", href: "/events" },
        { title: "Book Tickets", href: "/booking" },
        { title: "Festival Calendar", href: "/calendar" },
        { title: "Past Events", href: "/past-events" }
      ]
    },
    {
      title: "Plan Visit",
      icon: Map,
      description: "Your journey guide",
      items: [
        { title: "Interactive Map", href: "/map" },
        { title: "Travel Routes", href: "/routes" },
        { title: "Accommodation", href: "/stay" },
        { title: "Local Guides", href: "/guides" }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-monastery-light/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-monastery rounded-lg flex items-center justify-center shadow-golden">
              <Mountain className="w-6 h-6 text-monastery-deep" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">Sacred Sikkim</h1>
              <p className="text-xs text-muted-foreground">Himalayan Monasteries</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-monastery-light/10 text-foreground font-medium">
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-6 bg-card/95 backdrop-blur-sm border border-monastery-light/30">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="grid gap-3">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink
                              key={subItem.title}
                              href={subItem.href}
                              className="block p-3 rounded-lg hover:bg-monastery-light/10 transition-colors group"
                            >
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {subItem.title}
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="outline" size="sm">
              <Users className="w-4 h-4 mr-2" />
              Contact Tours
            </Button>
            
            <Button variant="golden" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card/95 backdrop-blur-sm border-monastery-light/30">
                <div className="py-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-gradient-monastery rounded-lg flex items-center justify-center">
                      <Mountain className="w-5 h-5 text-monastery-deep" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-foreground">Sacred Sikkim</h1>
                      <p className="text-xs text-muted-foreground">Himalayan Monasteries</p>
                    </div>
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="space-y-6">
                    {navigationItems.map((item) => (
                      <div key={item.title} className="space-y-3">
                        <div className="flex items-center gap-3 text-foreground font-medium">
                          <item.icon className="w-5 h-5 text-primary" />
                          {item.title}
                        </div>
                        <div className="pl-8 space-y-2">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="space-y-3 mt-8">
                    <Button variant="outline" className="w-full">
                      <Users className="w-4 h-4 mr-2" />
                      Contact Tours
                    </Button>
                    <Button variant="golden" className="w-full">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;