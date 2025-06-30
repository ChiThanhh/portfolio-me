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
      title: "Halcyon Theme",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      imageAlign: "left",
    },
    {
      title: "Spotify Profile",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
      imageAlign: "right",
    },
    {
      title: "Build a Spotify Connected App",
      description:
        "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.",
      tech: ["React", "Express", "Spotify API", "Styled Components"],
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
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <GithubIcon
                      size={20}
                      className="hover:text-teal-300 transition"
                    />
                  </a>
                  <a
                    href="https://external-link.com"
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
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon
                        size={20}
                        className="hover:text-teal-300 transition"
                      />
                    </a>
                    <a
                      href="https://external-link.com"
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
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon
                        size={20}
                        className="hover:text-teal-300 transition"
                      />
                    </a>
                    <a
                      href="https://external-link.com"
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
