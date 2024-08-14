"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { usePathname } from "next/navigation";

interface TransitionContainerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: ReactNode | Array<ReactNode>;
  //   baseRoute: string;
}

const PAGE_CHANGE_DURATION = 1000;

export const TransitionContainer: React.FC<TransitionContainerProps> = ({
  id,
  className,
  children,
  ...props
}) => {
  const isScrolling = useRef(false);
  const [section, setSection] = useState(0);

  const pathname = usePathname();

  const childrenArray = Array.isArray(children) ? children : [children];

  const PAGE_SECTIONS = childrenArray.length;
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;
      else {
        if (e.deltaY <= 10 && e.deltaY >= -10) return; //To handle minor scrolling
        isScrolling.current = true;
        let scrollingDown = false;
        if (e.deltaY > 0) {
          scrollingDown = true;
        }
        if (scrollingDown) {
          setSection((prev) => Math.min(PAGE_SECTIONS - 1, prev + 1));
        } else {
          setSection((prev) => Math.max(0, prev - 1));
        }
        setTimeout(() => {
          isScrolling.current = false;
        }, PAGE_CHANGE_DURATION);
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section
      {...props}
      id={id}
      style={{
        backgroundColor: pathname === "/" ? "transparent" : "#030b17",
      }}
      className={cn(
        className,
        "h-screen transition-colors duration-150 ease-in overflow-hidden"
      )}
    >
      <div
        style={{
          transition: "transform 0ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
          transform: `translateY(-${section * 100}vh)`,
          transitionDuration: `${Math.round(0.75 * PAGE_CHANGE_DURATION)}ms`,
        }}
        className="h-max"
      >
        {childrenArray}
      </div>
    </section>
  );
};
