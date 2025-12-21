import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Terms() {
    return (
        <Layout>
            <div className="pt-32 pb-20 container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto prose prose-lg"
                >
                    <h1 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground mb-12">
                        Last updated: December 21, 2025
                    </p>

                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="font-serif text-3xl mb-4">Agreement to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using the 7point83 Club website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Retreat Bookings</h2>
                            <h3 className="font-serif text-xl mb-3 text-foreground">Application Process</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                All retreat bookings are subject to approval. Submitting an application does not guarantee acceptance. We reserve the right to decline any application at our discretion.
                            </p>

                            <h3 className="font-serif text-xl mb-3 text-foreground">Payment Terms</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>A non-refundable deposit of 50% is required to secure your booking</li>
                                <li>Full payment must be received 30 days before the retreat start date</li>
                                <li>Failure to pay the balance may result in cancellation of your booking</li>
                                <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
                            </ul>

                            <h3 className="font-serif text-xl mb-3 mt-6 text-foreground">Cancellation Policy</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>30+ days before:</strong> Full refund minus deposit</li>
                                <li><strong>15-29 days before:</strong> 50% refund</li>
                                <li><strong>Less than 14 days:</strong> No refund</li>
                                <li>We strongly recommend purchasing travel insurance</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Participant Responsibilities</h2>
                            <h3 className="font-serif text-xl mb-3 text-foreground">Health and Safety</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You are responsible for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Disclosing any medical conditions, injuries, or limitations that may affect your participation</li>
                                <li>Consulting with your physician before participating if you have any health concerns</li>
                                <li>Following all safety instructions provided by our staff</li>
                                <li>Informing staff immediately if you experience any discomfort or injury</li>
                            </ul>

                            <h3 className="font-serif text-xl mb-3 mt-6 text-foreground">Code of Conduct</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Participants are expected to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Treat all participants, staff, and property with respect</li>
                                <li>Refrain from alcohol, drugs, and smoking during the retreat</li>
                                <li>Maintain confidentiality regarding other participants' personal information</li>
                                <li>Participate fully and arrive on time for scheduled activities</li>
                                <li>Follow the digital detox guidelines when applicable</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Liability and Assumption of Risk</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Participation in retreat activities involves inherent risks. By participating, you acknowledge and accept these risks. You agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Assume all risks associated with participation</li>
                                <li>Release 7point83 Club, its staff, and partners from liability for any injury, loss, or damage</li>
                                <li>Take responsibility for your personal belongings</li>
                                <li>Follow all safety guidelines and instructions</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                We maintain liability insurance, but participants are encouraged to have their own travel and health insurance.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Changes to Retreats</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We reserve the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Modify retreat schedules, activities, or instructors due to unforeseen circumstances</li>
                                <li>Cancel a retreat if minimum enrollment is not met (full refund provided)</li>
                                <li>Substitute accommodation or venues of equal or better quality if necessary</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                In case of cancellation by us, you will receive a full refund or the option to transfer to another retreat.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Photography and Media</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By participating in our retreats, you consent to being photographed or filmed for promotional purposes. If you do not wish to be included in promotional materials, please inform us in writing before the retreat begins.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All content on our website, including text, graphics, logos, and images, is the property of 7point83 Club and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Termination of Participation</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We reserve the right to terminate your participation in a retreat without refund if you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Violate these Terms of Service or our Code of Conduct</li>
                                <li>Engage in behavior that endangers yourself or others</li>
                                <li>Disrupt the retreat experience for other participants</li>
                                <li>Provide false information during the application process</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms of Service are governed by the laws of India. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Changes to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify you of significant changes via email or website notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                For questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-muted/30 p-6 rounded-sm">
                                <p className="text-foreground mb-2"><strong>Email:</strong> 7point83club@gmail.com</p>
                                <p className="text-foreground mb-2"><strong>Phone:</strong> +91 80 1234 5678</p>
                                <p className="text-foreground"><strong>Address:</strong> Bengaluru, Karnataka, India</p>
                            </div>
                        </section>

                        <section className="mt-12 p-6 bg-muted/30 rounded-sm">
                            <p className="text-sm text-muted-foreground">
                                By booking a retreat with 7point83 Club, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
