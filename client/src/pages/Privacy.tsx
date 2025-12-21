import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Privacy() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground mb-12">
                        Last updated: December 21, 2025
                    </p>

                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="font-serif text-3xl mb-4">Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At 7point83 Club ("we," "our," or "us"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our retreats.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Information We Collect</h2>
                            <h3 className="font-serif text-xl mb-3 text-foreground">Personal Information</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                When you apply for or book a retreat, we may collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Name, email address, phone number, and mailing address</li>
                                <li>Emergency contact information</li>
                                <li>Health information and dietary restrictions (to ensure your safety and comfort)</li>
                                <li>Payment information (processed securely through third-party payment processors)</li>
                            </ul>

                            <h3 className="font-serif text-xl mb-3 mt-6 text-foreground">Automatically Collected Information</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                When you visit our website, we may automatically collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>IP address and browser type</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Device information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Process your retreat bookings and payments</li>
                                <li>Communicate with you about your retreat and send confirmations</li>
                                <li>Accommodate your dietary and health needs during retreats</li>
                                <li>Improve our website and services</li>
                                <li>Send you updates about upcoming retreats (with your consent)</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Information Sharing and Disclosure</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, email delivery, and website hosting</li>
                                <li><strong>Retreat Partners:</strong> Accommodation providers and instructors who need your information to deliver services</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your information (subject to legal obligations)</li>
                                <li>Opt-out of marketing communications at any time</li>
                                <li>Object to processing of your personal information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Cookies and Tracking</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Children's Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Changes to This Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-3xl mb-4">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                            </p>
                            <div className="bg-muted/30 p-6 rounded-sm">
                                <p className="text-foreground mb-2"><strong>Email:</strong> 7point83club@gmail.com</p>
                                <p className="text-foreground mb-2"><strong>Phone:</strong> +91 80 1234 5678</p>
                                <p className="text-foreground"><strong>Address:</strong> Bengaluru, Karnataka, India</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
