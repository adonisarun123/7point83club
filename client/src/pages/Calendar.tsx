import Layout from "@/components/Layout";
import RetreatCalendar from "@/components/RetreatCalendar";
import { motion } from "framer-motion";

export default function Calendar() {
    return (
        <Layout>
            <div className="pt-32 pb-20 container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="mb-12">
                        <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">
                            Retreat Schedule
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground">
                            Upcoming Programs
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                            View our confirmed retreat schedule and find the perfect dates for your journey.
                            Click on any retreat to learn more and apply.
                        </p>
                    </div>

                    <RetreatCalendar />
                </motion.div>
            </div>
        </Layout>
    );
}
