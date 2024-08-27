import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "flex h-fit w-full items-center justify-center py-0.5",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-primary-default text-secondary-default transition-colors duration-200 hover:bg-primary-900",
        secondary:
          "rounded-md bg-secondary-default text-primary-default transition-colors duration-200 hover:bg-secondary-200",
        secondary_400:
          "rounded-md bg-secondary-400 text-primary-default transition-colors duration-200 hover:bg-secondary-600",
        accent:
          "rounded-md bg-accent-default text-primary-default transition-colors duration-200 hover:bg-accent-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
