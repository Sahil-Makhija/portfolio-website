"use client";
import { cn } from "@/lib/utils";
import { useNavbarState } from "@/states";
import React from "react";

export const MenuIcon: React.FC = () => {
  const { isOpen, setIsOpen } = useNavbarState((state) => state);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
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
          "absolute left-0 top-0 h-0.5 w-full bg-white transition-transform duration-150 ease-in",
          isOpen && "translate-y-2 rotate-45",
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-150 ease-in",
          isOpen && "-translate-y-2.5 -rotate-45",
        )}
      />
    </div>
  );
};
