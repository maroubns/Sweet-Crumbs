import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScallopDivider } from "@/components/scallop-divider";
import { MotionReveal } from "@/components/motion-reveal";

export function SecondaryCta() {
  return (
    <>
      <ScallopDivider color="espresso" />
      <section className="bg-espresso-deep px-5 py-20 text-center sm:px-8 sm:py-24">
        <MotionReveal className="mx-auto max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Let&apos;s design something worth remembering
          </h2>
          <p className="mt-4 text-cream/75">
            Tell us your date, your guest count, and your dream — we&apos;ll
            take care of the rest.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blush px-8 py-6 text-base font-medium text-espresso-deep hover:bg-blush-deep"
            >
              <Link href="/contact">Order a Cake</Link>
            </Button>
          </div>
        </MotionReveal>
      </section>
    </>
  );
}
