import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-foreground">
              Built for the <br /> seekers of silence.
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                7point83 Club began as a personal experiment. After years of corporate burnout in Bengaluru, 
                we realized that "vacations" weren't working. We didn't need distraction; we needed restoration.
              </p>
              <p>
                We started scouting locations that had a specific quality—a palpable silence. 
                We partnered with local experts in Ayurveda, yoga, and nutrition to build a protocol 
                that wasn't just about relaxation, but about biological reset.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] lg:aspect-square"
          >
            <img 
              src="/images/about-community.webp" 
              alt="Community Gathering" 
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        </div>

        <div className="bg-muted/30 py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <h2 className="font-serif text-4xl md:text-5xl">The Collective</h2>
              <p className="text-xl text-muted-foreground font-light">
                We are a collective of teachers, healers, and hosts across India. 
                From the coffee plantations of Coorg to the high peaks of Himachal, 
                our team is united by a single mission: to help you slow down.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { name: "Arjun & Mira", role: "Founders", img: "/images/founder-portrait.webp" },
                { name: "Dr. Lakshmi", role: "Ayurvedic Physician", img: "/images/meditation-close.webp" }, // Placeholder reuse
                { name: "Kabir", role: "Lead Yoga Teacher", img: "/images/retreat-yoga.webp" } // Placeholder reuse
              ].map((member, i) => (
                <div key={i} className="group text-center space-y-4">
                  <div className="aspect-[3/4] overflow-hidden relative mx-auto w-full max-w-sm">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl">{member.name}</h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
