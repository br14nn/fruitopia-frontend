"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import BasketIcon from "@/components/svgs/BasketIcon";
import VerticalLineIcon from "@/components/svgs/VerticalLineIcon";
import useUserStore from "@/utils/store/user-store";
import useNavbarStore from "@/utils/store/navbar-store";

const Avatar = () => {
  const user = useUserStore((state) => state.user);
  const toggleMenu = useNavbarStore((state) => state.toggleMenu);

  const handleClick = () => {
    toggleMenu();
  };

  if (user) {
    return (
      <div className="flex w-full flex-col items-center gap-2 xl:w-fit xl:flex-row-reverse">
        <Image
          className="aspect-square w-[70px] rounded-full object-cover object-center xl:w-[32px]"
          src={user.user_metadata?.picture}
          alt="profile picture"
          width={70}
          height={70}
        />
        <div className="flex w-full justify-center gap-2 px-4 xl:px-0">
          <Text
            className="w-fit truncate font-medium text-primary-default"
            title={user.user_metadata?.name}
          >
            {user.user_metadata?.name}
          </Text>
          <VerticalLineIcon />
          <Link href="/cart" onClick={handleClick}>
            <BasketIcon />
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Avatar;
