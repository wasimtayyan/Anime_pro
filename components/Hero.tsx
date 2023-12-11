import Image from "next/image";
import AnimatedText from "./AnimatedText";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex ">
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Dive Into The
          <AnimatedText text="Vibrant Tapestry " className="red-gradient" />
          of Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image
          src="/kiloa.png"
          alt="anime"
          height={300}
          className="object-contain"
          width={450}
        />
      </div>
    </header>
  );
}

export default Hero;
