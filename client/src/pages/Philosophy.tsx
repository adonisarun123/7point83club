import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Activity, Moon, Sun, Trees } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import BinauralBeat from "@/components/BinauralBeat";
import FrequencyVisualizer from "@/components/FrequencyVisualizer";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

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

        <div className="w-full h-[60vh] relative overflow-hidden mb-24 group">
          <img 
            src="/images/philosophy-resonance.jpg" 
            alt="Schumann Resonance Visualization" 
            className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Audio Control Overlay */}
          <div className="absolute bottom-8 right-8 z-10">
            <BinauralBeat onPlayChange={setIsAudioPlaying} />
          </div>
        </div>

        <div className="container max-w-6xl mx-auto space-y-32">
          {/* Interactive Principles Section */}
          <section>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">The Science of Connection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto hidden md:block">
                Hover over the pillars below to explore the biological mechanisms behind our philosophy.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:hidden">
                Swipe to explore the biological mechanisms behind our philosophy. Tap for details.
              </p>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {principles.map((item, index) => (
                <motion.div
                  key={item.id}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
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

            {/* Mobile Carousel */}
            <div className="md:hidden overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {principles.map((item, index) => (
                  <div key={item.id} className="flex-[0_0_85%] min-w-0 pl-4">
                    <motion.div
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      whileTap={{ scale: 0.98 }}
                      className="relative h-[400px] bg-card border border-border rounded-sm overflow-hidden"
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

                      {/* Active State */}
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
                      
                      {/* Active Border */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-primary/0"
                        animate={{ 
                          borderColor: activeIndex === index ? "var(--primary)" : "transparent",
                          opacity: activeIndex === index ? 0.5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === selectedIndex ? "bg-primary w-6" : "bg-border"
                    )}
                    onClick={() => emblaApi?.scrollTo(index)}
                  />
                ))}
              </div>
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
            <div className="aspect-square bg-muted/30 rounded-full flex items-center justify-center border border-border relative overflow-hidden">
               <div className="absolute inset-0 opacity-30">
                 <FrequencyVisualizer mode="chaos" />
               </div>
               <span className="font-serif text-6xl text-primary/50 relative z-10">Chaos</span>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 aspect-square bg-primary/5 rounded-full flex items-center justify-center border border-primary/20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-40">
                 <FrequencyVisualizer mode="coherent" />
               </div>
               <motion.span 
                 className="absolute font-serif text-6xl text-primary z-10"
                 animate={isAudioPlaying ? {
                   scale: [1, 1.1, 1],
                   opacity: [0.8, 1, 0.8],
                 } : {
                   scale: 1,
                   opacity: 1
                 }}
                 transition={{
                   duration: 4, // Matches a slow breathing cycle (4s in, 4s out approx)
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               >
                 7.83Hz
               </motion.span>
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
