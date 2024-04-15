"use client";

const sectionIds = ["home", "about", "portfolio", "contact"];
export const HomePage = () => {
  return (
    <section
      style={{ scrollSnapType: "y mandatory" }}
      className="h-screen overflow-x-hidden overflow-y-scroll"
    >
      <div
        style={{ scrollSnapAlign: "start" }}
        id={sectionIds[0]}
        className="h-screen "
      />
      <div
        style={{ scrollSnapAlign: "start" }}
        id={sectionIds[1]}
        className="h-screen "
      />
      <div
        style={{ scrollSnapAlign: "start" }}
        id={sectionIds[2]}
        className="h-screen "
      />
      <div
        style={{ scrollSnapAlign: "start" }}
        id={sectionIds[3]}
        className="h-screen "
      />
    </section>
  );
};
