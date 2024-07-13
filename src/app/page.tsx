import Image from "next/image";
import HeroBg from "@/assets/images/hero-bg.png";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <Image
          className="absolute inset-0 h-[100svh] w-full object-cover"
          src={HeroBg}
          alt="hero background"
        />
        <div className="from-primary-default bg-primary-default/30 absolute inset-0 h-[100svh] w-full bg-gradient-to-t" />
        <h1 className="z-10 text-5xl font-bold tracking-widest text-white">
          FRUITOPIA
        </h1>
      </section>
      <section className="min-h-screen w-full"></section>
    </main>
  );
}
