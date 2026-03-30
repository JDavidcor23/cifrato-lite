import * as React from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-[#00e676] text-slate-900 hover:bg-[#00c853] shadow-lg border-b-4 border-[#00c853]",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 border-b-4 border-slate-300",
  outline: "border-2 border-[#00e676] text-[#00c853] hover:bg-[#00e676]/10",
  danger: "bg-rose-500 text-white hover:bg-rose-600 shadow-md border-b-4 border-rose-700",
  ghost: "hover:bg-slate-100 text-slate-600",
};

const SIZES = {
  default: "h-16 px-6 text-xl",
  giant: "h-20 px-8 text-2xl",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
