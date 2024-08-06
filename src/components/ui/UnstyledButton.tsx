import { cn } from "@/utils/utils";
import React from "react";

interface UnstyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const UnstyledButton = React.forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn("flex items-center justify-center", className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default UnstyledButton;
