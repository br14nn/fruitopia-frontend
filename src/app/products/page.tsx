import SearchBar from "@/components/custom/SearchBar";

const ProductsPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 px-4">
      <h1 className="mt-20 text-md font-bold tracking-widest">PRODUCTS</h1>
      <SearchBar />
    </main>
  );
};

export default ProductsPage;
