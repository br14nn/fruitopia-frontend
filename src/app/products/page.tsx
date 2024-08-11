import SearchBar from "@/components/SearchBar";
import FilterIcon from "@/components/svgs/FilterIcon";
import Text from "@/components/ui/Text";

const ProductsPage = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1800px] flex-col gap-4 px-4 sm:px-16 lg:px-24">
      <Text className="mt-20 font-bold tracking-widest" size={"medium"}>
        PRODUCTS
      </Text>

      <div className="flex w-full items-center gap-2 sm:w-[500px]">
        <SearchBar className="w-auto flex-grow" />

        <button className="h-10 w-10 rounded-md bg-secondary-default p-2 transition-colors duration-200 hover:bg-secondary-200">
          <FilterIcon />
        </button>
      </div>
    </main>
  );
};

export default ProductsPage;
