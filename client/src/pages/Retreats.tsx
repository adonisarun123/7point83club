import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Retreats() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <h1 className="font-serif text-5xl md:text-7xl mb-8">Our Retreats</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          Explore our curated selection of immersive experiences designed to realign your natural rhythm.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder content for retreats list */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-muted/30 aspect-[3/4] flex items-center justify-center border border-border">
              <span className="text-muted-foreground">Retreat Card {i}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
