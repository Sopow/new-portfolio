"use client";

import React from "react";
import Transition from "./components/Transition";
import { motion } from "framer-motion";

function Home() {
  const list = ["work", "about", "contact"];

  return (
    <div className="h-full w-full">
      <div className="flex flex-col xl:flex-row h-full w-full justify-evenly xl:px-0 xl:items-center items-start px-8 md:px-16">
        <div className="xl:h-3/6 h-fit xl:mb-4 mt-4">
          <div className="flex xl:h-full h-fit flex-col xl:justify-center justify-start">
            <motion.h1
              className="font-montserrat text-black font-medium text-xl"
              // bottom to top animate
              variants={{
                hidden: { opacity: 0, y: 15 },
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
              Sopow
            </motion.h1>
            <motion.div
              className="mt-4 [&>p]:pb-4 [&>p]:max-w-xs font-light text-sm"
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
              <p>Web Developer / Designer / Student based in France</p>
              <p>
                Presently engaged as a web developer operating on a freelance
                basis with a less than full-time commitment.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          {list.map((item, index) => (
            <motion.a
              key={index}
              className="text-black z-30 hover-target font-medium font-yipes text-5xl md:text-8xl xl:text-[8.2rem] leading-[1.2] line hover:font-yipes-italic hover:text-gray-500 hover:translate-x-1 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => window.location.replace(`/${item}`)}
              // blur animate
              initial={{ filter: "blur(10px)" }}
              animate={{ filter: "blur(0px)" }}
              exit={{ filter: "blur(10px)" }}
              transition={{
                delay: 0.35,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {item.toUpperCase()}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transition(Home);
