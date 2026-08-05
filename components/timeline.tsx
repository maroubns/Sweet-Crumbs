import { timeline } from "@/lib/data";
import { MotionReveal } from "@/components/motion-reveal";

export function Timeline() {
  return (
    <ol className="relative border-l border-border pl-8 sm:pl-10">
      {timeline.map((milestone, i) => (
        <MotionReveal key={milestone.year} delay={i * 0.06}>
          <li className="mb-10 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[9px] mt-1.5 flex size-4 items-center justify-center rounded-full bg-sage-deep ring-4 ring-cream"
            />
            <p className="text-sm font-semibold uppercase tracking-wide text-sage-ink">
              {milestone.year}
            </p>
            <h3 className="mt-1 font-serif text-xl font-semibold text-espresso-deep">
              {milestone.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {milestone.description}
            </p>
          </li>
        </MotionReveal>
      ))}
    </ol>
  );
}
