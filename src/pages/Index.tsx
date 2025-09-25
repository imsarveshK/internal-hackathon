import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedMonasteries from "@/components/FeaturedMonasteries";
import EventsSection from "@/components/EventsSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedMonasteries />
        <EventsSection />
        <MapSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-monastery-deep text-background py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-monastery rounded-lg flex items-center justify-center shadow-golden">
              <span className="text-monastery-deep font-bold text-sm">🏔️</span>
            </div>
            <h3 className="text-xl font-bold">Sacred Sikkim</h3>
          </div>
          <p className="text-background/80 mb-6 max-w-2xl mx-auto">
            Preserving and sharing the spiritual heritage of Himalayan monasteries for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/70">
            <a href="/privacy" className="hover:text-secondary-glow transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-secondary-glow transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-secondary-glow transition-colors">Contact Us</a>
            <a href="/about" className="hover:text-secondary-glow transition-colors">About</a>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20 text-background/60 text-sm">
            © 2024 Sacred Sikkim. All rights reserved. Made with respect for Himalayan heritage.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
