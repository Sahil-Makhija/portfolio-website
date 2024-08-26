"use client";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface CirclePatternProps {
  circles?: number;
  rootRoute?: string;
}

export const CirclePattern: React.FC<CirclePatternProps> = ({
  circles = 6,
  rootRoute,
}) => {
  const pathname = usePathname();
  const lgView = useMediaQuery("(min-width:800px)");
  const widthRate = lgView ? 16 : 10;
  const GAP = 36;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (pathname !== rootRoute) return;
    const handleCursorMove = (e: MouseEvent) => {
      gsap.to("#circle_container", {
        x: (window.innerWidth - e.clientX) / 20,
        y: (window.innerWidth - e.clientY) / 20,
        duration: 0.25,
        ease: "power.in",
      });
    };
    window.addEventListener("mousemove", handleCursorMove);
    return () => window.removeEventListener("mousemove", handleCursorMove);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div
      id="circle_container"
      style={{
        width: `${(GAP + (circles - 1) * 8) * 16}px`,
        zIndex: "-1",
      }}
      className="fixed left-0 top-0 flex h-screen max-w-full items-center justify-center overflow-visible sm:left-1/4 md:left-[40vw]"
    >
      {[...Array(circles)].map((_, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-white`}
          style={{
            width: `${(GAP + index * 8) * widthRate}px`,
            height: `${(GAP + index * 8) * widthRate}px`,
            opacity: `${(2 * circles - index) / 100}`,
          }}
        />
      ))}
    </div>
  );
};
