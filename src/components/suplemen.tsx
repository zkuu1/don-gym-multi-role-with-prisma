// components/CategorySection.tsx
import { FaUsers, FaImages, FaPills, FaQuestionCircle } from "react-icons/fa";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Member",
      icon: <FaUsers className="text-5xl" />,
    },
    {
      id: 2,
      name: "Gallery",
      icon: <FaImages className="text-5xl" />,
    },
    {
      id: 3,
      name: "Supplement",
      icon: <FaPills className="text-5xl" />,
    },
    {
      id: 4,
      name: "Question",
      icon: <FaQuestionCircle className="text-5xl" />,
    },
  ];

  return (
    <section className="py-16 bg-black mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-white">
            <span className="text-base_purple">K</span>ATEGORI
          </h2>
          <div className="w-20 h-1 bg-base_purple mx-auto mt-4"></div>
        </div>

        <div className="relative border-2 border-base_purple rounded-xl p-4 shadow-lg max-w-3xl mx-auto">
          <div className="absolute inset-0 rounded-xl ring-2 ring-base_purple/30 ring-inset pointer-events-none"></div>
          
          {/* Grid dengan ikon diperbesar dan judul di bawah */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="flex flex-col items-center"
              >
                {/* Kotak ikon */}
                <div className="group relative aspect-square w-full bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-base_purple border border-white">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                    <div className="text-base_purple mb-2 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                {/* Judul di bawah kotak */}
                <h3 className="mt-4 text-xl font-bold text-white uppercase tracking-wider text-center">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;