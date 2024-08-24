"use client";
import React, {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { PageIndicator } from "./page-indicator";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { LeftArrow } from "@/assets";

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
  baseRoute,
  ...props
}) => {
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const pathname = usePathname();
  const atBaseRoute = pathname === baseRoute;

  const scrolled = useScrollTop();

  const [section, setSection] = useState(0);
  const containerStyle: CSSProperties = atBaseRoute
    ? {
        transition: "transform 0ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
        transform: `translateY(-${section * 100}vh)`,
        transitionDuration: isScrolling.current
          ? `${Math.round(0.75 * PAGE_CHANGE_DURATION)}ms`
          : "0ms",
      }
    : {
        transition: "none",
        transform: "translateY(0)",
      };

  const router = useRouter();

  const childrenArray = Array.isArray(children) ? children : [children];
  const PAGE_SECTIONS = childrenArray.length;

  const scrollPage = useCallback((deltaY: number) => {
    if (Math.abs(deltaY) <= 10) return; // To handle minor swipes (similar to your scroll handling)

    isScrolling.current = true;
    let scrollingDown = deltaY > 0;

    if (scrollingDown) {
      setSection((prev) => Math.min(PAGE_SECTIONS - 1, prev + 1));
    } else {
      setSection((prev) => Math.max(0, prev - 1));
    }
    setTimeout(() => {
      isScrolling.current = false;
    }, PAGE_CHANGE_DURATION);
  }, []);

  useEffect(() => {
    if (!atBaseRoute) return;
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;
      else {
        scrollPage(e.deltaY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY; // Store the initial touch position
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const touchEndY = e.touches[0].clientY; // Get the current touch position
      const deltaY = touchStartY.current - touchEndY; // Calculate the distance moved
      scrollPage(deltaY);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [PAGE_SECTIONS, atBaseRoute, scrollPage]);

  return (
    <section
      {...props}
      id={id}
      style={{
        backgroundColor: atBaseRoute ? "transparent" : "var(--navy)",
        height: atBaseRoute ? "100vh" : "max-content",
      }}
      className={cn(
        className,
        "relative h-screen overflow-hidden transition-colors duration-300 ease-in",
      )}
    >
      {!atBaseRoute && (
        <>
          <LeftArrow
            onClick={() => router.back()}
            className={cn(
              "fixed left-10 top-28 z-10 w-14 overflow-hidden",
              atBaseRoute ? "animate-slide-out" : "animate-slide-in",
            )}
            color={scrolled ? "black" : "white"}
          />
        </>
      )}
      <PageIndicator
        activePageIndex={section}
        totalPages={PAGE_SECTIONS}
        className="absolute -bottom-10 left-[50vw] -rotate-90 max-lg:-translate-x-[100%] lg:left-10 lg:top-[50vh] lg:-translate-y-[50%] lg:rotate-0"
      />
      <div style={containerStyle} className="h-max">
        {children}
      </div>
    </section>
  );
};
