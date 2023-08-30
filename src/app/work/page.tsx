"use client";
import React from "react";
import Transition from "../components/Transition";
import { motion } from "framer-motion";

function Work() {
  const list = [
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
    {
      name: "Test Website",
      url: "test-website",
      category: "Website",
    },
  ];

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
      <div className="flex flex-row h-full w-full justify-evenly items-center">
        <div className="h-3/6 mb-4">
          <div className="flex h-full flex-col justify-end">
            <motion.h1
              className="font-montserrat font-medium text-xl"
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
              Work
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
              <p>
                This is a showcase of my best work in a variety of fields
                including Graphic and Web Design, Development and more.
              </p>
              <p>
                The world of digital design and development is constantly
                evolving and so has my role over the last 15 years. I’m still
                learning and gaining new skills every day.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="h-3/6">
          <div className="overflow-auto flex flex-col no-scrollbar h-[80vh] py-12">
            {list.map((item, index) => (
              <motion.button
                key={index}
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
                <div
                  key={index}
                  className="font-medium font-yipes text-6xl leading-[1.3] line hover:font-yipes-italic hover:translate-x-1 transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => window.location.replace(`/work/${item.url}`)}
                >
                  {item.name.toUpperCase()} - {index + 1}
                </div>
                <div className="flex flex-row justify-between items-center mb-8">
                  <p className="text-sm font-montserrat">
                    - {item.category.toUpperCase()}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transition(Work);
