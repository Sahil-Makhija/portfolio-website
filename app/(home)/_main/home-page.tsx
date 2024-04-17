"use client";

import { CirclePattern } from "./components";
import { Home } from "./pages";

const sectionIds = ["home", "about", "portfolio", "contact"];
export const HomePage = () => {
  return (
    <>
      {/* <section
        className="h-screen overflow-y-auto"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Home />
        <div
          style={{ scrollSnapAlign: "start" }}
          id={sectionIds[1]}
          className="h-screen bg-blue-500"
        />
        <div
          style={{ scrollSnapAlign: "start" }}
          id={sectionIds[2]}
          className="h-screen bg-green-500"
        />
        <div
          style={{ scrollSnapAlign: "start" }}
          id={sectionIds[3]}
          className="h-screen bg-pink-500"
        />
      </section> */}
      <CirclePattern />
    </>
  );
};
