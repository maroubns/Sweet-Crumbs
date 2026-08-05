"use client";

import { useId, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { tierGuide } from "@/lib/data";

export function CakeCalculator() {
  const inputId = useId();
  const [guests, setGuests] = useState<string>("50");

  const result = useMemo(() => {
    const n = Number(guests);
    if (!guests || Number.isNaN(n) || n <= 0) return null;
    const match = tierGuide.find((tier) => n <= tier.maxGuests);
    return match ?? tierGuide[tierGuide.length - 1];
  }, [guests]);

  return (
    <div className="rounded-2xl bg-white p-8 shadow-md shadow-espresso-deep/5 sm:p-10">
      <h3 className="font-serif text-2xl font-semibold text-espresso-deep">
        Cake Size Calculator
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Not sure what size to order? Enter your guest count for a suggested
        tier size and starting price.
      </p>

      <div className="mt-6 max-w-xs">
        <Label htmlFor={inputId} className="text-espresso-deep">
          Number of guests
        </Label>
        <Input
          id={inputId}
          type="number"
          inputMode="numeric"
          min={1}
          max={500}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="mt-2 rounded-xl border-border bg-cream focus-visible:ring-sage-deep"
          aria-describedby={`${inputId}-result`}
        />
      </div>

      <div
        id={`${inputId}-result`}
        role="status"
        className="mt-6 flex flex-col gap-4 rounded-xl bg-cream-deep/60 p-5 sm:flex-row sm:items-center sm:justify-between"
      >
        {result ? (
          <>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-sage-ink">
                Suggested size
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-espresso-deep">
                {result.tier}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-sage-ink">
                Estimated starting price
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-espresso-deep">
                ${result.startingPrice}
              </p>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Enter a guest count to see a suggested size.
          </p>
        )}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Estimates only — final pricing depends on flavor, design detail, and
        delivery distance. We&apos;ll confirm an exact quote during your
        consultation.
      </p>
    </div>
  );
}
