

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ComingSoon from "./ComingSoon";
import FeatureTags from "./FeatureTags";
import WhyChoose from "./WhyChoose";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  
  return (
    <div className="relative min-h-screen text-white py-10">

      {/* Coming Soon Banner */}
      
      <ComingSoon/>

      {/* Background Image */}
      <Image
        src="/stock.jpg"
        alt="Stock Market"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="relative  z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          India’s Smartest <br />
          <span className="text-green-400">Discount Stock Broker</span>
        </h1>

        <p className="text-gray-300 max-w-xl mb-8">
          Compare brokers, analyze markets, and make smarter investment decisions.
          Built for modern traders.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition"
          >
            Get Early Access
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-gray-600 hover:border-green-400 rounded-lg transition"
          >
            Learn More
          </motion.button>
        </div>

        {/* Feature tags */}
        <FeatureTags/>

       
      </motion.div>

      <WhyChoose/>

      
    </div>
  );
}