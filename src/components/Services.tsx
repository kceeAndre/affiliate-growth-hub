import { Card } from "@/components/ui/card";
import { Target, Users, BarChart3, Megaphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven campaigns optimized for maximum ROI and conversion rates.",
  },
  {
    icon: Users,
    title: "Affiliate Network Management",
    description: "Build and manage high-performing affiliate partnerships at scale.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description: "Real-time tracking and continuous optimization of your campaigns.",
  },
  {
    icon: Megaphone,
    title: "Multi-Channel Strategy",
    description: "Integrated campaigns across search, social, display, and native ads.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand your affiliate program to international markets seamlessly.",
  },
  {
    icon: Zap,
    title: "Conversion Optimization",
    description: "A/B testing and funnel optimization to maximize your conversions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Affiliate Marketing Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            From strategy to execution, we handle every aspect of your affiliate marketing program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-border bg-card"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
