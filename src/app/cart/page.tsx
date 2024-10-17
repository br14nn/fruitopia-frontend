import CheckoutDetailsCard from "@/components/CheckoutDetailsCard";
import ShoppingCartTable from "@/components/ShoppingCartTable";
import Text from "@/components/ui/Text";

const CartPage = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1800px] flex-col px-4 pb-4 sm:px-16 lg:px-24 lg:pb-8 2xl:pb-12">
      <Text
        className="mt-20 font-bold tracking-widest text-secondary-default"
        size={"medium"}
      >
        SHOPPING CART
      </Text>
      <div className="mt-8 flex w-full flex-col gap-4 lg:flex-row">
        <ShoppingCartTable />
        <CheckoutDetailsCard />
      </div>
    </main>
  );
};

export default CartPage;
