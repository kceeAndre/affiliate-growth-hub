import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top Affiliate Marketing Trends to Watch in 2025",
    excerpt: "Discover the emerging trends shaping affiliate marketing, from AI-powered personalization to influencer partnerships and voice search optimization.",
    date: "November 10, 2025",
    category: "Trends",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How to Choose the Right Affiliate Networks for Your Niche",
    excerpt: "Learn the key factors to consider when selecting affiliate networks, including commission structures, product quality, and network reputation.",
    date: "November 5, 2025",
    category: "Tips",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Maximizing ROI with Data-Driven Affiliate Strategies",
    excerpt: "Explore advanced analytics techniques and KPIs that help optimize your affiliate campaigns for maximum profitability and sustained growth.",
    date: "October 28, 2025",
    category: "Insights",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with expert tips, trends, and strategies in affiliate marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-accent">{post.category}</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Calendar size={14} />
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="group/btn p-0 h-auto text-accent hover:text-accent/80">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;