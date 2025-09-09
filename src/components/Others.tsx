"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Water from "../images/products/water.jpg"
import Whey from "../images/products/whey.jpg"
import HandGrip from "../images/products/hand-grip.jpg"
import Creatine from "../images/products/creatine.jpg"
import Cofeee from "../images/products/coffee.jpg"
import PrivateTrainer from "../images/trainer/private-trainer2.jpg"

// tipe untuk kategori filter
type Category = "all" | "drink" | "suplement" | "equipment" | "trainer";

interface PortfolioCardProps {
  showCard: Category;
  category: Category;
  imageHref: string;
  title: string;
  button: string;
  buttonHref: string;
}

const categoryLabels: Record<string, string> = {
  all: "All Products",
  suplement: "Suplements",
  trainer: "Private Trainer",
  drink: "Drinks",
  equipment: "Equipments",
};


const PortfolioCard: React.FC<PortfolioCardProps> = ({
  showCard,
  category,
  imageHref,
  title,
  button,
  buttonHref,
}) => {
  const isVisible = showCard === "all" || showCard === category;

  return (
    <motion.div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${isVisible ? "block" : "hidden"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative mb-12">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={imageHref}
            alt={title}
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card content */}
        <div className="relative z-10 mx-6 -mt-12 rounded-xl bg-white dark:bg-gray-900 py-8 px-6 text-center shadow-lg">
          <span className="text-cyan-300 mb-2 block text-sm font-semibold uppercase tracking-wide">
            {category}
          </span>
          <h3 className="text-gray-900 dark:text-white mb-5 text-xl font-bold">
            {title}
          </h3>
          <a
            href={buttonHref}
            className="inline-block rounded-lg border border-base_semi_purple py-2 px-6 text-sm font-medium text-white transition-all hover:bg-base_purple hover:text-white"
          >
            {button}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Others: React.FC = () => {
  const [showCard, setShowCard] = useState<Category>("all");

  const categories: Category[] = [
    "all",
    "drink",
    "suplement",
    "equipment",
    "trainer",
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-base_purple">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Explore some of our recent projects across branding, design,
            marketing, and development.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setShowCard(cat)}
              className={`rounded-lg py-2 px-6 text-sm font-semibold transition-colors duration-300 ${
                showCard === cat
                  ? "bg-base_purple text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-base_purple hover:text-white"
              }`}
              
            >
             {categoryLabels[cat] ?? cat.charAt(0).toUpperCase() + cat.slice(1)}

               

              
            </button>
            
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -mx-4">
          <PortfolioCard
            imageHref={Water.src}
            category="drink"
            title="Mineral Water"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            imageHref={Whey.src}
            category="suplement"
            title="Whey Protein"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            imageHref={HandGrip.src}
            category="equipment"
            title="Hand Grip"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            imageHref={PrivateTrainer.src}
            category="trainer"
            title="Private Trainer"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            imageHref={Creatine.src}
            category="suplement"
            title="Creatine"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            imageHref={Cofeee.src}
            category="drink"
            title="SEO Optimization"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
        </div>
      </div>
    </section>
  );
};

export default Others;
