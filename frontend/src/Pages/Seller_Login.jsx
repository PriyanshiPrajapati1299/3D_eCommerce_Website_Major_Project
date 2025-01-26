import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SellerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Seller Login submitted successfully:", formData);
      // Handle login logic
    }
  };

  return (
    <div className="flex items-center justify-center p-10 min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-8">
        {/* Caption */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back to <span className="text-orange-500">VIBGYOR</span> Seller Dashboard!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Log in to manage your store and access exclusive tools.
        </p>

        {/* Seller Login Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="mb-0">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-200`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-200`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Full Width Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-orange-500 rounded-xl font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Log In as Seller
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="/seller-signup" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SellerLogin;
