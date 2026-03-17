import React from 'react'
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const WhyChoose = () => {
  return (
   
      <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto border border-green-100/20 mt-20 px-6 py-16 text-center bg-gradient-to-b from-green-900/30 to-green rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-white">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-gray-300">
          {[
            {
              icon: "📈",
              title: "Real-Time Data",
              desc: "Stay ahead with up-to-the-minute stock market data and insights.",
            },
            {
              icon: "⚡",
              title: "Fast Execution",
              desc: "Execute trades swiftly with minimal delay and downtime.",
            },
            {
              icon: "🔒",
              title: "Secure Platform",
              desc: "Your investments and data are protected with top-tier security measures.",
            },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-5 p-8 bg-green-900/10  border border-green-500/20 rounded-xl shadow-md cursor-pointer transition-transform"
            >
              <div className="text-green-400 text-6xl">{icon}</div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="text-gray-300 max-w-xs">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      </>
  )
}

export default WhyChoose