import { forwardRef } from "react";
import { cn } from "@/utils/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <label
        className={cn("h-fit w-fit leading-none", className)}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  },
);

export default Label;
