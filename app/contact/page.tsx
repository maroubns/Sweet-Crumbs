import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MapPlaceholder } from "@/components/map-placeholder";
import { MotionReveal } from "@/components/motion-reveal";
import { InstagramIcon, PinterestIcon, FacebookIcon } from "@/components/social-icons";
import { businessHours, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sweet Crumbs to start planning your custom cake. Find our studio hours, location, and social media.",
};

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon className="size-5" />,
  Pinterest: <PinterestIcon className="size-5" />,
  Facebook: <FacebookIcon className="size-5" />,
};

export default function ContactPage() {
  return (
    <section className="bg-cream px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance font-serif text-4xl font-semibold text-espresso-deep sm:text-5xl">
            Order a Cake
          </h1>
          <p className="mt-4 text-muted-foreground">
            Share a few details about your event and we&apos;ll be in touch
            to talk flavors, design, and timing.
          </p>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <ContactForm />
          </MotionReveal>

          <MotionReveal delay={0.1} className="flex flex-col gap-8">
            <div className="rounded-2xl bg-white p-8 shadow-md shadow-espresso-deep/5">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-sage-deep" aria-hidden="true" />
                <h2 className="font-serif text-xl font-semibold text-espresso-deep">
                  Studio Hours
                </h2>
              </div>
              <dl className="mt-4 space-y-2">
                {businessHours.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <dt className="font-medium text-espresso-deep">
                      {entry.day}
                    </dt>
                    <dd className="text-right text-muted-foreground">
                      {entry.hours}
                    </dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-6 font-serif text-xl font-semibold text-espresso-deep">
                Follow Along
              </h2>
              <ul className="mt-3 flex gap-3">
                {socialLinks.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Sweet Crumbs on ${social.platform}`}
                      className="flex size-10 items-center justify-center rounded-full bg-blush/30 text-espresso transition-colors hover:bg-blush hover:text-espresso-deep"
                    >
                      {socialIcons[social.platform]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <MapPlaceholder />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
