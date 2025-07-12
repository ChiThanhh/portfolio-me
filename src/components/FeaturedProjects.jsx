import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import img2 from "../assets/img3.jpg";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.3, 
      ease: "easeOut",
    },
  }),
};

const FeaturedProjects = () => {
const projects = [
  {
    title: "Internal ERP System",
    description:
      "Built an internal ERP system to manage production, inventory, HR, and workflow using React.js, Node.js, and PostgreSQL. Integrated AWS S3 for secure file storage and implemented role-based access.",
    tech: ["React.js", "Node.js", "PostgreSQL", "AWS S3", "MUI"],
    imageAlign: "left",
  },
  {
    title: "Internal Chat App",
    description:
      "Developed a real-time company chat application using Socket.IO for communication and React.js for UI. Enhanced team collaboration and internal transparency across departments.",
    tech: ["React.js", "Node.js", "Socket.IO", "PostgreSQL", "MUI"],
    imageAlign: "right",
  },
  {
    title: "Credit Card Onboarding Web App",
    description:
      "Created a partner-facing web app for credit card application. Integrated TrustingSocial's API for face and ID verification, and built responsive UI with Tailwind CSS.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "TrustingSocial API"],
    imageAlign: "left",
  },
];

  return (
    <div id="work" className="mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-3">
        <h2 className="text-teal-300 text-2xl font-mono whitespace-nowrap">
          03.{" "}
          <span className="text-3xl font-bold text-white">
            Some Things I’ve Built
          </span>
        </h2>
        <div className="flex-grow h-px bg-[#29497a] ml-6"></div>
      </div>

      {projects.map((project, idx) => {
        const isLeft = project.imageAlign === "left";
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

        return (
          <motion.div
            key={idx}
            ref={ref}
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={idx}
            className="relative grid md:grid-cols-12 gap-6 items-center group py-12"
          >
            {/* Mobile view */}
            <div className="md:hidden relative w-full rounded overflow-hidden">
              <img
                src={img2}
                alt={project.title}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[#0b192f]/80 p-5 flex flex-col justify-center">
                <p className="text-teal-300 font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-white text-base font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 text-sm font-mono text-gray-500 mb-4">
                  {project.tech.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <div className="flex gap-5 text-gray-400">
                  <a   target="_blank" rel="noreferrer">
                    <GithubIcon
                      size={20}
                      className="hover:text-teal-300 transition"
                    />
                  </a>
                  <a
                     
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLinkIcon
                      size={20}
                      className="hover:text-teal-300 transition"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop view */}
            {isLeft ? (
              <>
                <div className="hidden md:block md:col-span-7 relative">
                  <img
                    src={img2}
                    alt={project.title}
                    className="w-full h-full object-cover rounded grayscale group-hover:grayscale-0 transition duration-300"
                  />
                </div>
                <div className="hidden md:block md:col-span-5 md:col-start-8 text-right z-10">
                  <div className="mb-40">
                    <p className="text-teal-300 font-mono text-sm mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-white text-xl font-bold mb-4">
                      {project.title}
                    </h3>
                  </div>
                  <p className="bg-[#11213f] absolute top-1/2 right-0 -translate-y-1/2 text-gray-300 text-sm p-5 w-[520px] rounded shadow-md mb-4">
                    {project.description}
                  </p>
                  <ul className="flex justify-end flex-wrap gap-3 text-sm font-mono text-gray-500 mb-4">
                    {project.tech.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                  <div className="flex justify-end gap-5 text-gray-400">
                    <a
                       
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon
                        size={20}
                        className="hover:text-teal-300 transition"
                      />
                    </a>
                    <a
                       
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLinkIcon
                        size={20}
                        className="hover:text-teal-300 transition"
                      />
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="hidden md:block md:col-span-5 text-left z-10">
                  <div className="mb-50">
                    <p className="text-teal-300 font-mono text-sm mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-white text-xl font-bold mb-4">
                      {project.title}
                    </h3>
                  </div>
                  <p className="bg-[#11213f] absolute top-1/2 left-0 -translate-y-1/2 w-[520px] text-gray-300 text-sm p-5 rounded shadow-md mb-4">
                    {project.description}
                  </p>
                  <ul className="flex justify-start flex-wrap gap-3 text-sm font-mono text-gray-500 mb-4">
                    {project.tech.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                  <div className="flex justify-start gap-5 text-gray-400">
                    <a
                       
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon
                        size={20}
                        className="hover:text-teal-300 transition"
                      />
                    </a>
                    <a
                       
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLinkIcon
                        size={20}
                        className="hover:text-teal-300 transition"
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden md:block md:col-span-7 relative">
                  <img
                    src={img2}
                    alt={project.title}
                    className="w-full h-full object-cover rounded grayscale group-hover:grayscale-0 transition duration-300"
                  />
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
