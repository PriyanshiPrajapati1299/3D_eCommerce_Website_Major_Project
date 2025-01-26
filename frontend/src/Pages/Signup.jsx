import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully:", formData);
      // Handle form submission logic
    }
  };

  return (
    <div className="flex items-center p-10 justify-center min-h-screen bg-gradient-to-r from-red-100 via-orange-100 to-purple-100">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        {/* Caption */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Join the <span className="text-orange-500">VIBGYOR</span> Family!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign up now and unlock exclusive deals & offers.
        </p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-200`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
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

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-200`}
                placeholder="Re-enter your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-orange-500 rounded-xl font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Signup */}
        <button
          type="button"
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-100"
        >
          <FcGoogle className="text-xl mr-2" />
          Sign Up with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
