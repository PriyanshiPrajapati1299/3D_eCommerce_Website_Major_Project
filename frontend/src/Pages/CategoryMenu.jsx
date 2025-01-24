import React from "react";
import { IoManOutline, IoWomanOutline, IoFootstepsOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import { RiHomeHeartLine } from "react-icons/ri";

const CategoryMenu = () => {
  const categories = [
    { name: "Men's Wear", icon: <IoManOutline className="text-3xl text-blue-600" />},
    { name: "Women's Wear", icon: <IoWomanOutline className="text-3xl text-pink-500" /> },
    { name: "Footwear", icon: <IoFootstepsOutline className="text-3xl text-green-500" /> },
    { name: "Accessories", icon: <FiGift className="text-3xl text-yellow-500" /> },
    { name: "Home Decor", icon: <RiHomeHeartLine className="text-3xl text-purple-500" /> },
  ];

  return (
    <section className="relative py-12 bg-transparent -m-32">
    

      {/* Category Grid */}
      <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-lg shadow-lg border-2 border-pink-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative group cursor-pointer"
          >
            {/* Background Gradient Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-50 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300"></div>

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center mb-4">
              <div className="bg-gray-100 group-hover:bg-white rounded-full p-4 shadow-md transition duration-300">
                {category.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-sm text-center font-semibold text-gray-700 group-hover:text-pink-500 transition duration-300">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
