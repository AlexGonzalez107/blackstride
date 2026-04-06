import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
  color?: "white" | "black" | "gold";
  priority?: boolean;
}

const markFilterByColor: Record<NonNullable<LogoProps["color"]>, string> = {
  white: "",
  black: "brightness-0 saturate-100",
  gold: "sepia saturate-[3.2] hue-rotate-[350deg] brightness-[1.05]",
};

export function Logo({
  className = "w-12 h-12",
  variant = "mark",
  color = "white",
  priority = false,
}: LogoProps) {
  const titleColor =
    color === "black"
      ? "text-black"
      : color === "gold"
        ? "text-agency-accent"
        : "text-white";

  const subtitleColor =
    color === "black"
      ? "text-black/80"
      : color === "gold"
        ? "text-agency-accent/80"
        : "text-white/80";

  const markClasses = markFilterByColor[color];

  if (variant === "mark") {
    return (
      <Image
        src="/branding/blackstride-mark-white.png"
        alt="Blackstride Digital"
        width={270}
        height={203}
        priority={priority}
        className={`${className} ${markClasses}`.trim()}
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/branding/blackstride-mark-white.png"
        alt="Blackstride Digital horse mark"
        width={270}
        height={203}
        priority={priority}
        className={`h-full w-auto shrink-0 ${markClasses}`.trim()}
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-sans text-xl font-extrabold tracking-[0.18em] ${titleColor}`}
        >
          BLACKSTRIDE
        </span>
        <span
          className={`mt-1 pl-[0.18em] font-sans text-[9px] font-semibold tracking-[0.55em] ${subtitleColor}`}
        >
          DIGITAL
        </span>
      </div>
    </div>
  );
}
