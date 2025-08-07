'use client';

import React, { useState } from 'react';


const FindUsSection = () => {
  const [activeLocation, setActiveLocation] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const locations = [
    {
      id: 1,
      name: "Location",
      address: "Don Gym Fitness, Tlogosari",
      details: "Our flagship location with premium equipment and classes",
      hours: "Open 24/7"
    },
    {
      id: 2,
      name: "Parcrop clearance v1",
      address: "2. Macro Maintenance Package",
      details: "Specialized in strength training and bodybuilding",
      hours: "Mon-Fri: 6am-10pm, Sat-Sun: 8am-8pm"
    },
    {
      id: 3,
      name: "Klassifico V",
      address: "3. Macro Maintenance Package",
      details: "Functional training and HIIT focused facility",
      hours: "Mon-Fri: 5am-11pm, Sat-Sun: 7am-9pm"
    },
    {
      id: 4,
      name: "Klassifico IV",
      address: "4. Parcrop Maintenance",
      details: "Yoga and pilates studio with recovery facilities",
      hours: "Mon-Fri: 6am-10pm, Sat-Sun: 8am-8pm"
    },
    {
      id: 5,
      name: "Klassifico III",
      address: "5. Virgin Cake & Bakery",
      details: "Combines fitness with nutrition - includes healthy cafe",
      hours: "Mon-Fri: 5am-10pm, Sat-Sun: 7am-8pm"
    },
    {
      id: 6,
      name: "Klassifico II",
      address: "6. Parcrop Challenge in",
      details: "Competition-focused training center",
      hours: "Mon-Fri: 5am-11pm, Sat-Sun: 7am-9pm"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold uppercase text-white">
            FIND US <span className="text-base_purple">!!</span>
          </h2>
          <div className="w-24 h-1 bg-base_purple mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Container with iframe */}
          <div className="lg:w-7/12 bg-gray-900 rounded-xl p-6 border-2 border-base_purple relative overflow-hidden">
           <div className="relative rounded-lg overflow-hidden h-[500px]">
      {/* Skeleton Layer */}
        {isLoading && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse z-10" />
        )}

        {/* Google Maps iframe */}
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1893506906117!2d110.45667517590732!3d-6.986963468425783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cc4f9052e23%3A0xa775a0388cbd8f4!2sDon%20Gym%20Fitness!5e0!3m2!1sid!2sid!4v1754574945854!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoading(false)}
            className="relative z-20"
        />
        </div>
          </div>

          {/* Location List */}
          <div className="lg:w-5/12">
            <div className="bg-gray-900 rounded-xl p-6 border-2 border-base_purple">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Locations
              </h3>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {locations.map(location => (
                  <div 
                    key={location.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeLocation === location.id
                        ? "bg-base_purple border-2 border-cyan-300"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveLocation(location.id)}
                  >
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        activeLocation === location.id 
                          ? "bg-cyan-300 text-gray-900" 
                          : "bg-gray-700 text-white"
                      }`}>
                        <span className="font-bold">{location.id}</span>
                      </div>
                      <div>
                        <h4 className={`font-bold ${
                          activeLocation === location.id 
                            ? "text-white" 
                            : "text-cyan-300"
                        }`}>
                          {location.name}
                        </h4>
                        <p className="text-sm text-gray-300 mt-1">
                          {location.address}
                        </p>
                      </div>
                    </div>
                    
                    {activeLocation === location.id && (
                      <div className="mt-3 pl-14">
                        <p className="text-gray-200 text-sm">
                          {location.details}
                        </p>
                        <div className="mt-2 flex items-center">
                          <svg className="w-4 h-4 text-cyan-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-cyan-200 text-sm">{location.hours}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
