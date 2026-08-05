"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCreations, categoryLabels } from "@/lib/data";
import { MotionReveal } from "@/components/motion-reveal";

export function FeaturedCreations() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mx-auto max-w-xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-espresso-deep sm:text-4xl">
            Featured Creations
          </h2>
          <p className="mt-3 text-muted-foreground">
            A small selection of recent favorites — each one designed and
            baked to order.
          </p>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCreations.map((cake, i) => (
            <MotionReveal key={cake.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-espresso-deep/5"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={cake.src}
                    alt={cake.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage-ink">
                    {categoryLabels[cake.category]}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-espresso-deep">
                    {cake.name}
                  </h3>
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="text-sm font-semibold text-espresso underline decoration-blush decoration-2 underline-offset-4 hover:text-espresso-deep"
          >
            See the full gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
