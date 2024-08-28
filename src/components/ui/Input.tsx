import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const inputVariants = cva(
  "h-fit w-full bg-transparent px-2 py-1 text-primary-default outline-none",
  {
    variants: {
      variant: {
        default:
          "rounded-md ring-2 ring-primary-default transition-all duration-200 focus:ring-accent-default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant, className, type = "text", autoComplete = "off", ...props },
    ref,
  ) => {
    return (
      <input
        className={cn(inputVariants({ variant, className }))}
        type={type}
        ref={ref}
        {...props}
        autoComplete={autoComplete}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
