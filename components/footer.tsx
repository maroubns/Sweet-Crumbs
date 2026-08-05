"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { InstagramIcon, PinterestIcon, FacebookIcon } from "@/components/social-icons";

const quickLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon className="size-5" />,
  Facebook: <FacebookIcon className="size-5" />,
  Pinterest: <PinterestIcon className="size-5" />,
};

export function Footer() {
  const emailId = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="bg-espresso-deep text-cream/90">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-semibold text-cream">
              Sweet Crumbs
            </p>
            <p className="mt-2 max-w-xs text-sm text-cream/70">
              Handcrafted cakes for the moments worth celebrating.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cream/60">
              Quick Links
            </h2>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-blush"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cream/60">
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
                    className="flex size-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-blush hover:text-espresso-deep"
                  >
                    {socialIcons[social.platform]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cream/60">
              Newsletter
            </h2>
            <p className="mt-3 text-sm text-cream/70">
              Seasonal flavors and first access to holiday booking dates.
            </p>
            {submitted ? (
              <p role="status" className="mt-3 text-sm text-blush">
                You&apos;re on the list — thank you!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
                <label htmlFor={emailId} className="sr-only">
                  Email address
                </label>
                <Input
                  id={emailId}
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="rounded-full border-cream/20 bg-cream/10 text-cream placeholder:text-cream/50 focus-visible:ring-blush"
                />
                <Button
                  type="submit"
                  className="shrink-0 rounded-full bg-blush text-espresso-deep hover:bg-blush-deep"
                >
                  Join
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sweet Crumbs. All rights reserved.</p>
          <p>Made by hand, one tier at a time.</p>
        </div>
      </div>
    </footer>
  );
}
