"use client";
import { useEffect, useRef, useState } from "react";
import { CirclePattern } from "./components";
import { Contact, Home, Portfolio } from "./pages";

const sectionIds = ["home", "about", "portfolio", "contact"];
const PAGE_SECTIONS = sectionIds.length;

const PAGE_CHANGE_DURATION = 1000;

export const HomePage = () => {
  const isScrolling = useRef(false);
  const [section, setSection] = useState(0);
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;
      else {
        if (e.deltaY <= 10 && e.deltaY >= -10) return; //TO handle minor scrolling
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
    <>
      <section id="homepage" className="h-screen overflow-hidden">
        <div
          style={{
            transition: "transform 0ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
            transform: `translateY(-${section * 100}vh)`,
            transitionDuration: `${Math.round(0.75 * PAGE_CHANGE_DURATION)}ms`,
          }}
          className="h-max"
        >
          <Home />
          <Portfolio />
          <Contact />
          <div id={sectionIds[2]} className="h-screen bg-sky-400" />
        </div>
      </section>
      <CirclePattern circles={6} />
    </>
  );
};
