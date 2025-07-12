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
            text: `Hello! My name is Do Chi Thanh, a Fullstack Developer with a strong focus on React.js and Node.js. I enjoy building modern, responsive, and efficient web applications that solve real-world problems.`,
            delay: 0.2,
          },
          {
            text: `Over the past year, I’ve worked on various internal systems and client-facing products, including ERP platforms, onboarding apps, and real-time chat systems. These projects helped me strengthen both my frontend and backend skills.`,
            delay: 0.3,
          },
          {
            text: `I love clean code, scalable architecture, and bringing ideas to life through intuitive user interfaces. I'm also passionate about learning new tools, especially in the JavaScript ecosystem, and leveraging AI to boost productivity.`,
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
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "PostgreSQL",
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
        <div className="w-full max-w-xs aspect-square overflow-hidden rounded border-1 border-teal-300 group">
          <img
            src="/avartar.jpg"
            alt="Avatar"
            className="w-full h-full object-cover  group-hover:grayscale-0 transition duration-500"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
