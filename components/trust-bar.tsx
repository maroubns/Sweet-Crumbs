import Image from "next/image";
import { trustLogos } from "@/lib/data";
import { MotionReveal } from "@/components/motion-reveal";

export function TrustBar() {
  return (
    <section
      aria-label="As seen in"
      className="border-y border-border bg-cream-deep/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <MotionReveal>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            As seen in
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            {trustLogos.map((logo) => (
              <li key={logo.name} className="opacity-70 transition-opacity hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={140}
                  height={58}
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </section>
  );
}
