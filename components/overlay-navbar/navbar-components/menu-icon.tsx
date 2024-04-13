import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

interface MenuIconProps {
  isOpen: boolean;
  onClick?: () => void;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ onClick, isOpen }) => {
  return (
    <div role="button" onClick={onClick} className="w-12 h-5 relative">
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
