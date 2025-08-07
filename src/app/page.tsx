import Image from "next/image";
import Navbar from "../components/Appbar";
import HeroSection from "@/components/Hero";
import Equipments from "@/components/equipments";
import BestForSection from "@/components/bestFor";
import FindUsSection from "@/components/findUs";



export default function Home() {
  return (
    <div>
      
        <Navbar/>
        <HeroSection />
        <Equipments />
        <BestForSection />
        <FindUsSection />


    </div>
  
  );
}