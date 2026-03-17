
import React from 'react'
import { motion } from "framer-motion";

const ComingSoon = () => {
   
  return (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed    animate-bounce top-16 left-1/2 -translate-x-1/2 z-50 md:px-6 sm:px-4 px-2 py-2 rounded-full bg-green-500 text-white font-semibold shadow-lg"
      >
        🚀 We’re launching soon! Discount Stock Broker
      </motion.div>
  )
}

export default ComingSoon