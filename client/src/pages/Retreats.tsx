import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react";

const retreats = [
  {
    id: 1,
    title: "Signature Rhythm",
    duration: "5 Days",
    location: "Coorg",
    price: "₹29,000",
    image: "/images/retreat-yoga.jpg",
    description: "Balanced yoga, meditation, nature immersion, strength, and therapy support. The perfect introduction to the 7point83 lifestyle.",
    tags: ["Beginner Friendly", "Nature", "Yoga"]
  },
  {
    id: 2,
    title: "Sleep & Stress Recovery",
    duration: "7 Days",
    location: "Wayanad",
    price: "₹45,000",
    image: "/images/hero-forest.jpg",
    description: "Burnout reset with HRV-friendly routines and evening downshift protocols. Designed for high-performers needing deep rest.",
    tags: ["Burnout", "Sleep", "Relaxation"]
  },
  {
    id: 3,
    title: "Gut & Metabolic Reset",
    duration: "7 Days",
    location: "Goa Hinterlands",
    price: "₹48,000",
    image: "/images/mindful-eating.jpg",
    description: "Mindful eating rituals, kitchen workshops, and digestive-friendly movement. Rebuild your relationship with food.",
    tags: ["Detox", "Nutrition", "Wellness"]
  },
  {
    id: 4,
    title: "Deep Work & Focus",
    duration: "11 Days",
    location: "Himalayas",
    price: "₹75,000",
    image: "/images/meditation-close.jpg",
    description: "Attention reset, screen detox, and clarity-building deep work. For creatives and leaders seeking a breakthrough.",
    tags: ["Digital Detox", "Focus", "Leadership"]
  },
  {
    id: 5,
    title: "Traditional Rejuvenation",
    duration: "14 Days",
    location: "Kerala",
    price: "₹1,10,000",
    image: "/images/about-community.jpg",
    description: "Ayurveda-inspired therapies, cleansing, and restorative movement. A deep dive into ancient healing traditions.",
    tags: ["Ayurveda", "Healing", "Therapy"]
  },
  {
    id: 6,
    title: "The Transformation",
    duration: "21 Days",
    location: "Rishikesh",
    price: "₹1,65,000",
    image: "/images/philosophy-resonance.jpg",
    description: "Extended phases that weave detox, strength, deep work, and finish with an integration week. A complete life reset.",
    tags: ["Transformation", "Intensive", "Life Change"]
  }
];

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
                  <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-all">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
