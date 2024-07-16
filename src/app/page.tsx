import Image from "next/image";
import HeroBg from "@/assets/images/hero-bg.png";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <section className="flex min-h-screen w-full flex-col items-center justify-center">
        <Image
          className="absolute inset-0 h-[100svh] w-full object-cover"
          src={HeroBg}
          alt="hero background"
        />
        <div className="absolute inset-0 h-[100svh] w-full bg-primary-default/30 bg-gradient-to-t from-primary-default" />
        <div className="z-10 flex flex-col items-center justify-center gap-4 leading-none">
          <h1 className="text-4xl font-bold tracking-widest text-secondary-default">
            FRUITOPIA
          </h1>
          <div className="flex w-full items-center justify-center gap-4">
            <hr className="flex-grow rounded-full border-2 border-accent-default" />
            <div className="aspect-square w-6 rotate-45 border-4 border-accent-default" />
            <hr className="flex-grow rounded-full border-2 border-accent-default" />
          </div>
          <p className="mt-4 text-lg text-secondary-default/70">Est. 2024</p>
        </div>
      </section>
      <section className="min-h-screen w-full"></section>
    </main>
  );
}
