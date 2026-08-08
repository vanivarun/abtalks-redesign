import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-shadow",
  secondary:
    "bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 transition-colors",
  outline:
    "border border-zinc-700 text-zinc-200 hover:bg-zinc-800 transition-colors",
  ghost:
    "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors",
};

const buttonSizes = {
  sm: "h-9 px-3 rounded-lg text-sm",
  md: "h-11 px-5 rounded-xl text-base",
  lg: "h-14 px-7 rounded-2xl text-lg font-semibold",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
      buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
