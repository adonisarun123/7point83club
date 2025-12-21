import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Wind, Mountain, Waves, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import BinauralBeat from "@/components/BinauralBeat";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useState } from "react";

export default function Home() {
  const [isAmbiencePlaying, setIsAmbiencePlaying] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      <SchemaMarkup type="home" />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-forest.webp"
            alt="Misty Indian Forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </div>

        <div className="container relative z-10 pt-20 text-center text-white">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-4 text-sm font-medium tracking-[0.2em] uppercase opacity-80">
              <span>India</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Nature</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Resonance</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.9]">
              Realign your rhythm <br />
              <span className="italic font-light text-white/90">with the Earth's heartbeat.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="max-w-xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Small-group, eco-friendly immersions across India that pair mindful movement, nature, and qualified therapies to reset body and mind.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/retreats">
                <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-lg min-w-[200px]">
                  Explore Retreats
                </Button>
              </Link>
              <BinauralBeat
                baseFreq={200}
                beatFreq={7.83}
                onPlayChange={setIsAmbiencePlaying}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to Ground</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy / Intro Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
              We are not just a retreat. <br />
              <span className="italic text-muted-foreground">We are a reset button.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Modern life operates at a frantic pace, disconnected from the natural rhythms that our bodies evolved with.
                The Schumann Resonance—7.83Hz—is the electromagnetic heartbeat of the Earth.
              </p>
              <p>
                Our retreats are designed to bring you back to this frequency. Through a blend of ancient wisdom and modern science,
                we help you disconnect from the noise and reconnect with your inner silence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="block text-4xl font-serif mb-2">4</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Durations</span>
              </div>
              <div>
                <span className="block text-4xl font-serif mb-2">6</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Specializations</span>
              </div>
              <div>
                <span className="block text-4xl font-serif mb-2">12-20</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Group Size</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/images/meditation-close.webp"
                alt="Meditation Mudra"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-background p-8 shadow-xl border border-border max-w-xs hidden md:block">
              <p className="font-serif text-xl italic text-foreground">
                "The goal is not to escape life, but to prevent life from escaping you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Matrix / Cards */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Retreat Matrix</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Choose your journey</h2>
            </div>
            <p className="max-w-md text-muted-foreground text-right md:text-left">
              Four durations, six tracks. Find the perfect balance of time and intention for your reset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "5-Day Reset",
                subtitle: "Fast Reset",
                price: "₹29k – ₹55k",
                desc: "Simple repeatable routines, daily nature, and a strong focus on nervous system repair.",
                color: "bg-[#E8F3E8] text-[#1A3A2A]"
              },
              {
                title: "7-Day Rebalance",
                subtitle: "Deep Rebalance",
                price: "₹45k – ₹85k",
                desc: "Adds deeper practice blocks, therapy focus days, and a longer silence window.",
                color: "bg-[#F5EFE6] text-[#3D342B]"
              },
              {
                title: "11-Day Deep Work",
                subtitle: "Lifestyle Redesign",
                price: "₹75k – ₹1.45L",
                desc: "Skill workshops, stronger breath and strength progressions, and mindful habit architecture.",
                color: "bg-[#E6EEF5] text-[#1E2A38]"
              },
              {
                title: "21-Day Transform",
                subtitle: "Full Transformation",
                price: "₹1.65L – ₹3.5L",
                desc: "Extended phases that weave detox, strength, deep work, and finish with an integration week.",
                color: "bg-[#F5E6E6] text-[#3D2B2B]"
              }
            ].map((item, i) => (
              <div key={i} className={`group relative p-8 min-h-[400px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${item.color}`}>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60">{item.subtitle}</span>
                  <h3 className="font-serif text-3xl leading-none">{item.title}</h3>
                  <div className="w-12 h-[1px] bg-current opacity-20" />
                  <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
                </div>

                <div className="space-y-4">
                  <p className="font-serif text-xl">{item.price}</p>
                  <Button variant="ghost" className="w-full justify-between border border-current/20 hover:bg-current/5 group-hover:border-current/40">
                    Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Feature: The Practices */}
      <section className="py-0 relative bg-foreground text-background overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="relative h-[50vh] lg:h-auto">
            <img
              src="/images/retreat-yoga.webp"
              alt="Yoga Pavilion"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent lg:bg-gradient-to-t" />
          </div>

          <div className="flex flex-col justify-center p-12 md:p-24 space-y-12">
            <div className="space-y-6">
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Core Rituals</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Ancient practices for <br /> modern resilience.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: <Leaf className="w-6 h-6" />, title: "Nature Immersion", desc: "Forest baths, sunrise rituals, and barefoot grounding." },
                { icon: <Wind className="w-6 h-6" />, title: "Breathwork", desc: "Guided focus and calm protocols for regulation." },
                { icon: <Mountain className="w-6 h-6" />, title: "Strength", desc: "Safe progressions for posture and joint care." },
                { icon: <Sun className="w-6 h-6" />, title: "Conscious Food", desc: "Locally sourced, seasonal, and digestion-friendly." },
                { icon: <Waves className="w-6 h-6" />, title: "Therapies", desc: "Ayurveda-inspired massage and recovery rituals." },
                { icon: <Moon className="w-6 h-6" />, title: "Digital Detox", desc: "Screen-free zones to reset your attention span." },
              ].map((feature, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-primary">{feature.icon}</div>
                  <h4 className="font-serif text-xl">{feature.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {/* Abstract background pattern could go here */}
        </div>

        <div className="container max-w-3xl mx-auto space-y-10 relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl text-foreground">
            Ready to reset?
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Join a small group of like-minded individuals on a journey back to yourself.
            Applications are open for the upcoming season.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link href="/retreats">
              <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 text-xl">
                Start Application
              </Button>
            </Link>
            <Link href="/retreats">
              <Button size="lg" variant="outline" className="rounded-none px-10 h-16 text-xl">
                View Calendar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
