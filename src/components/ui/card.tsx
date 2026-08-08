import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient" | "glass";
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Card({
  className,
  variant = "default",
  ...props
}: CardProps) {
  const variants = {
    default: "bg-zinc-900 border border-zinc-800/50 shadow-lg",
    gradient:
      "bg-gradient-to-br from-zinc-900 to-zinc-800/50 border border-zinc-700/30 shadow-xl",
    glass: "bg-zinc-900/50 backdrop-blur-xl border border-white/10 shadow-xl",
  };

  return (
    <div className={cn("rounded-2xl transition-all duration-300", variants[variant], className)} {...props} />
  );
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  );
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight text-zinc-50",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-zinc-400", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}
