"use client";

import Image from "next/image";
import Text from "@/components/ui/Text";
import useUserStore from "@/utils/store/user-store";

const Avatar = () => {
  const user = useUserStore((state) => state.user);

  if (user) {
    return (
      <div className="flex flex-col items-center gap-2 xl:flex-row-reverse">
        <Image
          className="aspect-square w-[70px] rounded-full object-cover object-center xl:w-[32px]"
          src={user.user_metadata?.picture}
          alt="profile picture"
          width={70}
          height={70}
        />
        <Text
          className="w-fit max-w-[150px] truncate font-medium text-primary-default"
          title={user.user_metadata?.name}
        >
          {user.user_metadata?.name}
        </Text>
      </div>
    );
  } else {
    return null;
  }
};

export default Avatar;
