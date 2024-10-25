"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Text from "./ui/Text";
import Button from "./ui/Button";
import { getCartTotal } from "@/utils/CRUD/READ";
import { deleteCartCheckout } from "@/utils/CRUD/DELETE";

const notifySuccess = () =>
  toast.success("Order complete", {
    id: "notifySuccess",
    position: "bottom-right",
  });

const notifyError = () =>
  toast.error("Your cart is empty", {
    id: "notifyError",
    position: "bottom-right",
  });

const CheckoutDetailsCard = () => {
  const pathname = usePathname();
  const [cartTotal, setCartTotal] = useState<number>(0);

  const handleClick = () => {
    deleteCartCheckout().then(({ message }) => {
      if (message.count === 0) notifyError();
      else notifySuccess();
    });
  };

  useEffect(() => {
    getCartTotal().then(({ message }) => {
      setCartTotal(message.total);
    });
  });

  useEffect(() => {
    toast.dismiss();
  }, [pathname]);

  return (
    <div className="flex h-fit w-full max-w-[25rem] flex-col gap-2 self-center rounded-md bg-secondary-default p-2 lg:self-start">
      <div className="flex w-full flex-row justify-between gap-2">
        <Text
          className="font-bold tracking-wider text-primary-default"
          variant={"default"}
          size={"default"}
        >
          TOTAL
        </Text>
        <Text className="w-full truncate text-end font-bold text-primary-default">
          ₱{cartTotal.toFixed(2)}
        </Text>
      </div>
      <Button
        className="py-1 font-medium"
        variant={"accent"}
        onClick={handleClick}
      >
        Place Order
      </Button>
      <Toaster />
    </div>
  );
};

export default CheckoutDetailsCard;
