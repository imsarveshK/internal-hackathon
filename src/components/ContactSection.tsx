import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, GraduationCap, MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-monastery-light/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Plan Your <span className="bg-gradient-monastery bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with travel agents and arrange guided tours for groups and educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Form - Full Width */}
          <Card className="bg-card/60 backdrop-blur-sm border-monastery-light/30 shadow-heritage max-w-2xl mx-auto w-full">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Get in Touch</CardTitle>
              <p className="text-muted-foreground text-center">Fill out the form below and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name *</label>
                  <Input placeholder="Your full name" className="border-monastery-light/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input type="email" placeholder="your@email.com" className="border-monastery-light/30" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Organization</label>
                  <Input placeholder="Travel agency / College" className="border-monastery-light/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tour Type *</label>
                  <Select>
                    <SelectTrigger className="border-monastery-light/30">
                      <SelectValue placeholder="Select tour type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cultural">Cultural Tour</SelectItem>
                      <SelectItem value="educational">Educational Tour</SelectItem>
                      <SelectItem value="spiritual">Spiritual Retreat</SelectItem>
                      <SelectItem value="photography">Photography Tour</SelectItem>
                      <SelectItem value="festival">Festival Experience</SelectItem>
                      <SelectItem value="custom">Custom Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Group Size</label>
                  <Input type="number" placeholder="Number of participants" className="border-monastery-light/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Preferred Dates</label>
                  <Input type="date" className="border-monastery-light/30" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Requirements & Notes</label>
                <Textarea 
                  placeholder="Tell us about your specific requirements, accessibility needs, or any special requests..."
                  className="min-h-[120px] border-monastery-light/30"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Send Inquiry
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>You can also reach us directly at:</p>
                <div className="flex flex-col gap-1 mt-2">
                  <a href="mailto:tours@sikkimmonasteries.com" className="text-primary hover:underline">
                    tours@sikkimmonasteries.com
                  </a>
                  <a href="tel:+917894561230" className="text-primary hover:underline">
                    +91 78945 61230
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;