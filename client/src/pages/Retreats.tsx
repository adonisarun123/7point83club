import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { retreats } from "@/data/retreats";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Link } from "wouter";

export default function Retreats() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">Our Offerings</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground">
            Curated journeys for <br /> every intention.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            Whether you need a quick nervous system reset or a deep lifestyle transformation, 
            our retreats are designed to meet you where you are.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreats.map((retreat, index) => (
            <motion.div 
              key={retreat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={retreat.image} 
                  alt={retreat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  {retreat.duration}
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-widest">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {retreat.location}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 12-15 Spots</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                    {retreat.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {retreat.description}
                </p>
                
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-serif text-lg">{retreat.price}</span>
                  <Link href={`/retreats/${retreat.id}`}>
                    <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-all">
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
