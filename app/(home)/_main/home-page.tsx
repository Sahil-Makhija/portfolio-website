"use client";

import { Typography } from "@/components";
import { CirclePattern } from "./components";
import { Home } from "./pages";

const sectionIds = ["home", "about", "portfolio", "contact"];
export const HomePage = () => {
  return (
    <>
      <section
        id="homepage"
        className="h-screen overflow-y-auto"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Home />
        <div
          style={{ scrollSnapAlign: "start" }}
          id={sectionIds[1]}
          className="h-screen"
        />
        <div
          style={{ scrollSnapAlign: "start" }}
          id={sectionIds[2]}
          className="h-screen"
        />
        <div
          style={{ scrollSnapAlign: "start" }}
          id={sectionIds[3]}
          className="h-screen"
        />
      </section>
      <CirclePattern circles={6} />
    </>
  );
};
