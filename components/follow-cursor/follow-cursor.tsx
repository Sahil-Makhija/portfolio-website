"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const FollowCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        // ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
      className="fixed top-0 left-0 size-20 bg-transparent rounded-full border-2 "
    />
  );
};
