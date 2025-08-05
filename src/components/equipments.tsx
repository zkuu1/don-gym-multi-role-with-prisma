// components/EquipmentSection.tsx
import Image from "next/image";
import Treadmill from "../images/treadmill.jpg";

const EquipmentSection = () => {
  const equipmentItems = [
    {
      id: 1,
      name: "Treadmills",
      description: "High-performance running machines with incline options",
      image: Treadmill,
    },
    {
      id: 2,
      name: "Dumbbells",
      description: "Various weights for strength training",
       image: Treadmill,
    },
    {
      id: 3,
      name: "Ellipticals",
      description: "Low-impact cardio machines",
      image: Treadmill,
    },
    {
      id: 4,
      name: "Weight Benches",
      description: "Adjustable benches for versatile workouts",
     image: Treadmill,
    },
    {
      id: 5,
      name: "Stationary Bikes",
      description: "Indoor cycling equipment",
      image: Treadmill,
    },
    {
      id: 6,
      name: "Rowing Machines",
      description: "Full-body workout equipment",
      image: Treadmill,
    },
    {
      id: 7,
      name: "Cable Machines",
      description: "Multi-functional strength stations",
       image: Treadmill,
    },
    {
      id: 8,
      name: "Kettlebells",
      description: "Versatile weights for dynamic movements",
      image: Treadmill,
    },
  ];

  return (
    <section className="py-20 bg-black">
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

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;