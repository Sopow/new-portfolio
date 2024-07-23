"use client";
import React from "react";
import Transition from "../components/Transition";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="h-full w-full">
      <div className="flex lg:flex-row flex-col h-full w-full justify-between items-start py-20 px-4 md:p-20 overflow-auto">
        <div className="">
          <div className="flex h-full flex-col justify-end">
            <motion.h1
              className="text-black font-medium text-8xl md:text-[12rem] font-yipes"
              // bottom to top animate
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                delay: 0.35,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              About
            </motion.h1>
            <motion.div
              className="mt-4 [&>p]:pb-4 font-light text-3xl md:text-5xl max-w-2xl font-yipes"
              // bottom to top animate
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                delay: 0.55,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p>Hello, I{"'"}m Sopow. A web developer and designer.</p>
            </motion.div>
            <motion.div
              className="mt-8 [&>p]:pb-4 font-light text-md md:text-lg max-w-2xl font-montserrat"
              // bottom to top animate
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                delay: 0.75,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p>
                Over the past four years, I&apos;ve ventured into the world of
                web development, initially starting with JavaScript to create
                Discord bots. As I honed my skills, I transitioned to
                TypeScript, drawn to its ability to enhance code reliability and
                maintainability.
              </p>
              <p>
                Now, I&apos;ve become well-versed in TypeScript, employing it to
                craft sturdy applications with reduced error risk and improved
                documentation. My journey from Discord bot development led me to
                embrace the broader realm of web development, working with professional companies.
              </p>
              <p>
                With Next.js, I&apos;ve unlocked a platform to build modern,
                high-performance web apps using cutting-edge tools. My
                background in Discord bot scripting and my TypeScript
                proficiency uniquely inform my approach to developing
                interactive and dynamic web experiences.
              </p>
              <p>
                By merging my foundation in JavaScript-based Discord bot
                crafting with my current mastery of TypeScript and the Next.js
                framework, I&apos;ve evolved into a versatile web developer.
                This journey, sparked by Discord bots, has unfolded into an
                exciting pursuit of pushing boundaries in web development and
                delivering top-tier online experiences.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <motion.img
            src="/cdn/pfp.png"
            className="xl:w-[30rem] xl:h-[30rem] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Transition(About);
