import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const textVariants = cva("w-fit leading-none text-secondary-default", {
  variants: {
    variant: {
      default: "",
      underlined:
        "underline decoration-accent-default decoration-2 underline-offset-8 xl:decoration-4",
    },
    size: {
      default: "text-base",
      medium: "text-md md:text-lg xl:text-xl",
      large: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  },
);

export default Text;