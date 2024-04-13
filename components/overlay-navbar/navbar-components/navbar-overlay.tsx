"use client";

import { NavItem } from "./nav-item";

interface NavbarOverlayProps {
  isOpen: boolean;
}

export const NavbarOverlay: React.FC<NavbarOverlayProps> = ({ isOpen }) => {
  return (
    <div
      style={{
        height: "100vh",
        transitionProperty: "transform",
        transitionDuration: "400ms",
        transitionTimingFunction: "ease-in-out",
        transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
      }}
      className="fixed top-0 z-0 left-0 w-screen ease-in bg-gradient-to-r from-background to-sky-600 overflow-hidden flex flex-col items-center justify-evenly"
    >
      <NavItem isOpen={isOpen}>Home</NavItem>
      <NavItem isOpen={isOpen}>About Me</NavItem>
      <NavItem isOpen={isOpen}>Works</NavItem>
      <NavItem isOpen={isOpen}>Contact</NavItem>
    </div>
  );
};
