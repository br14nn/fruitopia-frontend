import { nanoid } from "nanoid";
import ShoppingCartItem from "./ShoppingCartItem";
import { findUserCart } from "@/utils/CRUD/READ";

const ShoppingCartItemRenderer = async () => {
  const { message } = (await findUserCart()) as {
    message: IFindUserCart[];
  };

  return (
    <>
      {message.map((data) => (
        <ShoppingCartItem
          key={nanoid()}
          id={data.id}
          title={data.product.name}
          image={data.product.image}
          price={data.product.price}
          qty={data.quantity}
        />
      ))}
    </>
  );
};

export default ShoppingCartItemRenderer;
