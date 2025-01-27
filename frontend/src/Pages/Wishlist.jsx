import React, { useState } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { Search, Trash2 } from "lucide-react";
import banner1 from '../Images/banner-1.png';
import banner2 from '../Images/banner-2.png';
import { FcLike } from "react-icons/fc";

const Wishlist = () => {
  const [items, setItems] = useState([
    { id: 1, name: "White Table", price: 9999, rating: 4.5, image: [banner1] },
    { id: 2, name: "Desk Set", price: 19999, rating: 4.8, image: [banner2] },
    { id: 3, name: "Storage Basket", price: 2999, rating: 4.3, image: [banner1] },
    { id: 4, name: "Potted Succulent", price: 1599, rating: 4.7, image: [banner2]  },
    { id: 5, name: "Tote Bag", price: 1299, rating: 4.2, image: [banner1] },
    { id: 6, name: "Artificial Plant", price: 1899, rating: 4.4, image: [banner2] },
    { id: 7, name: "Canvas Tote", price: 1499, rating: 4.6, image: [banner1]},
    { id: 8, name: "Green Bowl", price: 999, rating: 4.5, image: [banner2] },
  ]);

  const removeFromWishlist = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#fff5e1] p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#222222]">Favorites</h1>
        <p className="text-[#222222] mt-2 md:mt-0">Keep your saved items and get ready to order them.</p>
        <div className="flex items-center border border-[#ffa500] rounded-2xl px-3 py-2 bg-white">
          <input
            type="text"
            placeholder="Search favorites"
            className="outline-none w-full text-sm text-[#222222]"
          />
          <Search className="text-[#ffa500]" />
        </div>
      </header>

      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-[#222222]">
          "Transform your favorites into your next big purchase!"
        </h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {items.map((item) => (
          <Card key={item.id} className="bg-white border border-[#ffa500] rounded-2xl shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-2xl" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#222222]">{item.name}</h2>
              <p className="text-sm text-[#ff4c4c] mt-1">₹{item.price}</p>
              <p className="text-xs text-[#222222] mt-1">Rating: {item.rating} ⭐</p>
              <div className="flex justify-between items-center mt-4">
                <Button
                  className="bg-[#ffa500] hover:bg-[#ff8800] text-black font-bold px-4 py-2 rounded-2xl"
                >
                  Buy
                </Button>
                <div className="flex items-center space-x-3">
                  <FcLike className="text-[#ff4c4c] text-2xl" />
                  <Trash2
                    className="text-[#222222] cursor-pointer hover:text-[#ff4c4c]"
                    onClick={() => removeFromWishlist(item.id)}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Wishlist;
