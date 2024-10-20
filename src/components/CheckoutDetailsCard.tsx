import React from "react";
import Text from "./ui/Text";
import Button from "./ui/Button";
import { getCartTotal } from "@/utils/CRUD/READ";

const CheckoutDetailsCard = async () => {
  const { message, error } = await getCartTotal();

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
          ₱{message.total}
        </Text>
      </div>
      <Button className="py-1" variant={"accent"}>
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutDetailsCard;
