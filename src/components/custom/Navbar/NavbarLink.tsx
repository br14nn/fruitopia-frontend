import CustomLink from "@/components/ui/CustomLink";
import useNavbarStore from "@/utils/store/useNavbarStore";
import { cn } from "@/utils/utils";

interface NavbarLinkProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

const NavbarLink = ({ children, className, href }: NavbarLinkProps) => {
  const toggleVisibility = useNavbarStore((state) => state.toggleVisibility);

  return (
    <CustomLink
      className={cn(
        "px-4 py-2 transition-colors duration-150 hover:bg-primary-default hover:text-secondary-default",
        className,
      )}
      href={href}
      onClick={toggleVisibility}
    >
      {children}
    </CustomLink>
  );
};

export default NavbarLink;
