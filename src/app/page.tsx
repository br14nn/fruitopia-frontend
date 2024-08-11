import Image from "next/image";
import SeasonalFruitCard from "@/components/SeasonalFruitCard";
import SocialMediaLink from "@/components/SocialMediaLink";
import Text from "@/components/ui/Text";
import {
  SpringFruitImg,
  SummerFruitImg,
  FallFruitImg,
  WinterFruitImg,
  FacebookLogo,
  XLogo,
  GithubLogo,
  LinkedinLogo,
  CopyrightImg,
} from "@/utils/images";

const Home = () => {
  return (
    <main className="flex w-full flex-col">
      <section className="flex min-h-[50svh] w-full flex-col items-center justify-center bg-[url('../assets/images/hero-bg.png')] bg-cover bg-center lg:min-h-screen">
        <div className="absolute inset-0 h-[50svh] w-full bg-primary-default/50 lg:min-h-screen" />

        <div className="z-10 flex flex-col items-center justify-center gap-2 leading-none sm:gap-3 xl:gap-4">
          <Text className="font-bold tracking-widest" size={"large"}>
            FRUITOPIA
          </Text>

          <div className="flex w-full items-center justify-center gap-4">
            <hr className="flex-grow border border-accent-default xl:border-2" />

            <div className="aspect-square w-4 rotate-45 border-2 border-accent-default xl:w-6 xl:border-4" />

            <hr className="flex-grow border border-accent-default xl:border-2" />
          </div>

          <Text className="mt-1 text-secondary-100 sm:mt-2 sm:text-md xl:mt-4 xl:text-lg 2xl:text-xl">
            Est. 2024
          </Text>
        </div>
      </section>

      <section className="flex min-h-fit w-full justify-center bg-secondary-default">
        <div className="flex w-full max-w-[1800px] flex-col items-center gap-8 p-8 sm:gap-16 sm:p-16 lg:p-24">
          <Text
            className="self-start font-bold tracking-widest text-primary-default"
            variant={"underlined"}
            size={"medium"}
          >
            SEASONAL FRUITS
          </Text>

          <div className="grid w-full grid-cols-1 justify-items-center gap-8 self-center sm:grid-cols-2 xl:grid-cols-4">
            <SeasonalFruitCard imgSrc={SpringFruitImg} text="SPRING" />

            <SeasonalFruitCard imgSrc={SummerFruitImg} text="SUMMER" />

            <SeasonalFruitCard imgSrc={FallFruitImg} text="FALL" />

            <SeasonalFruitCard imgSrc={WinterFruitImg} text="WINTER" />
          </div>
        </div>
      </section>
      <section
        id="aboutUs"
        className="flex min-h-fit w-full justify-center bg-primary-default text-secondary-default"
      >
        <div className="flex w-full max-w-[1800px] flex-col items-center gap-8 p-8 sm:p-16 lg:p-24">
          <Text
            className="font-bold tracking-widest"
            variant={"underlined"}
            size={"medium"}
          >
            ABOUT US
          </Text>

          <Text className="text-center lg:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia
            eveniet consequatur similique ea asperiores laborum odio
            reprehenderit dolore fugit, expedita velit eius blanditiis
            repudiandae, doloremque corporis, neque hic delectus accusantium?
            Perferendis impedit id quasi itaque a consequatur fugit distinctio!
          </Text>
        </div>
      </section>
      <section className="flex w-full items-center justify-center bg-accent-default text-primary-default">
        <div className="flex w-full max-w-[1800px] flex-col items-center gap-2 px-4 py-2 sm:flex-row sm:justify-between sm:px-16 sm:py-4 lg:px-24">
          <div className="flex flex-row items-center gap-2">
            <SocialMediaLink
              logo={FacebookLogo}
              href="https://www.facebook.com/brianVVitualla/"
            />

            <SocialMediaLink logo={XLogo} href="https://x.com/_bri__bri___" />

            <SocialMediaLink
              logo={GithubLogo}
              href="https://github.com/br14nn"
            />

            <SocialMediaLink
              logo={LinkedinLogo}
              href="https://www.linkedin.com/"
            />
          </div>

          <div className="flex flex-row items-center gap-1">
            <Image
              className="h-4 w-4"
              src={CopyrightImg}
              alt="copyright image"
            />

            <p>2024 BRIAN VITUALLA</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
