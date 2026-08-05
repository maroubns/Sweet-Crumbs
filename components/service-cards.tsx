import { CakeSlice, Gem, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, type ServiceItem } from "@/lib/data";
import { MotionReveal } from "@/components/motion-reveal";

const icons: Record<ServiceItem["icon"], React.ReactNode> = {
  cake: <CakeSlice className="size-6" aria-hidden="true" />,
  rings: <Gem className="size-6" aria-hidden="true" />,
  table: <UtensilsCrossed className="size-6" aria-hidden="true" />,
};

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {services.map((service, i) => (
        <MotionReveal key={service.title} delay={i * 0.08}>
          <Card className="h-full rounded-2xl border-none bg-white shadow-md shadow-espresso-deep/5 transition-transform hover:-translate-y-1">
            <CardHeader>
              <span className="flex size-12 items-center justify-center rounded-full bg-blush/40 text-espresso">
                {icons[service.icon]}
              </span>
              <CardTitle className="mt-4 font-serif text-xl text-espresso-deep">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-sage-ink">
                Starting at {service.startingAt}
              </p>
            </CardContent>
          </Card>
        </MotionReveal>
      ))}
    </div>
  );
}
