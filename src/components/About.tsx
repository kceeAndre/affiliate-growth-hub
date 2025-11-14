import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics and real-time performance data.",
  },
  {
    icon: Rocket,
    title: "Rapid Execution",
    description: "Launch campaigns quickly and iterate based on performance insights.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Full visibility into campaign performance with detailed ROI tracking.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose AffiliateX?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just another marketing agency. We're your growth partners, dedicated to scaling your business through performance-based strategies that actually work.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 10 years of experience in affiliate marketing, we've helped hundreds of brands achieve exponential growth. Our team combines deep industry expertise with cutting-edge technology to deliver results that exceed expectations.
            </p>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
