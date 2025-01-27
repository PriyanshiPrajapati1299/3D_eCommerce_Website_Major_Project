import React, { useState } from "react";
import banner1 from '../Images/banner-1.png';
import banner2 from '../Images/banner-2.png';

const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      name: "White Traditional Long Dress",
      size: "M",
      color: "Gray",
      originalPrice: 250.00,
      discountedPrice: 200.00,
      quantity: 1,
      image: [banner1],
    },
    {
      id: 2,
      name: "Long Sleeve Denim Jacket",
      size: "L",
      color: "Beige",
      originalPrice: 500.00,
      discountedPrice: 250.00,
      quantity: 1,
      image: [banner2],
    },
    {
      id: 3,
      name: "Hush Puppies Hush Puppies",
      size: "S",
      color: "Multicolor",
      originalPrice: 1499.00,
      discountedPrice: 999.00,
      quantity: 1,
      image: [banner1],
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  // Helper function to calculate discount percentage
  const calculateDiscount = (originalPrice, discountedPrice) => {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };

  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="bg-[#fff5e1] min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold text-[#222222]">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <div className="mt-2">
                  <span className="line-through text-gray-400 text-sm">
                    ₹{item.originalPrice}
                  </span>{" "}
                  <span className="text-[#ff4c4c] font-bold text-lg">
                    ₹{item.discountedPrice}
                  </span>
                  <p className="text-sm text-[#ffa500]">
                    You save {calculateDiscount(item.originalPrice, item.discountedPrice)}%
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="bg-[#ffa500] hover:bg-[#ff4c4c] text-white font-bold rounded-full w-8 h-8 flex justify-center items-center"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold text-[#222222]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="bg-[#ffa500] hover:bg-[#ff4c4c] text-white font-bold rounded-full w-8 h-8 flex justify-center items-center"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-[#ff4c4c] hover:underline font-medium"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h3 className="text-lg font-bold text-[#222222]">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-[#222222]">
              <span>Subtotal</span>
              <span>₹{calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between text-sm text-[#222222]">
              <span>Delivery Charges</span>
              <span>₹0</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-lg font-semibold text-[#222222]">
              <span>Total</span>
              <span>₹{calculateSubtotal()}</span>
            </div>
          </div>
          <button className="w-full bg-[#ff4c4c] hover:bg-[#ffa500] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
            Proceed to Checkout
          </button>

          {/* Promo Code */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[#222222]">
              Apply Promo Code
            </h4>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter your code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
              <button className="bg-[#ffa500] hover:bg-[#ff4c4c] text-white font-bold px-4 py-2 rounded-md transition-all duration-300">
                Apply
              </button>
            </div>
          </div>
          {/* Delivery Note */}
          <div className="text-sm text-gray-500">
            <p>Standard Delivery: 2-5 business days.</p>
            <p>
              Express Delivery available for select cities. Additional charges
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
