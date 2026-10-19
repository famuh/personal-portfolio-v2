import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

// On-brand variants built only from design tokens (see app/globals.css).
const buttonVariants = cva(
  "group/btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-chip font-medium transition-[background-color,color,border-color,transform,box-shadow] duration-(--dur-base) ease-out-expo active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-ink text-canvas hover:bg-accent hover:text-on-accent",
        accent: "bg-accent text-on-accent hover:bg-ink hover:text-canvas",
        outline: "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-canvas",
        ghost: "text-ink hover:bg-surface-2",
        link: "rounded-none px-0 text-ink underline decoration-line-strong underline-offset-[6px] hover:decoration-accent-ink",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-7 text-base",
        icon: "size-10",
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
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
