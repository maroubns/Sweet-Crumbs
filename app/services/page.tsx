import type { Metadata } from "next";
import { ServiceCards } from "@/components/service-cards";
import { PricingCard } from "@/components/pricing-card";
import { CakeCalculator } from "@/components/cake-calculator";
import { FaqAccordion } from "@/components/faq-accordion";
import { MotionReveal } from "@/components/motion-reveal";
import { ScallopDivider } from "@/components/scallop-divider";
import { pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Custom cake design, wedding packages, and dessert tables. See starting prices, use our cake size calculator, and find answers to common questions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <MotionReveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance font-serif text-4xl font-semibold text-espresso-deep sm:text-5xl">
              Services
            </h1>
            <p className="mt-4 text-muted-foreground">
              From an intimate two-tier cake to a full dessert table, every
              order starts with a conversation about your event.
            </p>
          </MotionReveal>

          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      <ScallopDivider color="blush" />

      <section className="bg-blush/25 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <MotionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold text-espresso-deep sm:text-4xl">
              Pricing Packages
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every package includes a design consultation. Final pricing is
              always confirmed before your deposit.
            </p>
          </MotionReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <MotionReveal key={plan.name} delay={i * 0.08}>
                <PricingCard plan={plan} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <MotionReveal>
            <CakeCalculator />
          </MotionReveal>
        </div>
      </section>

      <ScallopDivider color="sage" />

      <section className="bg-sage/15 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <MotionReveal className="text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold text-espresso-deep sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1} className="mt-10 rounded-2xl bg-white p-6 shadow-md shadow-espresso-deep/5 sm:p-10">
            <FaqAccordion />
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
