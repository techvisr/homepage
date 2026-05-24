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
    compact: "h-10 gap-2 rounded-[10px] px-4 text-[16px]",
    default: "min-h-[56px] gap-4 rounded-[10px] px-6 py-4 text-[18px] font-semibold",
    large:
      "h-14 gap-4 rounded-[16px] px-6 text-[16px] font-bold md:h-16 md:gap-5 md:rounded-[18px] md:px-8 md:text-[22px] lg:h-[72px] lg:gap-6 lg:rounded-[20px] lg:px-10 lg:text-[28px]",
  };

  const iconSizes = {
    compact: 16,
    default: 20,
    large: 30,
  };

  const classes = [
    "inline-flex items-center justify-center whitespace-nowrap font-medium leading-none no-underline transition-colors duration-200",
    variantClasses[resolvedVariant],
    sizeClasses[resolvedSize],
    className,
  ].join(" ");

  return (
    <a className={classes} href={href}>
      <span>{children}</span>
      <Icon size={iconSizes[resolvedSize]} strokeWidth={resolvedVariant === "outline" ? 2.4 : 2} />
    </a>
  );
}
