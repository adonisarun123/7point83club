import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { retreats } from "@/data/retreats";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Clock,
  MapPin,
  Sparkles,
  X,
  Shield,
  TrendingUp
} from "lucide-react";
import { Link, useRoute } from "wouter";
import BookingForm from "@/components/BookingForm";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RetreatDetail() {
  const [match, params] = useRoute("/retreats/:id");
  const retreat = retreats.find((r) => r.id === params?.id);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  if (!retreat) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Retreat Not Found</h1>
            <Link href="/retreats">
              <Button>Back to Retreats</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={retreat.image}
          alt={retreat.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/retreats">
                <a className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Retreats
                </a>
              </Link>
              <span className="block text-primary font-medium tracking-widest uppercase text-sm mb-2">
                {retreat.subtitle}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">
                {retreat.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-6">
                {retreat.heroTagline}
              </p>
              <div className="flex flex-wrap gap-6 text-white/90 text-sm md:text-base font-medium tracking-wide">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> {retreat.duration}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> {retreat.location}
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> {retreat.price}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trustbar Section */}
      <div className="bg-muted/30 border-y border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {retreat.trustbar.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-20">
          {/* Story Section */}
          <section>
            <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">
              {retreat.story.eyebrow}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
              {retreat.story.heading}
            </h2>
            <div className="space-y-6">
              {retreat.story.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="bg-muted/20 p-8 md:p-12 border border-border">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="font-serif text-3xl md:text-4xl">
                {retreat.outcomes.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {retreat.outcomes.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span className="text-foreground/90">{bullet}</span>
                </div>
              ))}
            </div>
            {retreat.outcomes.note && (
              <p className="text-sm text-muted-foreground mt-6 italic border-l-2 border-primary pl-4">
                {retreat.outcomes.note}
              </p>
            )}
          </section>

          {/* Who This Is For / Not For */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Who Should Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For */}
              <div className="border border-primary/30 p-6 bg-primary/5">
                <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  This Is For You If:
                </h3>
                <ul className="space-y-3">
                  {retreat.whoFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For */}
              <div className="border border-border p-6 bg-muted/10">
                <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" />
                  This Is Not For You If:
                </h3>
                <ul className="space-y-3">
                  {retreat.whoNotFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Application Flow */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              {retreat.applicationFlow.heading}
            </h2>
            <div className="space-y-0 border-l-2 border-primary ml-4">
              {retreat.applicationFlow.steps.map((step, i) => (
                <div key={i} className="relative pl-8 pb-12 last:pb-0">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <h3 className="font-medium text-xl mb-3">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              {retreat.faq.heading}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {retreat.faq.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border bg-card px-6 py-2"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Final CTA Section */}
          <section className="bg-foreground text-background p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {retreat.finalCta.heading}
            </h2>
            <div className="space-y-4 mb-8">
              {retreat.finalCta.body.map((paragraph, i) => (
                <p key={i} className="text-lg opacity-90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {retreat.finalCta.ctas.map((cta, i) => (
                <Link key={i} href={cta.href}>
                  <Button
                    size="lg"
                    variant={i === 0 ? "default" : "outline"}
                    className={i === 0
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "border-background/30 text-background hover:bg-background/10"
                    }
                  >
                    {cta.label}
                  </Button>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 p-8 border border-border bg-card space-y-8 shadow-sm">
            {/* Pricing */}
            <div>
              <h3 className="font-medium text-lg mb-4">{retreat.pricing.heading}</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                {retreat.pricing.body.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>

            {/* Waitlist Info */}
            {retreat.pricing.waitlist.length > 0 && (
              <div className="pt-6 border-t border-border">
                <h4 className="font-medium text-sm mb-3">Waitlist Information</h4>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {retreat.pricing.waitlist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What's Included */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-medium mb-4">What's Included</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {retreat.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="space-y-4 pt-4 border-t border-border">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg"
                onClick={() => setIsBookingFormOpen(true)}
              >
                Apply for {retreat.title}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                All retreats are apply-only. <br />
                Acceptance based on readiness and fit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
        preselectedRetreatId={retreat?.id}
      />
    </Layout>
  );
}
