import React from "react";
import banner1 from "../Images/banner-1.png";
import banner2 from "../Images/banner-2.png";
import bestSeller from "../Images/best-seller.png";
import sporty from "../Images/sporty.png";
import ecoFriendly from "../Images/eco-friendly.png";
import ProductGallery from "../Pages/ProductGallery";

const Hero = () => {
  return (
    <div className="bg-[#f8f9fa] p-8">
      {/* Main Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Summer Collection Banner */}
        <div className="col-span-2 bg-gradient-to-r from-[#fce3e3] to-[#f5f5f5] p-8 rounded-xl relative shadow-md">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 text-[#333]">
              Summer Collection of T-Shirts
            </h1>
            <p className="text-sm text-[#555] mb-6">
              Refresh your wardrobe with trendy, comfortable, and stylish
              T-shirts made for every occasion.
            </p>
            <button className="bg-[#ff4c4c] text-white py-3 px-6 rounded-md hover:bg-[#e03e3e] transition font-medium">
              Shop Now
            </button>
          </div>
          <div className="absolute top-32 right-48 text-[#ff4c4c] text-2xl font-bold">
            50% OFF
          </div>
          <img
            src={banner2}
            alt="T-Shirt"
            className="absolute bottom-0 right-1 h-60 object-cover"
          />
        </div>

        {/* Best Sellers */}
        <div className="bg-[#e3fcef] p-6 rounded-xl shadow-md flex flex-col justify-between">
          <h2 className="text-lg font-bold text-[#333] mb-4">Best Sellers</h2>
          <img
            src={bestSeller}
            alt="Best Seller"
            className="h-40 object-contain mx-auto animate-bounce"
          />
          <button className="bg-[#222222] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#111] transition">
            View Collection
          </button>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {/* Vintage Collection */}
        <div className="col-span-1 bg-gradient-to-r from-[#ffecdf] to-[#ffe7e3] p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg font-bold mb-3">Limited Edition</h3>
          <p className="text-sm text-[#555] mb-4">
            Exclusive designs available only this season!
          </p>
          <img
            src={banner1}
            alt="Vintage Collection"
            className="h-44 mx-auto mb-4"
          />
          <button className="bg-[#ff4c4c] text-white py-2 px-4 rounded-md hover:bg-[#e03e3e] transition">
            Shop Now
          </button>
        </div>

        {/* Sporty T-Shirts */}
        <a
          href="/sporty-tshirts"
          className="col-span-1 bg-green-100 p-6 rounded-xl shadow-md flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div>
            <h3 className="text-lg font-bold text-[#333]">Sporty T-Shirts</h3>
            <p className="text-sm text-[#777]">Perfect for active lifestyles.</p>
          </div>
          <img src={sporty} alt="Sporty T-Shirts" className="h-40" />
        </a>

        {/* Eco-Friendly T-Shirts */}
        <a
          href="/eco-friendly-tshirts"
          className="col-span-1 bg-purple-200 p-6 rounded-xl shadow-md flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div>
            <h3 className="text-lg font-bold text-[#333]">Eco-Friendly</h3>
            <p className="text-sm text-[#777]">
              Sustainable fabrics, promoting eco-consciousness.
            </p>
          </div>
          <img src={ecoFriendly} alt="Eco-Friendly T-Shirts" className="h-40" />
        </a>

        {/* New Arrivals */}
        <a
          href="/new-arrivals"
          className="col-span-1 bg-rose-100 p-6 rounded-xl shadow-md flex items-center justify-between hover:scale-105 transition-transform"
        >
          <div>
            <h3 className="text-lg font-bold text-[#333]">New Arrivals</h3>
            <p className="text-sm text-[#777]">Latest designs in stock.</p>
          </div>
          <span className="text-[#222] text-2xl font-bold">&rarr;</span>
        </a>
      </div>
      <ProductGallery/>
    </div>
    
  );
  
};

export default Hero;
