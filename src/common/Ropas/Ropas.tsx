import { useState } from "react";
import { motion } from "framer-motion";
import Image1 from "../../assets/ropa/pantalon1.webp";
import Image2 from "../../assets/ropa/pantalon2.webp";
import Image3 from "../../assets/ropa/pantalon1mujer.webp";
import Image4 from "../../assets/ropa/pantalon2mujer.webp";
import Image5 from "../../assets/ropa/polera1.webp";
import Image6 from "../../assets/ropa/polera2.webp";
const ProductsData = [
  {
    id: 1,
    category: "Pantalon",
    image: Image1,
    title: "Pantalon Beige",
    info: "info",
    price: "price",
  },
  {
    id: 2,
    category: "Pantalon",
    image: Image2,
    title: "Dumbells",
    info: "info",
    price: "$100",
  },
  {
    id: 3,
    category: "Pantalon",
    image: Image3,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 4,
    category: "Pantalon",
    image: Image4,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 5,
    category: "Poleras",
    image: Image5,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 6,
    category: "Poleras",
    image: Image6,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
  {
    id: 7,
    category: "Yoga",
    image: Image3,
    title: "Yoga Mat",
    info: "info",
    price: "$100",
  },
];
export const Ropas = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Pantalon", "Poleras", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);
  return (
    <div className="container my-12 md:my-16">
      {/* Tabs button section */}
      <div className="flex space-x-4 mb-4 p-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded ${
              activeTab === tab
                ? "bg-primary text-white"
                : " bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <motion.div
            id={card.id.toString()}
            key={card.id}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-4 border rounded shadow-sm space-y-2"
          >
            <img
              src={card.image}
              alt=""
              className="h-[240px] w-full object-cover"
            />
            <p className="text-xl font-semibold">{card.title}</p>
            <p className="text-gray-500">{card.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
