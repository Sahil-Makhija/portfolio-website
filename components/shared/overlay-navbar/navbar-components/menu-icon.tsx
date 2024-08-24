"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { useNavbarState } from "@/states";
import React from "react";

export const MenuIcon: React.FC = () => {
  const { isOpen, setIsOpen } = useNavbarState((state) => state);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const scrolled = useScrollTop();
  const bgColor = scrolled ? "bg-black" : "bg-white";
  return (
    <div
      role="button"
      onClick={() => {
        toggleNavbar();
      }}
      className="relative h-5 w-12"
    >
      <div
        className={cn(
          "absolute left-0 top-0 h-0.5 w-full transition-all duration-150 ease-in",
          isOpen && "translate-y-2 rotate-45",
          bgColor,
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 h-0.5 w-full transition-all duration-150 ease-in",
          bgColor,
          isOpen && "-translate-y-2.5 -rotate-45",
        )}
      />
    </div>
  );
};
