import Image, { StaticImageData } from "next/image";
import Text from "../ui/Text";

interface SeasonalFruitCardProps {
  imgSrc: StaticImageData;
  text: string;
}

const SeasonalFruitCard = ({ imgSrc, text }: SeasonalFruitCardProps) => {
  return (
    <div className="relative flex h-[350px] w-[250px] items-end justify-center p-4 2xl:h-[400px] 2xl:w-[300px]">
      <Image
        className="absolute inset-0 z-10 h-full w-full object-cover"
        src={imgSrc}
        alt="fruits"
      />
      <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-t from-primary-default to-primary-default/0 to-80%" />
      <Text className="z-30 text-md tracking-widest">{text}</Text>
    </div>
  );
};

export default SeasonalFruitCard;
