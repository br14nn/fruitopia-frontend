"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import DeleteIcon from "./svgs/DeleteIcon";
import { updateCartItem } from "@/utils/CRUD/UPDATE";
import { deleteCartItem } from "@/utils/CRUD/DELETE";

interface ShoppingCartItemProps {
  id: number;
  title: string;
  image: string;
  qty: number;
  price: number;
}

const ShoppingCartItem = ({
  id: cartID,
  title,
  image,
  qty,
  price,
}: ShoppingCartItemProps) => {
  const [quantity, setQuantity] = useState<number>(qty);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;

    if (id === "delete") {
      return deleteCartItem(cartID);
    }

    if (id === "incrementorButton") {
      if (quantity < 99) {
        setDisabled(true);
        updateCartItem(cartID, "increment").then(() => {
          setQuantity((oldVal) => oldVal + 1);
          setDisabled(false);
        });
      }
    } else if (id === "decrementorButton") {
      if (quantity > 1) {
        setDisabled(true);
        updateCartItem(cartID, "decrement").then(() => {
          setQuantity((oldVal) => oldVal - 1);
          setDisabled(false);
        });
      }
    }
  };

  return (
    <div className="flex w-full flex-row gap-2 sm:gap-4">
      <div className="flex w-full max-w-[50%] flex-initial flex-row gap-2">
        <Image
          className="aspect-square w-[35px] rounded-md object-cover object-center lg:w-[48px]"
          src={image}
          width={200}
          height={200}
          alt={title}
        />

        <div className="w-full flex-grow truncate text-sm lg:text-base">
          <p className="truncate font-bold">{title}</p>
          <p>₱{price}</p>
        </div>
      </div>
      <div className="flex w-full max-w-[20%] flex-initial items-center">
        <div className="flex w-full max-w-[120px] flex-row justify-between overflow-hidden rounded-full border border-secondary-default">
          <button
            className="px-1.5 text-secondary-default transition-colors duration-150 hover:bg-secondary-default hover:text-primary-default disabled:hover:bg-transparent disabled:hover:text-secondary-default"
            id="decrementorButton"
            onClick={handleClick}
            disabled={disabled}
          >
            -
          </button>
          <input
            className="w-full bg-transparent text-center text-sm font-bold sm:text-base"
            readOnly
            disabled
            type="text"
            value={quantity}
          />
          <button
            className="px-1.5 text-secondary-default transition-colors duration-150 hover:bg-secondary-default hover:text-primary-default disabled:hover:bg-transparent disabled:hover:text-secondary-default"
            id="incrementorButton"
            onClick={handleClick}
            disabled={disabled}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex w-full max-w-[20%] flex-initial items-center">
        <p className="text-sm font-bold sm:text-base">
          ₱{(quantity * price).toFixed(2)}
        </p>
      </div>
      <div className="flex w-full max-w-[10%] flex-initial items-center">
        <Button
          className="w-fit p-2"
          id="delete"
          variant={"secondary"}
          onClick={handleClick}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
