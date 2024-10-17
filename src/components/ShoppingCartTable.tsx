import ShoppingCartItemRenderer from "./ShoppingCartItemRenderer";

const ShoppingCartTable = () => {
  return (
    <div className="flex w-full flex-initial flex-col lg:max-w-[70%] 2xl:max-w-[60%]">
      <div
        className="flex w-full flex-row gap-2 rounded-t-md border border-secondary-default p-2 sm:gap-4"
        id="shoppingCartTableHeader"
      >
        <div className="w-full max-w-[50%] flex-initial">
          <p>Product</p>
        </div>
        <div className="w-full max-w-[20%] flex-initial">
          <p className="hidden sm:block">Quantity</p>
          <p className="block sm:hidden">Qty</p>
        </div>
        <div className="w-full max-w-[20%] flex-initial">
          <p>Total</p>
        </div>
        <div className="w-full max-w-[10%] flex-initial"></div>
      </div>
      <div className="flex h-fit max-h-[400px] w-full flex-col gap-4 overflow-y-auto rounded-b-md border-x border-b border-secondary-default px-2 py-4 lg:max-h-[600px]">
        <ShoppingCartItemRenderer />
      </div>
    </div>
  );
};

export default ShoppingCartTable;
