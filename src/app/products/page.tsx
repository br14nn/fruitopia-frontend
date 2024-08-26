import CategoryFiltererDropdown from "@/components/CategoryFiltererDropdown";
import OrderByPriceFiltererDropdown from "@/components/OrderByPriceFiltererDropdown";
import ProductsListRenderer from "@/components/ProductsListRenderer";
import SearchBar from "@/components/SearchBar";
import Text from "@/components/ui/Text";

const ProductsPage = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1800px] flex-col px-4 pb-4 sm:px-16 lg:px-24 lg:pb-8 2xl:pb-12">
      <Text className="mt-20 font-bold tracking-widest" size={"medium"}>
        PRODUCTS
      </Text>

      <div className="mt-4 flex w-full flex-col gap-4">
        <SearchBar className="lg:max-w-[500px]" />

        <div className="grid w-full grid-cols-3 gap-4">
          <CategoryFiltererDropdown />
          <OrderByPriceFiltererDropdown />
        </div>
      </div>

      <div className="w-ful mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        <ProductsListRenderer />
      </div>
    </main>
  );
};

export default ProductsPage;
