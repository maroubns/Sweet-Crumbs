import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Heart, Sparkles } from "lucide-react";
import { Timeline } from "@/components/timeline";
import { MotionReveal } from "@/components/motion-reveal";
import { ScallopDivider } from "@/components/scallop-divider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the designer behind Sweet Crumbs, our baking philosophy, and the milestones along the way — from a home kitchen to a full studio.",
};

const values = [
  {
    icon: Leaf,
    title: "Seasonal & Considered",
    description:
      "We build our flavor menu around what's fresh, sourcing local fruit and dairy whenever the season allows.",
  },
  {
    icon: Heart,
    title: "Made By Hand",
    description:
      "No shortcuts, no mixes — every cake is baked, filled, and decorated from scratch in our studio kitchen.",
  },
  {
    icon: Sparkles,
    title: "Designed Around You",
    description:
      "Every design starts as a conversation. We build the cake to fit your event, not the other way around.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <MotionReveal>
            <p className="font-script text-lg text-sage-ink">Our Story</p>
            <h1 className="mt-2 text-balance font-serif text-4xl font-semibold text-espresso-deep sm:text-5xl">
              From a Home Kitchen to a Full Studio
            </h1>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                Sweet Crumbs started in 2014 with a home kitchen, a stand
                mixer, and orders from friends who kept asking for &ldquo;just
                one more&rdquo; cake. What began as a hobby between shifts at
                a full-time job slowly became something we couldn&apos;t stop
                thinking about.
              </p>
              <p>
                By 2016, we&apos;d left that job to bake full-time. Since
                then we&apos;ve completed a pastry arts certification, moved
                into a dedicated studio kitchen, and had the privilege of
                being part of hundreds of weddings, birthdays, and baby
                showers across the region.
              </p>
              <p>
                Every cake that leaves our studio is still built the same way
                the first ones were: by hand, with real ingredients, and with
                a genuine interest in what makes your celebration feel like
                yours.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.15} fromX={24}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg shadow-espresso-deep/10">
              <Image
                src="/images/about-founder-portrait.svg"
                alt="Illustrated portrait of the Sweet Crumbs founder in her studio kitchen"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      <ScallopDivider color="blush" />

      <section className="bg-blush/25 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <MotionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold text-espresso-deep sm:text-4xl">
              Our Baking Philosophy
            </h2>
          </MotionReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <MotionReveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-8 text-center shadow-md shadow-espresso-deep/5">
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-sage/25 text-sage-ink">
                    <value.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-espresso-deep">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <MotionReveal className="text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold text-espresso-deep sm:text-4xl">
              Milestones Along the Way
            </h2>
          </MotionReveal>
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>
    </>
  );
}
