import CategorySection from "@/components/category"
import FindUsSection from "@/components/FindUs"
import MemberCard from "@/components/Member"
import WheyProducts from "@/components/product"
import GallerySlider from "@/components/gallery"




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