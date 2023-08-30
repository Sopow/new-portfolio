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
    <div className="h-full w-1/12 flex flex-col items-center justify-center">
      {pathname === "/" ? (
        socialMedia.map((socialMedia, index) => {
          return (
            <button
              key={index}
              onClick={() => window.open(socialMedia.link, "_blank")}
              className="-rotate-90 flex justify-center h-1/6 items-center font-montserrat hover:opacity-50 transition-all duration-200 ease-in-out"
            >
              {socialMedia.icon}
            </button>
          );
        })
      ) : (
        <button
          onClick={() => window.location.replace("/")}
          className="-rotate-90 flex justify-center h-1/6 items-center font-montserrat hover:opacity-50 transition-all duration-200 ease-in-out"
        >
          Home
        </button>
      )}
      <hr className="border-[0.75px] h-1/6 my-8 border-black changeable-border" />
      <div className="flex justify-end h-1/5 items-center font-montserrat -rotate-90">
        <>{new Date().getFullYear()} ©</>
      </div>
    </div>
  );
}

export default Navbar;
