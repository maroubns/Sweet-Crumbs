import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/lib/data";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl p-8 shadow-md shadow-espresso-deep/5",
        plan.popular
          ? "bg-espresso-deep text-cream ring-2 ring-blush"
          : "bg-white text-espresso-deep"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blush px-4 py-1 text-xs font-semibold uppercase tracking-wide text-espresso-deep shadow-sm">
          Most Popular
        </span>
      )}

      <h3 className="font-serif text-xl font-semibold">{plan.name}</h3>
      <p
        className={cn(
          "mt-2 text-sm",
          plan.popular ? "text-cream/70" : "text-muted-foreground"
        )}
      >
        {plan.description}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-serif text-4xl font-semibold">{plan.price}</span>
        <span className={cn("text-sm", plan.popular ? "text-cream/60" : "text-muted-foreground")}>
          {plan.unit}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                plan.popular ? "text-blush" : "text-sage-ink"
              )}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={cn(
          "mt-8 w-full rounded-full",
          plan.popular
            ? "bg-blush text-espresso-deep hover:bg-blush-deep"
            : "bg-espresso text-cream hover:bg-espresso-deep"
        )}
      >
        <Link href="/contact">Get Started</Link>
      </Button>
    </div>
  );
}
