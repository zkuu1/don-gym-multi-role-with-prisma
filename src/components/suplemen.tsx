// components/EquipmentSection.tsx
import Image from "next/image";
import Treadmill from "../images/treadmill.jpg";

const SuplemenSection = () => {
  const equipmentItems = [
    {
      id: 1,
      name: "Treadmills",
      description: "High-performance running machines with incline options",
      image: Treadmill,

    },

       {
      id: 2,
      name: "Treadmills",
      description: "High-performance running machines with incline options",
      image: Treadmill,

    },

       {
      id: 3,
      name: "Treadmills",
      description: "High-performance running machines with incline options",
      image: Treadmill,

    },

      {
      id: 4,
      name: "Treadmills",
      description: "High-performance running machines with incline options",
      image: Treadmill,

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
            Fit<span className="text-base_purple">ness</span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold uppercase text-white mt-2">
            Equipment
          </h2>
          <div className="w-24 h-1 bg-base_purple mx-auto mt-6"></div>
        </div>

        {/* Equipment Grid with proper spacing */}
        <div className="relative border-2 border-base_purple rounded-xl p-6 shadow-lg">
          {/* Purple glow effect */}
          <div className="absolute inset-0 rounded-xl ring-4 ring-base_purple/30 ring-inset pointer-events-none"></div>
          
          {/* Grid with safe spacing */}
         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {equipmentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-white"
              >
                <div className="relative h-40 sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
        </div>

        </div>
      </div>
    </section>
  );
};

export default SuplemenSection;