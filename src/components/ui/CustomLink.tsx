import React from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/utils";

interface CustomLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ children, className, href = "#", ...props }, ref) => {
    return (
      <Link
        className={cn("text-primary-default", className)}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

export default CustomLink;
