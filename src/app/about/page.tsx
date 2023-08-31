"use client";
import React from "react";
import Transition from "../components/Transition";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="h-full w-full">
      <div className="flex lg:flex-row xs:flex-col h-full w-full justify-between items-start p-20 overflow-auto">
        <div className="">
          <div className="flex h-full flex-col justify-end">
            <motion.h1
              className="text-black font-medium xs:text-8xl md:text-[12rem] font-yipes"
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
              className="mt-4 [&>p]:pb-4 font-light xs:text-3xl md:text-5xl max-w-2xl font-yipes"
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
              className="mt-8 [&>p]:pb-4 font-light xs:text-md md:text-lg max-w-2xl font-montserrat"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sapiente minima debitis neque excepturi voluptates corporis
                expedita at itaque a repellendus, provident, optio, maiores eum
                deserunt facere nisi saepe. Rem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sapiente minima debitis neque excepturi voluptates corporis
                expedita at itaque a repellendus, provident, optio, maiores eum
                deserunt facere nisi saepe. Rem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sapiente minima debitis neque excepturi voluptates corporis
                expedita at itaque a repellendus, provident, optio, maiores eum
                deserunt facere nisi saepe. Rem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sapiente minima debitis neque excepturi voluptates corporis
                expedita at itaque a repellendus, provident, optio, maiores eum
                deserunt facere nisi saepe. Rem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sapiente minima debitis neque excepturi voluptates corporis
                expedita at itaque a repellendus, provident, optio, maiores eum
                deserunt facere nisi saepe. Rem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sapiente minima debitis neque excepturi voluptates corporis
                expedita at itaque a repellendus, provident, optio, maiores eum
                deserunt facere nisi saepe. Rem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sapiente minima debitis neque excepturi voluptates corporis
                expedita at itaque a repellendus, provident, optio, maiores eum
                deserunt facere nisi saepe. Rem!
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <motion.img
            src="https://cdn.discordapp.com/avatars/853394858895343636/4d9a6231458bfbe98910c7632341de46.webp?size=2048"
            className="xl:w-[25rem] xl:h-[25rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Transition(About);
