"use client";
import gsap from "gsap";
import { ReactNode, useEffect } from "react";

interface CirclePatternProps {
  circles?: number;
  gap?: number;
}

export const CirclePattern: React.FC<CirclePatternProps> = ({
  circles = 6,
  gap = 36,
}) => {
  useEffect(() => {
    const handleCursorMove = (e: MouseEvent) => {
      gsap.to("#circle_container", {
        x: (window.innerWidth - e.clientX) / 30,
        y: (window.innerWidth - e.clientY) / 30,
        duration: 0.75,
        ease: "power.in",
      });
    };
    window.addEventListener("mousemove", handleCursorMove);
    return () => window.removeEventListener("mousemove", handleCursorMove);
  }, []);
  return (
    <div
      id="circle_container"
      style={{
        width: `${(gap + (circles - 1) * 8) * 16}px`,
        zIndex: "-1",
      }}
      className="fixed top-0 right-0  h-screen overflow-visible  flex items-center justify-center "
    >
      {[...Array(circles)].map((_, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-white`}
          style={{
            width: `${(gap + index * 8) * 16}px`,
            height: `${(gap + index * 8) * 16}px`,
            opacity: `${(2 * circles - index) / 100}`,
          }}
        />
      ))}
    </div>
  );
};
