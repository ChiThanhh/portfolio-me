import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay },
  },
});

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      id="about"
      className="mt-50 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10"
    >
      {/* Left content */}
      <div className="md:w-2/3">
        <motion.div
          variants={fadeInUp(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center mb-12"
        >
          <h2 className="text-teal-300 text-2xl font-mono whitespace-nowrap">
            01. <span className="text-3xl font-bold text-white">About Me</span>
          </h2>
          <div className="flex-grow h-px bg-[#29497a] ml-6"></div>
        </motion.div>

        {[
          {
            text: `Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012 when
            I decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!`,
            delay: 0.2,
          },
          {
            text: `Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.`,
            delay: 0.3,
          },
          {
            text: `I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.`,
            delay: 0.4,
          },
          {
            text: `Here are a few technologies I’ve been working with recently:`,
            delay: 0.5,
          },
        ].map((item, index) => (
          <motion.p
            key={index}
            className="text-gray-400 leading-relaxed mb-4 text-sm"
            variants={fadeInUp(item.delay)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {item.text}
          </motion.p>
        ))}

        <motion.ul
          className="grid grid-cols-2 gap-1 mt-2 font-mono text-xs text-gray-400"
          variants={fadeInUp(0.6)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Eleventy",
            "Node.js",
            "WordPress",
          ].map((tech, index) => (
            <li
              key={index}
              className="before:content-['▹'] before:text-teal-300 before:mr-2"
            >
              {tech}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Right Avatar */}
      <motion.div
        className="md:w-1/3 flex justify-center"
        variants={fadeInUp(0.7)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full max-w-xs aspect-square overflow-hidden rounded border-2 border-teal-300 group">
          <img
            src="/about-avatar.png"
            alt="Avatar"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
