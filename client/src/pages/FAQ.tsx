import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        category: "General",
        questions: [
            {
                q: "What is the Schumann Resonance (7.83Hz)?",
                a: "The Schumann Resonance is the electromagnetic frequency of the Earth, measured at approximately 7.83Hz. It's often called the 'heartbeat of the Earth.' Research suggests that human brainwaves naturally synchronize with this frequency during deep relaxation and meditation, promoting healing and balance."
            },
            {
                q: "Who are the retreats designed for?",
                a: "Our retreats are designed for anyone seeking to reset their nervous system, reduce stress, and reconnect with nature. Whether you're experiencing burnout, seeking clarity, or simply want to deepen your wellness practice, our programs cater to all levels—from complete beginners to experienced practitioners."
            },
            {
                q: "What is the group size?",
                a: "We maintain small group sizes of 12-20 participants to ensure personalized attention and create an intimate, supportive environment. This allows for meaningful connections while maintaining the transformative power of group energy."
            }
        ]
    },
    {
        category: "Booking & Logistics",
        questions: [
            {
                q: "How do I book a retreat?",
                a: "Click the 'Apply Now' button on any retreat page or our homepage. You'll fill out a brief application form to help us understand your needs and intentions. Once approved, we'll send you booking details and payment instructions."
            },
            {
                q: "What is your cancellation policy?",
                a: "Full refund if cancelled 30+ days before the retreat. 50% refund if cancelled 15-29 days before. No refund for cancellations within 14 days of the retreat start date. We recommend travel insurance for unforeseen circumstances."
            },
            {
                q: "What's included in the retreat price?",
                a: "All retreat prices include accommodation, all meals (breakfast, lunch, dinner, and snacks), all classes and workshops, therapies as specified in the retreat description, welcome kit, and airport/station transfers from designated pickup points."
            },
            {
                q: "What's NOT included?",
                a: "Travel to/from the retreat location, personal expenses, additional spa treatments beyond what's included, travel insurance, and tips for staff (optional but appreciated)."
            }
        ]
    },
    {
        category: "Preparation",
        questions: [
            {
                q: "What should I bring?",
                a: "Comfortable clothing for yoga and movement (layers recommended), personal toiletries, any medications you need, a reusable water bottle, journal and pen, sunscreen and insect repellent, and an open mind. We'll send a detailed packing list upon booking confirmation."
            },
            {
                q: "Do I need prior yoga or meditation experience?",
                a: "No prior experience is necessary. Our instructors are skilled at working with all levels, from complete beginners to advanced practitioners. We offer modifications and variations to ensure everyone feels comfortable and challenged appropriately."
            },
            {
                q: "Are there any health requirements?",
                a: "You should be in generally good health and able to participate in light to moderate physical activity. Please inform us of any medical conditions, injuries, or dietary restrictions during the application process so we can accommodate your needs."
            }
        ]
    },
    {
        category: "During the Retreat",
        questions: [
            {
                q: "What is the daily schedule like?",
                a: "While each retreat has its unique flow, a typical day includes morning meditation and movement (6:30-8:30 AM), breakfast, a workshop or nature activity (10 AM-12 PM), lunch, free time or therapy sessions (2-5 PM), evening practice (5:30-7 PM), dinner, and optional evening activities like fire circles or sound healing."
            },
            {
                q: "What about dietary restrictions?",
                a: "We accommodate vegetarian, vegan, gluten-free, and most dietary restrictions. Our meals are primarily plant-based, locally sourced, and designed to support your cleansing and healing process. Please inform us of any allergies or restrictions during booking."
            },
            {
                q: "Is there WiFi?",
                a: "Most of our retreat locations have limited WiFi available in common areas, but we encourage a digital detox for the full experience. We recommend informing loved ones in advance and using the opportunity to truly disconnect."
            },
            {
                q: "Can I leave the retreat early?",
                a: "While we understand emergencies happen, we strongly encourage completing the full retreat for maximum benefit. The transformation often happens in the later days. If you must leave early, please discuss with our team, but note that refunds are not provided for early departure."
            }
        ]
    },
    {
        category: "Accommodations",
        questions: [
            {
                q: "What are the accommodation options?",
                a: "Accommodation varies by retreat location and is detailed on each retreat page. Options typically include private cottages, shared rooms, or eco-friendly cabins. All accommodations are clean, comfortable, and designed to enhance your connection with nature."
            },
            {
                q: "Can I bring a partner or friend?",
                a: "Yes! We welcome couples and friends. Please note that both participants must complete the application process. Shared accommodation may be available depending on the retreat—please inquire when booking."
            }
        ]
    }
];

export default function FAQ() {
    return (
        <Layout>
            <div className="pt-32 pb-20 container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">
                            Frequently Asked Questions
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground">
                            Everything you need to know
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                            Have a question not answered here? Reach out to us at{" "}
                            <a href="mailto:7point83club@gmail.com" className="text-primary hover:underline">
                                7point83club@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="space-y-12">
                        {faqs.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <h2 className="font-serif text-3xl text-foreground border-b border-border pb-4">
                                    {category.category}
                                </h2>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {category.questions.map((faq, qIdx) => (
                                        <AccordionItem
                                            key={qIdx}
                                            value={`${idx}-${qIdx}`}
                                            className="border border-border rounded-sm px-6 bg-card"
                                        >
                                            <AccordionTrigger className="text-left font-medium hover:text-primary py-6">
                                                {faq.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                                {faq.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 bg-muted/30 rounded-sm text-center">
                        <h3 className="font-serif text-2xl mb-4">Still have questions?</h3>
                        <p className="text-muted-foreground mb-6">
                            We're here to help. Get in touch with our team.
                        </p>
                        <a
                            href="mailto:7point83club@gmail.com"
                            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-none hover:bg-primary/90 transition-colors font-medium"
                        >
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
