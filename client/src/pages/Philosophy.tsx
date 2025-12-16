import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Activity, Moon, Sun, Trees } from "lucide-react";

const principles = [
  {
    id: 1,
    title: "Schumann Resonance",
    subtitle: "7.83 Hz",
    icon: <Activity className="w-8 h-8" />,
    description: "The Earth's electromagnetic heartbeat. It matches the human brain's alpha waves, promoting deep relaxation and healing.",
    detail: "Discovered by Winfried Otto Schumann, this frequency is the resonant frequency of the Earth's ionosphere. When we are in nature, our brainwaves naturally entrain to this pulse, leading to a state of 'grounded' calm."
  },
  {
    id: 2,
    title: "Circadian Rhythm",
    subtitle: "Light & Dark",
    icon: <Sun className="w-8 h-8" />,
    description: "Our internal body clock. Regulated by natural light and darkness, essential for hormonal balance and restorative sleep.",
    detail: "Modern artificial light disrupts this delicate cycle. Our retreats prioritize sunrise awakening and sunset wind-downs to reset your melatonin production and cortisol curves."
  },
  {
    id: 3,
    title: "Biophilia Effect",
    subtitle: "Nature Connection",
    icon: <Trees className="w-8 h-8" />,
    description: "Our innate biological connection to nature. Exposure to forests lowers cortisol, blood pressure, and pulse rate.",
    detail: "Japanese research on 'Shinrin-yoku' (Forest Bathing) proves that NK (Natural Killer) white blood cells increase after just one weekend in the woods, boosting immunity for up to a month."
  }
];

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-6">The Science of Grounding</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 text-foreground leading-[0.9]">
              7.83Hz: The Earth's <br /> Heartbeat
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              In 1952, physicist Winfried Otto Schumann discovered that the Earth has a pulse. 
              A natural electromagnetic resonance that surrounds our planet.
            </p>
          </motion.div>
        </div>

        <div className="w-full h-[60vh] relative overflow-hidden mb-24">
          <img 
            src="/images/philosophy-resonance.jpg" 
            alt="Schumann Resonance Visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container max-w-6xl mx-auto space-y-32">
          {/* Interactive Principles Section */}
          <section>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">The Science of Connection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hover (or tap) over the pillars below to explore the biological mechanisms behind our philosophy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((item, index) => (
                <motion.div
                  key={item.id}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  whileTap={{ scale: 0.98 }}
                  className="relative h-[400px] bg-card border border-border rounded-sm overflow-hidden cursor-pointer group"
                >
                  {/* Default State */}
                  <motion.div 
                    className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center"
                    animate={{ opacity: activeIndex === index ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 text-primary p-4 bg-primary/5 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{item.subtitle}</span>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Active/Hover State */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/5 p-8 flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-serif text-2xl mb-4 text-primary">{item.title}</h3>
                    <p className="text-foreground leading-relaxed font-medium">
                      {item.detail}
                    </p>
                    <div className="mt-8 w-12 h-1 bg-primary/20 rounded-full" />
                  </motion.div>
                  
                  {/* Animated Border */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-primary/0"
                    animate={{ 
                      borderColor: activeIndex === index ? "var(--primary)" : "transparent",
                      opacity: activeIndex === index ? 0.5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl">The Disconnect</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern cities vibrate at a chaotic frequency. High-rise buildings, electrical grids, and constant digital noise 
                drown out the Earth's natural signal. This dissonance creates stress, anxiety, and a feeling of being "unmoored."
              </p>
            </div>
            <div className="aspect-square bg-muted/30 rounded-full flex items-center justify-center border border-border p-12 relative overflow-hidden">
               <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full scale-50 animate-ping duration-[3s]" />
               <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full scale-75 animate-ping duration-[3s] delay-700" />
               <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full scale-90 animate-ping duration-[3s] delay-1000" />
               <span className="font-serif text-6xl text-primary/50">Chaos</span>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 aspect-square bg-primary/5 rounded-full flex items-center justify-center border border-primary/20 p-12 relative overflow-hidden">
               <div className="w-full h-full rounded-full bg-primary/10 animate-pulse duration-[7.83s]" />
               <span className="absolute font-serif text-6xl text-primary">7.83Hz</span>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="font-serif text-4xl">The Re-alignment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When we step back into nature, our brainwaves naturally entrain to the Alpha state (8-12Hz), 
                closely mirroring the Schumann Resonance. This is why a walk in the forest feels like "coming home."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our retreats are engineered environments designed to accelerate this process. Through grounding, 
                breathwork, and silence, we tune you back into the planet's frequency.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
