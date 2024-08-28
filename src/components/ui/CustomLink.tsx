import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";

const customLinkVariants = cva("h-fit w-auto leading-none", {
  variants: {
    variant: {
      default:
        "text-blue-500 underline transition-colors duration-200 hover:text-blue-400",
      navbarLink:
        "px-4 py-3 tracking-widest text-primary-default transition-colors duration-200 hover:bg-primary-default hover:text-secondary-default xl:px-6 xl:py-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CustomLinkProps
  extends LinkProps,
    VariantProps<typeof customLinkVariants> {
  children?: React.ReactNode;
  className?: string;
}

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ children, variant, className, href = "#", ...props }, ref) => {
    return (
      <Link
        className={cn(customLinkVariants({ variant, className }))}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
