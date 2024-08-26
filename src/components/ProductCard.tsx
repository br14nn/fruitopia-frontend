import Image from "next/image";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden rounded-md">
      <Image
        className="aspect-square w-full object-cover object-center"
        src={image}
        width="500"
        height="500"
        alt="product item"
        priority
      />

      <div className="absolute bottom-0 flex w-full flex-col gap-1.5 rounded-md bg-secondary-default p-2 leading-none xl:gap-2 2xl:p-4">
        <Text className="font-medium text-primary-default xl:text-md">
          {name}
        </Text>

        <Text className="text-sm text-accent-700 xl:text-base">
          ₱{price.toFixed(2)}
        </Text>

        <Button
          id="addToCardButton"
          className="py-2 text-base font-medium xl:py-3"
          variant={"accent"}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
