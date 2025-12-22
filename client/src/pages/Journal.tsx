import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { journalArticles, categories } from "@/data/journalArticles";
import { useState } from "react";

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles = selectedCategory === "All"
    ? journalArticles
    : journalArticles.filter(article => article.category === selectedCategory);

  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border pb-12">
          <div className="space-y-4">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">The Journal</span>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground">Notes from the field.</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Insights on nervous system regulation, ancient wisdom, and the science of transformation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full border-border hover:border-primary hover:text-primary"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
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
                  <span>•</span>
                  <span>{article.readTime}</span>
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

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
