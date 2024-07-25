"use client";
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 1000, y: 500 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [magnetic, setMagnetic] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile devices are <= 768px
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (magnetic) {
      const distance = {
        x: (magnetic.x - e.clientX) / 10,
        y: (magnetic.y - e.clientY) / 10,
      };
      setPosition({ x: e.clientX + distance.x, y: e.clientY + distance.y });
    } else {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    setVisible(true);
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setMagnetic({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setMagnetic(null);
    setHovered(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    const hoverTargets = document.querySelectorAll(".hover-target, button, a");
    hoverTargets.forEach((el: any) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((el: any) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if(isMobile) return <></>
  return (
    <>
      <div
        className={`fixed ${visible ? 'block' : 'hidden'}  toChange-bd top-0 left-0 w-4 h-4 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ${
          hovered ? "bg-transparent" : "bg-black scale-100"
        }`}
        style={{ top: position.y, left: position.x }}
      />
      <div
        className={`fixed ${visible ? 'block' : 'hidden'} top-0 left-0 w-12 h-12 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ${
          hovered ? "border-black bg-gray-200 !scale-150 toChange-bd" : "border-black  toChange-bg scale-100"
        }`}
        style={{
          top: position.y,
          left: position.x,
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      >
        {hovered && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6  toChange-bg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
      <div
        id="bg-change-element"
        className={`fixed ${visible ? 'block' : 'hidden'} top-0 left-0 w-[40vw] h-[40vw] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-1`}
        style={{ top: position.y, left: position.x, transition: "none" }}
      />
    </>
  );
};

export default CustomCursor;
