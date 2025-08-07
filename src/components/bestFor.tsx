// components/EquipmentSection.tsx
import Image from "next/image";
import Treadmill from "../images/treadmill.jpg";

const BestForSection = () => {
  const equipmentItems = [
    {
      id: 1,
      title: "1K+",
      subtitle: "Active Members",
      description: "Trusted by many to supporttheir fitness journey",
    },
    {
      id: 2,
      title: "25+",
      subtitle: "Fitness Equipment",
      description: "High-performance running machines with incline options",
    },
     {
      id: 3,
      title: "90%",
      subtitle: "Satisfied Customers",
      description: "We prioritize customer satisfaction with our services",
    },

    // ... other equipment items
  ];

  return (
    <section className="py-20 bg-black">
      {/* Main container with controlled width and padding */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold uppercase text-white">
            Why Is DON GYM Best For
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold uppercase text-white mt-2">
            You
          </h2>
          <div className="w-24 h-1 bg-base_purple mx-auto mt-6">

          </div>
        </div>

        {/* Equipment Grid with proper spacing */}
        <div className="relative border-2 border-base_purple rounded-xl p-6 shadow-lg">
          <div className="absolute inset-0 rounded-xl ring-4 ring-base_purple/30 ring-inset pointer-events-none">
          </div>
            
          
         <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {equipmentItems.map((item) => (
                    <div
                    key={item.id}
                    className="bg-base_purple rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-white"
                    >
                    <div className="relative h-6 sm:h-10 md:h-12 bg-base_purple" />
                    <div className="p-3 sm:p-4 md:p-6">
                        <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-cyan-300 mb-1 sm:mb-2 md:mb-4">
                        {item.title}
                        </h3>
                        <h2 className="text-base sm:text-xl md:text-2xl text-white font-bold mb-1">
                        {item.subtitle}
                        </h2>
                        <p className="text-sm sm:text-base text-white">
                        {item.description}
                        </p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default BestForSection;