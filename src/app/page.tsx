"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  { title: "Software Engineer", company: "Tech Co", year: "2020 - Present" },
  { title: "Web Developer", company: "Web Solutions", year: "2018 - 2020" },
  { title: "Junior Developer", company: "Startup Inc", year: "2016 - 2018" },
  { title: "Intern", company: "Tech Startup", year: "2015 - 2016" },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    year: "2014 - 2015",
  },
];

const ScrollableSplitLayout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (leftSideRef.current) {
      const maxScroll = 50; // Maximum pixels to move down
      const scrollRange = 500; // Scroll range to achieve max movement
      const movement = Math.min((scrollY / scrollRange) * maxScroll, maxScroll);
      leftSideRef.current.style.transform = `translateY(${movement}px)`;
    }
  }, [scrollY]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row min-h-screen my-16"
    >
      {/* Left side - sticky with scroll effect */}
      <div
        ref={leftSideRef}
        className=" text-white p-6 md:sticky md:top-0 md:left-0 h-fit md:w-1/3 z-10 transition-transform duration-100"
      >
        <h1 className="text-4xl font-bold mb-4 ">EXPERIENCE</h1>
        <p className="text-lg text-neutral-300">
          Scroll to explore my professional journey
        </p>
      </div>

      {/* Right side - scrollable */}
      <div className="md:w-2/3 p-6 flex-1">
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 p-6 bg-neutral-800 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-semibold mb-2 ">{exp.title}</h3>
              <p className="text-xl mb-2 text-neutral-300">{exp.company}</p>
              <p className="text-sm text-neutral-400">{exp.year}</p>
              <p className="mt-4 text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Graphic-Design",
    image: "/webDesign.png",
    link: "/services/Graphic-Design",
    description:
      "Crafting beautiful and functional websites that provide the best user experience.",
  },
  {
    title: "Web Development",
    image: "/appDev.jpg",
    link: "/services/Web-Development",
    description:
      "Building powerful web applications with top-notch performance.",
  },
  {
    title: "Social Media Management",
    image: "/SocialMediaManagement.webp",
    link: "/services/Social-Media-Management",
    description:
      "Managing social media platforms to increase engagement and visibility.",
  },
  {
    title: "Video Editing",
    image: "/videoEditing.jpg",
    link: "/services/Video-Editing",
    description: "Creating stunning video content for brands and individuals.",
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <Hero />
      <Services />
      <Expertise />
      <ScrollableSplitLayout />
      <ScrollableSplitLayout />
      <CallToAction />
    </div>
  );
};

const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-indigo-900">
    <div className="text-center px-4">
      <motion.p
        className="text-xl text-neutral-200 mb-8 inline-flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        <span>
          We are available on{" "}
          <Link
            href=""
            className="underline hover:text-white transition-colors"
          >
            Upwork
          </Link>
        </span>
      </motion.p>
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-9"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Provide Excellence to Your Idea
      </motion.h1>
      <motion.button
        className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-neutral-100 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>
  </section>
);

const Services: React.FC = () => (
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-neutral-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={service.link}>
              <div className="group overflow-hidden h-72">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-2 text-blue-400">
                  {service.title}
                </h3>
                <p className="text-neutral-300">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Expertise: React.FC = () => (
  <section className="py-20 px-4 bg-neutral-800">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        Our Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Design", "Development", "Innovation"].map((item, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">{item}</h3>
            <p className="text-neutral-300">
              Expertise in {item.toLowerCase()} services providing efficient and
              modern solutions.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CallToAction: React.FC = () => (
  <section className="py-20 px-4 bg-purple-800 text-white">
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        Ready to bring your ideas to life?
      </h2>
      <p className="text-xl mb-8">Let's create something amazing together.</p>
      <motion.button
        className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-neutral-100 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
      </motion.button>
    </motion.div>
  </section>
);

export default Home;
