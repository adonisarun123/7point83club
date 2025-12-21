import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Why 7.83Hz Matters for Your Nervous System",
    category: "Science",
    date: "Oct 12, 2024",
    excerpt: "Understanding the biological impact of the Schumann Resonance on human circadian rhythms.",
    image: "/images/philosophy-resonance.webp"
  },
  {
    title: "The Art of Doing Nothing: Niksen in the Indian Context",
    category: "Lifestyle",
    date: "Sep 28, 2024",
    excerpt: "How the Dutch concept of Niksen translates to the Indian philosophy of 'Shunya' or emptiness.",
    image: "/images/journal-hero.webp"
  },
  {
    title: "Seasonal Eating: A Guide to Monsoon Nutrition",
    category: "Nutrition",
    date: "Aug 15, 2024",
    excerpt: "Ayurvedic principles for maintaining digestive fire (Agni) during the rainy season.",
    image: "/images/mindful-eating.webp"
  },
  {
    title: "Digital Detox: 3 Days to Reclaim Your Attention",
    category: "Practice",
    date: "Jul 04, 2024",
    excerpt: "A practical guide to unplugging without losing your mind (or your job).",
    image: "/images/meditation-close.webp"
  }
];

export default function Journal() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border pb-12">
          <div className="space-y-4">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">The Journal</span>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground">Notes from the field.</h1>
          </div>
          <div className="flex gap-2">
            {["All", "Science", "Lifestyle", "Nutrition", "Practice"].map((tag) => (
              <Button key={tag} variant="outline" size="sm" className="rounded-full border-border hover:border-primary hover:text-primary">
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group cursor-pointer space-y-6"
              onClick={() => {
                // In a real implementation, this would navigate to the article detail page
                // For now, we'll show a toast notification
                alert(`Article "${article.title}" - Full article coming soon!`);
              }}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-primary">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium border-b border-transparent group-hover:border-primary transition-all">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
