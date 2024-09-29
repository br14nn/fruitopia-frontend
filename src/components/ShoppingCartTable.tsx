const ShoppingCartTable = () => {
  return (
    <div className="flex w-full flex-col">
      <div
        className="flex w-full flex-row gap-2 rounded-t-md border px-2 py-2"
        id="shoppingCartTableHeader"
      >
        <p className="w-full max-w-[40%]">Product</p>
        <p className="w-full max-w-[25%]">Quantity</p>
        <p className="w-full max-w-[20%]">Total</p>
        <p className="w-full max-w-[15%]">Action</p>
      </div>
    </div>
  );
};

export default ShoppingCartTable;
