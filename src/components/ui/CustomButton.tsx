import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const customButtonVariants = cva(
  "flex w-fit items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary-default text-secondary-default transition-colors duration-200 hover:bg-primary-800",
        secondary:
          "bg-secondary-default text-primary-default transition-colors duration-200 hover:bg-secondary-200",
      },
      size: {
        default: "h-fit w-full py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  children?: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(customButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default CustomButton;
