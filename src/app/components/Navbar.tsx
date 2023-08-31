"use client";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import React from "react";
import { usePathname } from "next/navigation";

export const socialMedia = [
  {
    name: "Twitter",
    link: "https://twitter.com/Gsopow",
    icon: <FaTwitter />,
  },
  {
    name: "Github",
    link: "https://github.com/sopow",
    icon: <FaGithub />,
  },
  {
    name: "Discord",
    link: "https://discord.com/users/853394858895343636",
    icon: <FaDiscord />,
  },
];
function Navbar({}: {}) {
  const pathname = usePathname();
  return (
    <div className="xl:h-full xs:h-1/6 xl:w-1/12 xs:w-full xs:flex-row flex xl:flex-col items-center md:justify-center xs:justify-around">
      {pathname === "/" ? (
        socialMedia.map((socialMedia, index) => {
          return (
            <button
              key={index}
              onClick={() => window.open(socialMedia.link, "_blank")}
              className="xl:-rotate-90 xs:rotate-0 xs:w-1/6 flex justify-center h-1/6 items-center font-montserrat hover:opacity-50 transition-all duration-200 ease-in-out"
            >
              {socialMedia.icon}
            </button>
          );
        })
      ) : (
        <button
          onClick={() => window.location.replace("/")}
          className="xl:-rotate-90 xs:rotate-0 xs:w-1/6 flex justify-center h-1/6 items-center font-montserrat hover:opacity-50 transition-all duration-200 ease-in-out"
        >
          Home
        </button>
      )}
      <hr className="border-[0.75px] xs:w-1/5 xs:h-[1px] md:w-1/6 xl:h-1/6 xl:w-[1px] my-8 border-black changeable-border" />
      <div className="xl:-rotate-90 xs:rotate-0 xs:w-1/6 flex justify-center xl:h-1/6 items-center font-montserrat">
        <p className="flex">{new Date().getFullYear()}
        <span className="md:pl-4">
          {" "}
          ©
        </span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
