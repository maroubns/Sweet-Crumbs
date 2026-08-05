"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  galleryItems,
  categoryLabels,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/data";

type FilterValue = "all" | GalleryCategory;

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "wedding", label: "Wedding" },
  { value: "birthday", label: "Birthday" },
  { value: "babyshower", label: "Baby Shower" },
  { value: "cupcakes", label: "Cupcakes & Desserts" },
];

export function GalleryGrid() {
  const [active, setActive] = useState<FilterValue>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const visible =
    active === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex flex-wrap justify-center gap-3"
      >
        {filters.map((filter) => {
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter.value)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-espresso text-cream shadow-sm"
                  : "bg-white text-espresso/80 hover:bg-blush/40"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(item)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl text-left shadow-md shadow-espresso-deep/5"
              aria-label={`View larger image of ${item.name}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-espresso-deep/80 via-espresso-deep/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-blush">
                  {categoryLabels[item.category]}
                </span>
                <span className="font-serif text-xl font-semibold text-cream">
                  {item.name}
                </span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl border-none bg-cream p-0 sm:rounded-3xl overflow-hidden">
          {selected && (
            <>
              <div className="relative aspect-[4/5] w-full sm:aspect-[4/3]">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  sizes="(min-width: 640px) 700px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <DialogTitle className="font-serif text-2xl text-espresso-deep">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="mt-1 text-sm text-muted-foreground">
                  {categoryLabels[selected.category]}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
