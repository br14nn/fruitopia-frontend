"use client";

import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import createCart from "@/utils/CRUD/CREATE/createCart";
import { useEffect } from "react";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const notify = () =>
  toast.success("Added to cart", {
    position: "bottom-right",
    duration: 2000,
    style: {
      backgroundColor: "#fff",
    },
  });

const ProductCard = ({
  id: productID,
  image,
  name,
  price,
}: ProductCardProps) => {
  const pathname = usePathname();

  const handleClick = async () => {
    await createCart(productID);
    notify();
  };

  useEffect(() => {
    toast.dismiss();
  }, [pathname]);

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden rounded-md">
      <Image
        className="aspect-square w-full object-cover object-center"
        src={image}
        width="500"
        height="500"
        alt="product item"
        priority
      />

      <div className="absolute bottom-0 flex w-full flex-col gap-1.5 rounded-md bg-secondary-default p-2 leading-none xl:gap-2 2xl:p-4">
        <Text className="font-medium text-primary-default xl:text-md">
          {name}
        </Text>

        <Text className="text-sm text-accent-700 xl:text-base">
          ₱{price.toFixed(2)}
        </Text>

        <Button
          id="addToCardButton"
          className="py-2 text-base font-medium xl:py-3"
          variant={"accent"}
          onClick={handleClick}
        >
          Add To Cart
        </Button>
        <Toaster />
      </div>
    </div>
  );
};

export default ProductCard;
