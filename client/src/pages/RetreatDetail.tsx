import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { retreats } from "@/data/retreats";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Check, Clock, MapPin, Sparkles } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function RetreatDetail() {
  const [match, params] = useRoute("/retreats/:id");
  const retreat = retreats.find((r) => r.id === params?.id);

  if (!retreat) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Retreat Not Found</h1>
            <Link href="/retreats">
              <Button>Back to Retreats</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={retreat.image}
          alt={retreat.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/retreats">
                <a className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Retreats
                </a>
              </Link>
              <span className="block text-primary font-medium tracking-widest uppercase text-sm mb-2">
                {retreat.subtitle}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                {retreat.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/90 text-sm md:text-base font-medium tracking-wide">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> {retreat.duration}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> {retreat.location}
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> {retreat.price}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {retreat.longDescription}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {retreat.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-border rounded-sm bg-muted/10">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span className="text-foreground/90">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Daily Rhythm</h2>
            <div className="space-y-0 border-l border-border ml-4">
              {retreat.dailyFlow.map((item, i) => (
                <div key={i} className="relative pl-8 pb-8 last:pb-0">
                  <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">
                    {item.time}
                  </span>
                  <span className="text-lg font-medium text-foreground">
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Accommodation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {retreat.accommodation}
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 p-8 border border-border bg-card rounded-sm space-y-8 shadow-sm">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Total Investment</span>
              <div className="text-4xl font-serif mt-2">{retreat.price}</div>
              <p className="text-xs text-muted-foreground mt-2">Per person, double occupancy</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">What's Included</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {retreat.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <Button size="lg" className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg">
                Apply for Spot
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Limited to 12 participants. <br />
                ₹10,000 deposit required to secure booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
