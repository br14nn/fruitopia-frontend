import Image from "next/image";
import HeroBg from "../assets/images/hero-bg.png";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <section className="flex min-h-[50svh] w-full flex-col items-center justify-center bg-[url('../assets/images/hero-bg.png')] bg-cover bg-center lg:min-h-screen">
        <div className="absolute inset-0 h-[50svh] w-full bg-primary-default/30 bg-gradient-to-t from-primary-default lg:min-h-screen" />
        <div className="z-10 flex flex-col items-center justify-center gap-2 leading-none sm:gap-3 xl:gap-4">
          <h1 className="text-lg font-bold tracking-widest text-secondary-default sm:text-2xl lg:text-3xl xl:text-4xl">
            FRUITOPIA
          </h1>
          <div className="flex w-full items-center justify-center gap-4">
            <hr className="flex-grow rounded-full border border-accent-default xl:border-2" />
            <div className="aspect-square w-4 rotate-45 border-2 border-accent-default xl:w-6 xl:border-4" />
            <hr className="flex-grow rounded-full border border-accent-default xl:border-2" />
          </div>
          <p className="mt-1 text-secondary-default/70 sm:mt-2 sm:text-md xl:mt-4 xl:text-lg">
            Est. 2024
          </p>
        </div>
      </section>
      <section className="min-h-screen w-full"></section>
    </main>
  );
}
