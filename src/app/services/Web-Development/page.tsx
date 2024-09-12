"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// pages/portfolio/[project].tsx

import { NextPage } from "next";
import { useState } from "react";

// Define the type for category keys
type Category = "Nature Images" | "AI Images" | "Hand Draw";

// Define the images object type
const images: Record<Category, string[]> = {
  "Nature Images": [
    "https://loremflickr.com/200/200?random=1",
    "https://loremflickr.com/200/200?random=2",
  ],
  "AI Images": [
    "https://loremflickr.com/200/200?random=3",
    "https://loremflickr.com/200/200?random=4",
  ],
  "Hand Draw": [
    "https://loremflickr.com/200/200?random=5",
    "https://loremflickr.com/200/200?random=6",
  ],
};

const PortfolioPage: NextPage = () => {
  // Set the state with the defined Category type
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("AI Images");

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="max-w-7xl m-auto mt-16 mb-36">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-5xl md:text-[10vw] font-serif font-bold leading-none">
            <h1 className="mb-2">Web Development</h1>
            <h1 className="md:ml-8">/ Agency</h1>
          </div>
          <div className="mt-4 md:mt-0 text-sm md:text-md">
            <span className="block md:mr-6">Editing makes a difference.</span>
          </div>
        </div>
        <div className="mt-6 text-md font-light">
          <p>We are specialized in short / long Video Editing.</p>
        </div>
      </div>

      <div className="bg-neutral-900 rounded-lg p-10 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl ">
          {/* Left Section */}
          <div className="col-span-1 flex flex-col justify-between">
            <div className="space-y-4">
              {images[selectedCategory].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Sample ${index + 1}`}
                  className="rounded-2xl object-cover w-full max-h-72 h-full"
                />
              ))}
            </div>
            <div className="mt-6 text-lg font-light">
              <p>
                Whether you're an emerging artist or an established creator, we
                offer tailored solutions that amplify your reach.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-neutral-200 underline text-lg font-medium"
              >
                Explore All &rarr;
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="col-span-1 grid grid-cols-1 gap-6">
            {images[selectedCategory].map((src, index) => (
              <img
                key={index + images[selectedCategory].length}
                src={src}
                alt={`Sample ${index + 1}`}
                className="rounded-2xl object-cover w-full max-h-56 h-full"
              />
            ))}
          </div>

          {/* Right Section - Sidebar */}
          <div className="col-span-1 flex flex-col justify-center">
            <div className="text-right">
              <ul className="space-y-2 text-lg font-light">
                {Object.keys(images).map((category) => (
                  <li key={category}>
                    <button
                      className={`${
                        selectedCategory === category
                          ? "text-neutral-200 font-semibold"
                          : "text-neutral-300"
                      } focus:outline-none`}
                      onClick={() => setSelectedCategory(category as Category)}
                    >
                      {category} ({images[category as Category].length})
                    </button>
                  </li>
                ))}
              </ul>
              <button className="mt-10 inline-block text-sm font-medium text-black bg-white py-2 px-4 border border-black rounded-full">
                Scroll Down ⬇
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
