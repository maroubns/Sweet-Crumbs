"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative min-h-[88vh] sm:min-h-[92vh]">
        <Image
          src="/images/hero-signature-cake.svg"
          alt="A three-tier blush and gold signature wedding cake with hand-piped sugar florals, displayed on a cream pedestal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-espresso-deep/70 via-espresso-deep/10 to-transparent"
        />

        <div className="relative z-10 flex h-full min-h-[88vh] flex-col items-start justify-end px-5 pb-16 sm:min-h-[92vh] sm:px-8 sm:pb-24">
          <div className="mx-auto w-full max-w-6xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3 font-script text-lg text-blush sm:text-xl"
            >
              Boutique cake design, since 2016
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl text-balance font-serif text-4xl font-semibold leading-[1.08] text-cream sm:text-5xl md:text-6xl"
            >
              Cakes made to be the centerpiece of your day
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-md text-balance text-base text-cream/90 sm:text-lg"
            >
              Hand-built, seasonally inspired cakes for weddings, birthdays,
              and everything worth celebrating — designed around you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-blush px-7 py-6 text-base font-medium text-espresso-deep shadow-lg shadow-espresso-deep/20 transition-transform hover:-translate-y-0.5 hover:bg-blush-deep"
              >
                <Link href="/contact">Order a Cake</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-cream/60 bg-transparent px-7 py-6 text-base font-medium text-cream hover:bg-cream/10 hover:text-cream"
              >
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
