import React, { useState } from 'react';
import Introduction from './Introduction';
import About from './About';
import Experience from './Experience';
import FeaturedProjects from './FeaturedProjects';
import OtherProjects from './OtherProjects';
import Contact from './Contact';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';
import {
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  CodepenIcon,
  Linkedin,
} from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com', icon: <GithubIcon size={22} /> },
  { href: 'https://instagram.com', icon: <InstagramIcon size={22} /> },
  { href: 'https://twitter.com', icon: <TwitterIcon size={22} /> },
  { href: 'https://linkedin.com', icon: <Linkedin size={22} /> },
  { href: 'https://codepen.io', icon: <CodepenIcon size={22} /> },
];

const experienceData = [
  {
      company: "Upstatement",
      position: "Lead Engineer",
      companyUrl: "https://upstatement.com",
      time: "May 2018 — Present",
      responsibilities: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
    },
    {
      company: "Apple",
      position: "Frontend Developer",
      companyUrl: "https://apple.com",
      time: "Jan 2017 — Apr 2018",
      responsibilities: [
        "Worked on Apple.com redesign with focus on a focus on performance and accessibility",
        "Built internal tools for localization and content management",
        "Collaborated with cross-functional teams to deploy weekly updates",
      ],
    },
    {
      company: "Scout Studio",
      position: "UI/UX Designer & Developer",
      companyUrl: "#",
      time: "2016 — 2017",
      responsibilities: [
        "Designed and developed branding and websites for student-run initiatives",
        "Mentored junior members and led small design sprints",
      ],
    },
    {
      company: "Starry",
      position: "Software Engineer Intern",
      companyUrl: "#",
      time: "Summer 2015",
      responsibilities: [
        "Built internal dashboards to monitor network traffic",
        "Automated reporting tools for engineering team",
      ],
    },
    {
      company: "MullenLowe",
      position: "Creative Developer",
      companyUrl: "#",
      time: "2014 — 2015",
      responsibilities: [
        "Helped launch several marketing sites for clients like JetBlue and Royal Caribbean",
        "Worked closely with designers to create smooth UI animations",
      ],
    },
  ];


const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="relative flex justify-center items-center text-start text-white min-h-screen ">
      <section className="max-w-screen-xl pt-40 w-full text-left ">
        <Introduction />
        <About />
        <Experience
          data={experienceData}
          experienceData={experienceData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
        <Footer />
      </section>
      <SocialSidebar socialLinks={socialLinks} />
      <EmailSidebar />
    </main>
  );
};

export default Main;