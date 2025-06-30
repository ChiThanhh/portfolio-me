import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.p
        className="text-teal-300 font-mono text-lg mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        Brittany Chiang.
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        className="mt-8 text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at
        <a
          href="https://upstatement.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 ml-1 hover:underline"
        >
          Upstatement.
        </a>
      </motion.p>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        <a
          href="#course"
          className="px-7 py-3.5 border border-teal-300 text-teal-300 font-mono rounded hover:bg-teal-300 hover:text-[#0b192f] transition text-base duration-500"
        >
          Check out my course!
        </a>
      </motion.div>
    </div>
  );
};

export default Introduction;
