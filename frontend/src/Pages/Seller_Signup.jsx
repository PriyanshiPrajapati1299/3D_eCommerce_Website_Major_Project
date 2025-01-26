import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTrashAlt } from "react-icons/fa";

const SellerSignup = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessType: "",
    idDocument: null,
    documentName: "", // Store document name
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Store the file and its name
    setFormData({
      ...formData,
      [name]: file,
      documentName: file.name,
    });
  };

  const handleRemoveFile = () => {
    // Clear the file and name
    setFormData({
      ...formData,
      idDocument: null,
      documentName: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName) newErrors.businessName = "Business name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.businessType) newErrors.businessType = "Business type is required";
    if (!formData.idDocument) newErrors.idDocument = "ID document is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Seller Form submitted successfully:", formData);
      // Handle form submission logic
    }
  };

  return (
    <div className="flex items-center justify-center p-10 min-h-screen bg-gradient-to-r from-blue-100 via-green-50 to-yellow-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-8">
        {/* Caption */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Join the <span className="text-orange-500">VIBGYOR</span> Seller Family!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign up to sell your products and grow your business with exclusive features.
        </p>

        {/* Seller Signup Form */}
        <form onSubmit={handleSubmit} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="businessName">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${
                  errors.businessName ? "border-red-500" : "border-gray-300"
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-200`}
                placeholder="Enter your business name"
              />
              {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
            </div>

            <div className="mb-2">
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

            <div className="mb-2">
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

            <div className="mb-2">
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

            <div className="mb-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="businessType"
              >
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${
                  errors.businessType ? "border-red-500" : "border-gray-300"
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-200`}
              >
                <option value="">Select your business type</option>
                <option value="individual">Individual</option>
                <option value="company">Company</option>
                <option value="startup">Startup</option>
              </select>
              {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
            </div>

            {/* File Upload with Preview */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="idDocument">
                Upload Your ID (PDF, JPG, JPEG, PNG)
              </label>
              <div className="flex items-center justify-center w-full bg-gray-100 border-2 border-gray-300 rounded-xl">
                <label
                  htmlFor="idDocument"
                  className="py-2 px-4 text-sm text-gray-700 cursor-pointer"
                >
                  Choose File
                </label>
                <input
                  type="file"
                  id="idDocument"
                  name="idDocument"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              {formData.documentName && (
                <div className="mt-2 flex items-center">
                  <p className="text-sm text-gray-700 mr-2">{formData.documentName}</p>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              )}
              {errors.idDocument && <p className="text-red-500 text-sm mt-1">{errors.idDocument}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-orange-500 rounded-xl font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Sign Up as Seller
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/seller-login" className="text-orange-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SellerSignup;
