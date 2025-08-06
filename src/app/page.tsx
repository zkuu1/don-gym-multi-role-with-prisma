import Image from "next/image";
import Navbar from "../components/Appbar";
import HeroSection from "@/components/Hero";
import Equipments from "@/components/equipments";



export default function Home() {
  return (
    <div>
      
    <Navbar/>
  <HeroSection />
  <Equipments />

  

    </div>
  
  );
}