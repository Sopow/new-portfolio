"use client";
import React from "react";
import Transition from "../components/Transition";
import { motion } from "framer-motion";
import { socialMedia } from "../components/Navbar";

function Contact() {
  const applyBlackBackground = () => {
    document
      .getElementsByClassName("changeable-bg")[0]
      .classList.add("!bg-[#1a1818]");
    document
      .getElementsByClassName("changeable-bg")[0]
      .classList.add("!text-white");
    document
      .getElementsByClassName("changeable-border")[0]
      .classList.add("!border-white");
  };

  React.useEffect(() => {
    applyBlackBackground();
  }, []);
  return (
    <div className="h-full w-full">
      <div className="flex flex-row h-full w-full justify-between items-start p-20 overflow-auto">
        <div className="flex h-full flex-col justify-center">
          <motion.h1
            className="text-white font-medium text-[12rem] font-yipes"
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
            Hello.
          </motion.h1>
          <motion.div
            className="mt-4 [&>p]:pb-4 font-light text-xl max-w-2xl font-montserrat text-white"
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
            <p>
              Need a beautiful, well-structured website that you can own ? Get
              in touch with me.
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@sopow.fr"
                className="underline hover:opacity-50 transition-all duration-200 ease-in-out"
              >
                contact@sopow.fr
              </a>
            </p>
            <p>
              On the internet :{" "}
              {socialMedia
                .filter((socialMedia) => socialMedia.name !== "Github")
                .map((socialMedia, index) => {
                  return (
                    <a
                      key={index}
                      href={socialMedia.link}
                      target="_blank"
                      className="underline hover:opacity-50 transition-all duration-200 ease-in-out"
                    >
                      {socialMedia.name}
                    </a>
                  ) as any;
                })
                .reduce((prev, curr) => [prev, " / ", curr])}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Transition(Contact);
