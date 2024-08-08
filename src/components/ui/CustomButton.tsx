import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const customButtonVariants = cva(
  "flex h-[32px] w-[120px] items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary-default text-secondary-default transition-colors duration-150 hover:bg-secondary-default hover:text-primary-default",
        outline:
          "border-2 border-primary-default bg-transparent text-primary-default transition-colors duration-150 hover:bg-primary-default hover:text-secondary-default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  children?: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant, children, className, ...props }, ref) => {
    return (
      <button
        className={cn(customButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default CustomButton;
