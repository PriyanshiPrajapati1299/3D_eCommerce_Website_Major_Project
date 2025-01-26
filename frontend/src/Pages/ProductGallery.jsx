import React, { useState,  useEffect } from "react";
import banner1 from '../Images/banner-1.png';
import banner2 from '../Images/banner-2.png';
import { FcFlashOn } from "react-icons/fc";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { LuIndianRupee } from "react-icons/lu";

const products = [
  {
    id: 1,
    name: "White Traditional Long Dress",
    price: "200.00",
    originalPrice: "250.00",
    imageUrl: [banner1],
    colors: ["#0000FF", "#FFC0CB", "#000000"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Long Sleeve Denim Jacket",
    price: "250.00",
    originalPrice: "500.00",
    imageUrl: [banner2],
    colors: ["#0000FF", "#FFFFFF", "#000000"],
    rating: 4.6,
  },
  {
    id: 3,
    name: "Hush Puppies Hush Puppies",
    price: "999.00",
    originalPrice: "1499.00",
    imageUrl: [banner1],
    colors: ["#FFC0CB", "#FF0000", "#000000"],
    rating: 4.8,
  },
  {
    id: 4,
    name: "Athens Skirt",
    price: "499.00",
    originalPrice: "599.00",
    imageUrl: [banner2],
    colors: ["#0000FF", "#808080", "#000000"],
    rating: 4.5,
  },
  {
    id: 5,
    name: "Athens Skirt",
    price: "859.00",
    originalPrice: "899.99",
    imageUrl: [banner1],
    colors: ["#0000FF", "#808080", "#000000"],
    rating: 4.5,
  },
];

const ProductGallery = () => {
  const [wishlist, setWishlist] = useState([]);
  const [timer, setTimer] = useState({ hours: 12, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);


  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
      } else if (i === fullStars && halfStar) {
        stars.push(<span key={i} className="text-yellow-500">&#9734;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400">&#9734;</span>);
      }
    }
    return stars;
  };

  const calculateDiscount = (price, originalPrice) => {
    const discount = ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discount);
  };

  

  return (
    <div className="py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex"><FcFlashOn className="text-4xl"/><h1 className="text-2xl font-bold">Flash Sale</h1></div>
        <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
        <div className="bg-red-100 px-3 py-1 rounded-md">{String(timer.hours).padStart(2, '0')}</div> :
          <div className="bg-red-100 px-3 py-1 rounded-md">{String(timer.minutes).padStart(2, '0')}</div> :
          <div className="bg-red-100 px-3 py-1 rounded-md">{String(timer.seconds).padStart(2, '0')}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-red-200 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
            <div className="relative w-full h-56">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
              <span className="absolute -top-3 -left-5 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded -rotate-12">
              -{calculateDiscount(product.price, product.originalPrice)}%
              </span>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-2 right-2 text-xl">
                {wishlist.includes(product.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-gray-500" />
                )}
              </button>
            </div>
            <h2 className="text-base font-semibold mt-3 text-center text-gray-800">
              {product.name}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
            <LuIndianRupee className="text-red-500 text-lg font-bold"/>
            <span className="text-red-500 text-lg font-bold -ml-2">
                {product.price}</span>
                <LuIndianRupee className="line-through text-gray-400 text-sm"/>
              <span className="line-through text-gray-400 text-sm -ml-2">
              {product.originalPrice}
              </span>
            </div>
            <div className="flex justify-between gap-10">
            <div className="flex gap-2 mt-3">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`w-5 h-5 rounded-full border border-gray-300`}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 font-semibold">
              {renderStars(product.rating)}
            </div>
            </div>
            
            <div className="flex justify-between gap-20">
              <button className="mt-4 px-4 py-2 font-bold bg-gray-100 text-red-500 rounded-lg hover:bg-gray-200">
             Buy
            </button>
              <button className="mt-4 px-4 py-2 font-bold bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
             View
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;