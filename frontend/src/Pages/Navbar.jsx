import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close the dropdown when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest('#login-dropdown')) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
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

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-[#222222] font-medium">
          <a href="#about" className="hover:text-[#ffa500] transition">
            ABOUT US
          </a>
          <a href="#products" className="hover:text-[#ffa500] transition">
            PRODUCTS
          </a>
          <a href="#delivery" className="hover:text-[#ffa500] transition">
            DELIVERY
          </a>
          <a href="#news" className="hover:text-[#ffa500] transition">
            NEWS
          </a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-[#222222] hover:text-[#ffa500] text-lg">
            <FaSearch />
          </button>

          {/* Cart Icon */}
          <button className="relative text-[#222222] hover:text-[#ffa500] text-lg">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-[#ff4c4c] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Login Dropdown */}
          <div className="relative" id="login-dropdown">
            <button
              className="bg-[#ff4c4c] text-white px-3 py-2 rounded-full font-medium hover:bg-[#ffa500] transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Login
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md">
                <div
                  className="p-2 hover:bg-[#fff5e1] text-[#222222] cursor-pointer transition"
                  onClick={() => alert('User Login')}
                >
                  User
                </div>
                <div
                  className="p-2 hover:bg-[#fff5e1] text-[#222222] cursor-pointer transition"
                  onClick={() => alert('Admin Login')}
                >
                  Admin
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
