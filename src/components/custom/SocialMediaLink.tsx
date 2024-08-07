import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface SocialMediaLinkProps {
  className?: string;
  href: string;
  logo: StaticImageData;
}

const SocialMediaLink = ({
  className,
  href = "#",
  logo,
}: SocialMediaLinkProps) => {
  return (
    <Link
      className={twMerge(
        "flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-accent-600",
        className,
      )}
      href={href}
      target="_blank"
    >
      <Image
        className="aspect-square h-6 w-6"
        src={logo}
        alt="social media image"
      />
    </Link>
  );
};

export default SocialMediaLink;
