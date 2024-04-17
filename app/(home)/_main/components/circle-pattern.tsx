import gsap from "gsap";
import { useEffect } from "react";

export const CirclePattern = () => {
  useEffect(() => {
    const handleCursorMove = (e: MouseEvent) => {
      gsap.to("#circle_container", {
        x: (window.innerWidth - e.clientX) / 50,
        y: (window.innerWidth - e.clientY) / 50,
        duration: 2,
        ease: "sine.out",
      });
    };
    window.addEventListener("mousemove", handleCursorMove);
    return () => window.removeEventListener("mousemove", handleCursorMove);
  }, []);
  return (
    <div
      id="circle_container"
      style={{
        width: `${(40 + 5 * 8) * 16}px`,
        zIndex: "-1",
      }}
      className="fixed top-0 right-0  h-screen overflow-visible  flex items-center justify-center "
    >
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-white opacity-5`}
          style={{
            width: `${(40 + index * 8) * 16}px`,
            height: `${(40 + index * 8) * 16}px`,
            opacity: `${(30 - index * 5) / 100}`,
          }}
        />
      ))}
    </div>
  );
};
