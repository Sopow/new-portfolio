"use client";
import React from "react";
import Transition from "../components/Transition";
import { motion } from "framer-motion";

function Work() {
  const list = [
    {
      name: "Powlang Language",
      url: 'powlang.vercel.app',
      category: 'website',
      new: true
    },
    {
      name: "La Casa Del Spa",
      url: "lacasadelspa.fr",
      category: "website",
      new: false,
    },
    {
      name: "The Green Suits",
      url: "thegreensuits.fr",
      category: "website",
      new: false,
    },
    {
      name: "Anime Mania",
      url: "anime-mania-self.vercel.app",
      category: "website",
      new: false,
    },
    {
      name: "Jolyne",
      url: "www.jolyne.moe",
      category: "website",
      new: false,
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

    const selectionStyle = `
      ::selection {
        background: #ece7e1;
        color: #1a1818;
      }

      .toChange-bd {
                  background-color: #ece7e1 !important;
      }
      .toChange-bg {
            border-color: #ece7e1 !important;
            stroke: #1a1818 !important;
      }

      #bg-change-element {
background: radial-gradient(circle, rgba(20, 24, 74, 0.8) 0%, rgba(255, 255, 255, 0) 80%);
}
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = selectionStyle;

    document.head.appendChild(styleElement);
  };

  React.useEffect(() => {
    applyBlackBackground();
  }, []);
  return (
    <div className="h-full w-full">
      <div className="flex flex-col xl:flex-row h-full w-full justify-evenly xl:items-center items-start xl:px-0 px-12">
        <div className="h-3/6">
          <div className="flex h-full flex-col justify-center">
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
                evolving. I’m still learning and gaining new skills every day.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="h-3/6">
          <div className="overflow-auto flex flex-col no-scrollbar h-[80vh] xl:py-12 pb-80 pt-8 xl:pb-0">
            {list
              .sort((a, b) =>
                a.name === b.name ? 0 : a.name < b.name ? -1 : 1
              )
              .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
              .map((item, index) => (
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
                    className="flex font-medium font-yipes text-4xl md:text-6xl leading-[1.3] line hover:font-yipes-italic hover:translate-x-1 transition-all duration-300 ease-in-out cursor-pointer"
                    onClick={() => window.open(`https://${item.url}`)}
                  >
                    {item.name.toUpperCase()}
                  </div>
                  <div className="flex flex-row justify-start items-center mb-8 gap-4 cursor-default">
                    <p className="md:text-sm text-xs font-montserrat !cursor-text">
                      - {item.category.toUpperCase()}
                    </p>
                    {item.new && (
                      <div className="!cursor-text bg-[#ece7e1] text-[#1a1818] rounded-[20px] self-center px-2 text-xs font-semibold leading-[20px]">
                        NEW
                      </div>
                    )}
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
