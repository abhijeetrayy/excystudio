"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// pages/portfolio/[project].tsx

import { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

const PortfolioPage: NextPage = () => {
  // Set the state with the defined Category type
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
      description:
        "Creating stunning video content for brands and individuals.",
    },
  ];

  return (
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
};

export default PortfolioPage;
