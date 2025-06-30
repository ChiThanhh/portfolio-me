import React from "react";
import { Folder, GithubIcon, ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const OtherProjects = () => {
  const projects = [
    {
      title: "Integrating Algolia Search with WordPress Multisite",
      desc: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      tags: ["Algolia", "WordPress", "PHP"],
    },
    {
      title: "Time to Have More Fun",
      desc: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
      tags: ["Next.js", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Building a Headless Mobile App CMS From Scratch",
      desc: "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
      tags: ["Node", "Express", "Firebase", "Vue"],
    },
    {
      title: "OctoProfile",
      desc: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
      tags: ["Next.js", "Chart.js", "GitHub API"],
    },
    {
      title: "Google Keep Clone",
      desc: "A simple Google Keep clone built with Vue and Firebase.",
      tags: ["Vue", "Firebase"],
    },
    {
      title: "Apple Music Embeddable Web Player Widget",
      desc: (
        <>
          Embeddable web player widget for Apple Music that lets users log in and
          listen to full song playback in the browser leveraging{" "}
          <span className="text-teal-400">MusicKit.js</span>. Read more about this
          project on <span className="text-teal-400">9to5Mac</span>.
        </>
      ),
      tags: ["MusicKit.js", "JS", "SCSS"],
    },
  ];

  return (
    <div className="mt-40 min-h-[500px] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-white text-2xl font-bold text-center">
        Other Noteworthy Projects
      </h2>
      <p className="text-center text-teal-400 mt-2 mb-12">
        <a href="#" className="hover:underline">
          view the archive
        </a>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.18 }}
            viewport={{ once: true }}
            className="bg-[#112240] p-6 rounded-md hover:-translate-y-1 transition transform duration-500"
          >
            <div className="flex justify-between items-start mb-4">
              <Folder />
              <div className="flex space-x-2 text-gray-400">
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
            <h3 className="text-white font-bold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="text-sm border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-black transition duration-500">
          Show More
        </button>
      </div>
    </div>
  );
};

export default OtherProjects;
