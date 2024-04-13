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
      className="w-12 h-5 relative"
    >
      <div
        className={cn(
          "w-full h-0.5 bg-white absolute top-0 left-0 transition-transform duration-150 ease-in",
          isOpen && "rotate-45 translate-y-2"
        )}
      />
      <div
        className={cn(
          "w-full h-0.5 bg-white absolute bottom-0 left-0 transition-transform duration-150 ease-in",
          isOpen && "-rotate-45 -translate-y-2.5"
        )}
      />
    </div>
  );
};
