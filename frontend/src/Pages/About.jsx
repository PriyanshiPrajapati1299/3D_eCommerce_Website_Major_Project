import React from "react";
import { motion } from "framer-motion";
import About1 from '../Images/about-image1.jpg';
import About2 from '../Images/about-image2.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f0f8ff] p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2c3e50]">Empowering Businesses Everywhere</h1>
        <p className="text-[#2c3e50] text-lg mt-4">
          The ultimate platform to start, run, and grow your business.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">
            Empowering Over 1,700,000 Businesses Worldwide
          </h2>
          <p className="text-[#2c3e50] mb-6">
            We provide an all-in-one platform that helps you start, run, and grow your business with ease.
          </p>
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg shadow-md p-4 w-32 h-20 flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#2c3e50]">469</p>
              <p className="text-sm text-[#2c3e50]">Sales over time</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-32 h-20 flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#2c3e50]">425</p>
              <p className="text-sm text-[#2c3e50]">Orders</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={About1}
            alt="Store preview"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={About2}
            alt="Shop interior"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">Our Story</h2>
          <p className="text-[#2c3e50] mb-6">
            Over a decade ago, we started a store to sell products online. None of the available solutions at
            the time gave us the control we needed to be successful—so we built our own. Today, businesses
            of all sizes use our platform, whether they’re selling online, in retail stores, or on-the-go.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
