import React, { useState } from "react";
import { FiUser, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold flex items-center">
          <span className="text-[#ff4c4c] text-2xl font-bold">V</span>
          <span className="text-[#ffa500] text-2xl font-bold">I</span>
          <span className="text-[#222222] text-2xl font-bold">B</span>
          <span className="text-[#ff4c4c] text-2xl font-bold">G</span>
          <span className="text-[#ffa500] text-2xl font-bold">Y</span>
          <span className="text-[#222222] text-2xl font-bold">O</span>
          <span className="text-[#ff4c4c] text-2xl font-bold">R</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your product name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="relative dropdown-container">
            <button
              onClick={handleDropdownToggle}
              className="flex items-center space-x-1 text-xl focus:outline-none"
            >
              <FiUser />
              <span className="text-sm">Login</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-40">
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"  onClick={() => setDropdownOpen(false)}
                  ><Link to="/seller-login">Seller</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"  onClick={() => setDropdownOpen(false)}
                  >
                    <Link to="/login">Customer</Link>
                    </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <Link to='/user-wishlist'><FiHeart className="text-2xl" /></Link>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">0</span>
          </div>
          <div className="relative">
            <Link to='/user-cart'><FiShoppingBag className="text-2xl" /></Link>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">0</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-gray-100 py-2">
        <div className="container mx-auto px-28 flex justify-between text-sm font-medium">
          <a href="/about-us" className="hover:text-gray-700">About Us</a>
          <a href="#" className="hover:text-gray-700">Products</a>
          <a href="#" className="hover:text-gray-700">Men's</a>
          <a href="#" className="hover:text-gray-700">Women's</a>
          <a href="#" className="hover:text-gray-700">Top Sellers</a>
          <a href="#" className="hover:text-gray-700">Top Deals</a>
          <a href="#" className="hover:text-gray-700">Contact us</a>
          <a href="#" className="hover:text-gray-700">Hot Offers</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
