// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import hero from "../images/Hero.png";

const HeroSection = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Hi! The Material", href: "#" },
    { name: "Trentang Kamal", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt="Gym Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>
      
     

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-2xl md:text-7xl font-extrabold text-white mb-3">
          DON GYM 
        </h1>
        <h2 className="text-lg md:text-4xl text-white mb-8 font-bold">
          BEST PLACE TO TRAIN YOUR MUSCLE</h2>
        
        <button className="mt-10 bg-base_purple text-white px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-lg">
          SWIPE OUT
        </button>
      </div>
    </div>
  );
};

export default HeroSection;