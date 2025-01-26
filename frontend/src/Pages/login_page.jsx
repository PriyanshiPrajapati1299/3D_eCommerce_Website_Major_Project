import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
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
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Login successful with data:", formData);
      setErrors({});
      // Handle login logic here (e.g., API call)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-100 via-orange-100 to-purple-100">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        {/* Caption */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back to <span className="text-orange-500">VIBGYOR</span>!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Log in to access your personalized dashboard.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-orange-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-orange-400"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-orange-500 rounded-xl font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-100"
        >
          <FcGoogle className="text-xl mr-2" />
          Log In with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
