"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Whey from "@/images/venum.jpg";
import Product2 from "@/images/venum.jpg";
import Product3 from "@/images/venum.jpg";
import Product4 from "@/images/venum.jpg";

const GallerySlider = () => {
  const images = [
    { id: 1, name: "Evoline Whey", kategori: "Whey", image: Whey },
    { id: 2, name: "Protein Bar", kategori: "Snack", image: Product2 },
    { id: 3, name: "BCAA Supplement", kategori: "Amino", image: Product3 },
    { id: 4, name: "Pre-Workout", kategori: "Energy", image: Product4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-white">
            <span className="text-base_purple">G</span>allery
          </h2>
          <div className="w-20 h-1 bg-base_purple mx-auto mt-4"></div>
        </div>

        {/* Wrapper sama style dengan kategori */}
        <div className="relative border-2 border-base_purple rounded-xl p-4 shadow-lg max-w-3xl mx-auto">
          <div className="absolute inset-0 rounded-xl ring-2 ring-base_purple/30 ring-inset pointer-events-none"></div>

          {/* Container slider */}
          <div className="overflow-hidden rounded-lg shadow-lg relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 relative"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                    width={800}
                    height={400}
                  />
                  {/* Overlay informasi */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white rounded-b-lg">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm">{item.kategori}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
