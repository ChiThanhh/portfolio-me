import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-40 min-h-[500px] px-6 flex flex-col items-center justify-center text-center"
    >
      <p className="text-teal-300 font-mono text-sm mb-4">04. What’s Next?</p>
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">
        Get In Touch
      </h2>
      <p className="max-w-xl text-slate-400 mb-10">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        href="mailto:your-email@example.com"
        className="border text-sm font-mono text-teal-300 px-6 border-teal-300
        py-3 rounded hover:bg-teal-300 hover:text-black transition duration-500"
      >
        Say Hello
      </a>
    </motion.div>
  );
};

export default Contact;