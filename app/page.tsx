import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { FeaturedCreations } from "@/components/featured-creations";
import { InstagramStrip } from "@/components/instagram-strip";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { SecondaryCta } from "@/components/secondary-cta";

export const metadata: Metadata = {
  title: "Sweet Crumbs | Boutique Cake Design Studio",
  description:
    "Custom wedding cakes, birthday cakes, and dessert tables handcrafted in small batches. Browse our portfolio and order your cake today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedCreations />
      <InstagramStrip />
      <TestimonialCarousel />
      <SecondaryCta />
    </>
  );
}
