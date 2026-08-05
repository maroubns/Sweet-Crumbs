import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of custom wedding cakes, birthday cakes, baby shower cakes, cupcakes, and dessert tables.",
};

export default function GalleryPage() {
  return (
    <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance font-serif text-4xl font-semibold text-espresso-deep sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-muted-foreground">
            Every cake is designed from scratch — here&apos;s a look at some
            of our favorite celebrations. Filter by occasion or click any
            image for a closer look.
          </p>
        </MotionReveal>

        <div className="mt-12">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
