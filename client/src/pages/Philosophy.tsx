import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Philosophy() {
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

        <div className="container max-w-4xl mx-auto space-y-24">
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
