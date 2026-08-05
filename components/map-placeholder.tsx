import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Map showing the Sweet Crumbs studio location"
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-sage/15 shadow-md shadow-espresso-deep/5 sm:aspect-video"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, var(--sage) 25%, var(--sage) 26%, transparent 27%, transparent 74%, var(--sage) 75%, var(--sage) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, var(--sage) 25%, var(--sage) 26%, transparent 27%, transparent 74%, var(--sage) 75%, var(--sage) 76%, transparent 77%, transparent)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-espresso text-cream shadow-lg">
          <MapPin className="size-7" aria-hidden="true" />
        </span>
        <p className="mt-2 font-serif text-lg font-semibold text-espresso-deep">
          123 Blossom Lane, Studio 4
        </p>
        <p className="text-sm text-muted-foreground">
          Riverside District — map embed goes here
        </p>
      </div>
    </div>
  );
}
