import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-black uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#00FF7F] text-[#001a0d] shadow-[0_4px_0_rgb(0,204,102),0_10px_20px_rgba(0,255,127,0.2)] hover:shadow-[0_6px_0_rgb(0,204,102),0_15px_30px_rgba(0,255,127,0.4)] active:shadow-[0_2px_0_rgb(0,204,102)] active:translate-y-[2px]",
        destructive:
          "bg-destructive text-white shadow-[0_4px_0_rgb(153,27,27)] hover:bg-destructive/90 hover:shadow-[0_6px_0_rgb(153,27,27)] active:shadow-[0_2px_0_rgb(153,27,27)] active:translate-y-[2px]",
        outline:
          "border-2 border-[#00FF7F]/30 bg-background/50 backdrop-blur-sm text-[#00FF7F] shadow-[0_4px_0_rgba(0,255,127,0.1)] hover:bg-[#00FF7F]/10 hover:border-[#00FF7F]/60 hover:shadow-[0_6px_0_rgba(0,255,127,0.2)] active:shadow-[0_2px_0_rgba(0,255,127,0.1)] active:translate-y-[2px]",
        secondary:
          "bg-white/[0.03] text-white border border-white/10 shadow-[0_4px_0_rgba(255,255,255,0.05)] hover:bg-white/[0.08] hover:shadow-[0_6px_0_rgba(255,255,255,0.08)] active:shadow-[0_2px_0_rgba(255,255,255,0.05)] active:translate-y-[2px]",
        ghost:
          "text-slate-400 hover:bg-white/5 hover:text-white hover:glow-text",
        link: "text-[#00FF7F] underline-offset-4 hover:underline glow-text",
      },
      size: {
        default: "h-12 px-8 rounded-2xl",
        sm: "h-9 rounded-xl gap-1.5 px-4",
        lg: "h-14 rounded-3xl px-10 text-base",
        icon: "size-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
