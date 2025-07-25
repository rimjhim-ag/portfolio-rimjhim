import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Globe, Zap, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and full-stack web applications built using the MERN stack and modern JavaScript frameworks.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric interface designs that blend aesthetic appeal with functionality for a seamless user experience.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Reliable post-launch support, maintenance, and feature enhancements to keep your site running smoothly.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Designing mobile-friendly layouts that ensure optimal performance across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Boost your website’s speed and responsiveness through efficient coding practices and advanced tooling.",
  },
  {
    icon: Globe,
    title: "Portfolio & Showcase Sites",
    description: "Build elegant personal branding or company showcase websites to highlight projects, products, or services effectively.",
  },
];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">Services</span> I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;