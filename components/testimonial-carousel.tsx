"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";
import { MotionReveal } from "@/components/motion-reveal";

export function TestimonialCarousel() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 sm:py-28" aria-label="Customer testimonials">
      <div className="mx-auto max-w-4xl">
        <MotionReveal className="text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-espresso-deep sm:text-4xl">
            Loved by Our Customers
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few words from the celebrations we&apos;ve been part of.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-12">
          <Carousel
            opts={{ align: "center", loop: true }}
            plugins={[Autoplay({ delay: 5500, stopOnInteraction: true })]}
            className="mx-auto w-full max-w-2xl"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id}>
                  <figure className="mx-2 flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md shadow-espresso-deep/5 sm:p-10">
                    <div
                      className="flex gap-1 text-blush-deep"
                      role="img"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-balance font-serif text-xl leading-relaxed text-espresso-deep sm:text-2xl">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt={`Portrait of ${t.name}`}
                        width={48}
                        height={48}
                        className="size-12 rounded-full object-cover"
                      />
                      <span className="text-left">
                        <span className="block text-sm font-semibold text-espresso-deep">
                          {t.name}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {t.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-none bg-blush/50 text-espresso-deep hover:bg-blush" />
            <CarouselNext className="border-none bg-blush/50 text-espresso-deep hover:bg-blush" />
          </Carousel>
        </MotionReveal>
      </div>
    </section>
  );
}
