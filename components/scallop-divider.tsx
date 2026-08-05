interface ScallopDividerProps {
  color?: "cream" | "blush" | "sage" | "espresso";
  flip?: boolean;
  className?: string;
}

const colorMap: Record<Required<ScallopDividerProps>["color"], string> = {
  cream: "var(--cream)",
  blush: "var(--blush)",
  sage: "var(--sage)",
  espresso: "var(--espresso)",
};

export function ScallopDivider({
  color = "cream",
  flip = false,
  className,
}: ScallopDividerProps) {
  const fill = colorMap[color];
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-[0] ${className ?? ""}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="h-8 w-full sm:h-10"
      >
        <path
          d="M0,0 
             C 25,30 75,30 100,0
             C 125,30 175,30 200,0
             C 225,30 275,30 300,0
             C 325,30 375,30 400,0
             C 425,30 475,30 500,0
             C 525,30 575,30 600,0
             C 625,30 675,30 700,0
             C 725,30 775,30 800,0
             C 825,30 875,30 900,0
             C 925,30 975,30 1000,0
             C 1025,30 1075,30 1100,0
             C 1125,30 1175,30 1200,0
             L1200,40 L0,40 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
