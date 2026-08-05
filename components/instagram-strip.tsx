import Image from "next/image";
import { instagramFeed } from "@/lib/data";
import { MotionReveal } from "@/components/motion-reveal";
import { InstagramIcon } from "@/components/social-icons";

export function InstagramStrip() {
  return (
    <section className="bg-cream-deep/50 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-white text-espresso shadow-sm">
            <InstagramIcon className="size-5" />
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-espresso-deep sm:text-4xl">
            @sweetcrumbs.studio
          </h2>
          <p className="mt-3 text-muted-foreground">
            Behind-the-scenes moments, fresh out of the studio.
          </p>
        </MotionReveal>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6 lg:grid-cols-9">
          {instagramFeed.map((post, i) => (
            <MotionReveal key={post.id} delay={i * 0.03}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
                aria-label="View this post on Instagram"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 11vw, (min-width: 768px) 16vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-espresso-deep/0 transition-colors duration-300 group-hover:bg-espresso-deep/20"
                />
              </a>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
