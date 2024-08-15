"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface TransitionContainerProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: ReactNode | Array<ReactNode>;
  baseRoute: string;
}

const PAGE_CHANGE_DURATION = 1000;

export const TransitionContainer: React.FC<TransitionContainerProps> = ({
  id,
  className,
  children,
  baseRoute = "/",
  ...props
}) => {
  const isScrolling = useRef(false);
  const [section, setSection] = useState(0);

  const pathname = usePathname();
  const isAtBaseRoute = pathname === baseRoute;

  const router = useRouter();

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
        backgroundColor: isAtBaseRoute ? "transparent" : "#030b17",
      }}
      className={cn(
        className,
        "relative h-screen overflow-hidden transition-colors duration-300 ease-in",
      )}
    >
      {!isAtBaseRoute && (
        <button
          onClick={() => router.back()}
          className="absolute left-10 top-28 z-10 overflow-hidden"
        >
          <Image
            width={0}
            height={0}
            src="/icons/left-arrow.svg"
            className={cn(
              "w-14",
              isAtBaseRoute ? "animate-slide-out" : "animate-slide-in",
            )}
            alt="_go_back"
          />
        </button>
      )}
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
