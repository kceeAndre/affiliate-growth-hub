import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "347%",
    label: "Average ROI",
    description: "Across all client campaigns",
  },
  {
    icon: Users,
    value: "2.5M+",
    label: "Quality Leads",
    description: "Generated for our clients",
  },
  {
    icon: DollarSign,
    value: "$50M+",
    label: "Revenue Driven",
    description: "In the last 12 months",
  },
  {
    icon: Award,
    value: "150+",
    label: "Happy Clients",
    description: "Trust us with their growth",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Results That Speak Volumes
          </h2>
          <p className="text-xl text-muted-foreground">
            We don't just promise results—we deliver them consistently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/20 border-border"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="p-12 bg-primary text-primary-foreground">
            <div className="text-center">
              <div className="text-6xl mb-6">"</div>
              <p className="text-2xl mb-8 leading-relaxed">
                AffiliateX transformed our marketing strategy. Within 6 months, we saw a 400% increase in qualified leads and our revenue doubled. Their team is professional, responsive, and truly invested in our success.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">JD</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">John Davidson</div>
                  <div className="text-primary-foreground/70">CEO, TechScale Inc</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
