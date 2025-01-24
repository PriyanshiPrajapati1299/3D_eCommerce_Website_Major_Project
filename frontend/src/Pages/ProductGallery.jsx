import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Clothing Products Data
const products = [
  {
    name: "Men's T-Shirt",
    image: "https://rukminim2.flixcart.com/image/850/1000/kfoapow0-0/t-shirt/w/e/p/xl-collar-try-this-original-imafw2umg6wafajk.jpeg?q=90&crop=false", // Replace with actual image URL
    price: "$19.99",
  },
  {
    name: "Women's Dress",
    image: "https://assets.ajio.com/medias/sys_master/root/20231016/L6FL/652c5051afa4cf41f5466bdf/-473Wx593H-466711316-blue-MODEL.jpg",
    price: "$29.99",
  },
  {
    name: "Casual Sneakers",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65744dc77ebe289df79f80a7/screenshot-2022-08-10-093125_cleanup.png",
    price: "$39.99",
  },
  {
    name: "Winter Jacket",
    image: "https://5.imimg.com/data5/YU/PD/WS/SELLER-61259432/men-s-winter-fashion-jacket-500x500.jpg",
    price: "$9.99",
  },
  {
    name: "Summer Jacket",
    image: "https://image.made-in-china.com/2f0j00abkuOKqEaYor/Spring-and-Summer-New-Men-s-Casual-Cotton-Long-Sleeved-Jacket.webp",
    price: "$49.99",
  },
];

const ProductGallery = () => {
  return (
    <section className="py-12 bg-gray-50 mt-32">
      {/* Gallery Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Explore Our Clothing Collection</h2>
        <p className="text-gray-500 mt-2">Stylish apparel at the best prices</p>
      </div>

      {/* Scrollable Product Container */}
      <div className="relative">
        <div className="flex overflow-x-auto space-x-6 px-8 no-scrollbar">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-60 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Product Image */}
              <div className="w-full h-64 overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 mt-1">{product.price}</p>
                <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Shop Now
                </button>
              </div>

              {/* Sale Badge */}
              {index === 1 && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Sale
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Scroll Navigation Buttons */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-md shadow-md hover:bg-gray-300">
          <MdKeyboardArrowLeft/>
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-md shadow-md hover:bg-gray-300">
          <MdKeyboardArrowRight/>
        </button>
      </div>
    </section>
  );
};

export default ProductGallery;
