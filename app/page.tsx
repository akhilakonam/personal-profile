import Image from "next/image";
import bg from "@/assets/images/background.jpg";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center flex-col flex-1 font-sans">
      <Image
        src={bg}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <main className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16">
        <h1 className="text-center text-6xl font-bold tracking-tight text-white">
          Hi, I&apos;m Akhila Konam
        </h1>
        <p className="max-w-2xl text-center text-lg leading-8 text-zinc-200 whitespace-nowrap">
          Frontend Engineer building scalable, high-performance web systems
        </p>
        <p className="max-w-lg text-center text-sm leading-6 text-zinc-400">
          I design and build user-centric applications with a focus on performance, clean architecture, and developer experience.
        </p>
      </main>
    </div>
  );
}
