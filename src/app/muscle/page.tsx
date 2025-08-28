import CategorySection from "@/components/Category"

import MemberCard from "@/components/Member"
import WheyProducts from "@/components/product"
import GallerySlider from "@/components/Gallery"




export default function Muscle () {



  const productImages = [
    {
      id: 1,
      name: "Evoline Whey",
      kategori: "Whey",
      image: "/images/whey.jpg"
    },
    {
      id: 2,
      name: "Protein Bar",
      kategori: "Snack",
      image: "/images/protein-bar.jpg"
    },
    {
      id: 3,
      name: "BCAA",
      kategori: "Amino",
      image: "/images/bcaa.jpg"
    },
    // Tambahkan lebih banyak produk di sini
  ];


  return (
    <div className="">
      <CategorySection />
      {/* <FindUsSection /> */}
      <MemberCard />
      <WheyProducts />
       <GallerySlider/>  

    </div>
  )
}