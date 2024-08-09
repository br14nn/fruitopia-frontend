import { cn } from "@/utils/utils";
import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
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

export default IconButton;
