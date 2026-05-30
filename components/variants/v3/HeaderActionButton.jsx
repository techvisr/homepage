import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeaderActionButton({
  children,
  href = "/contact",
  light = false,
  compact = false,
  variant,
  size,
  icon = "right",
  className = "",
  onClick,
}) {
  const resolvedVariant = variant || (light ? "light" : "gradient");
  const resolvedSize = size || (compact ? "compact" : "default");
  const Icon = icon === "up-right" ? ArrowUpRight : ArrowRight;

  const variantClasses = {
    gradient: "bg-[linear-gradient(90deg,#f37135,#ef4169)] text-white",
    light: "bg-white text-black",
    outline: "border-[3px] border-[#161821] bg-white text-[#161821]",
  };

  const sizeClasses = {
    compact: "min-h-8 gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-[13px]",
    default: "min-h-12 gap-3 rounded-[10px] px-5 py-3.5 text-base font-semibold sm:min-h-[54px] sm:gap-4 sm:px-6 sm:text-[17px] lg:min-h-[56px] lg:text-lg",
    large:
      "min-h-14 gap-4 rounded-[16px] px-6 py-4 text-base font-bold md:min-h-16 md:gap-5 md:rounded-[18px] md:px-8 md:text-xl lg:min-h-[72px] lg:gap-6 lg:rounded-[20px] lg:px-10 lg:text-2xl 2xl:text-[28px]",
  };

  const iconSizes = {
    compact: 16,
    default: 20,
    large: 30,
  };

  const classes = [
    "inline-flex max-w-full items-center justify-center whitespace-normal text-center font-medium leading-tight no-underline transition-colors duration-200 sm:whitespace-nowrap",
    variantClasses[resolvedVariant],
    sizeClasses[resolvedSize],
    className,
  ].join(" ");

  return (
    <a className={classes} href={href} onClick={onClick}>
      <span>{children}</span>
      <Icon size={iconSizes[resolvedSize]} strokeWidth={resolvedVariant === "outline" ? 2.4 : 2} />
    </a>
  );
}
