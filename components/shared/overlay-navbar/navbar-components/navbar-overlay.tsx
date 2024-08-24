"use client";

import { useNavbarState } from "@/states";
import { NavItem } from "./nav-item";
import { gradientStyles } from "@/constants";

export const NavbarOverlay: React.FC = () => {
  const isOpen = useNavbarState((state) => state.isOpen);
  return (
    <div
      style={{
        height: "100vh",
        transitionProperty: "transform",
        transitionDuration: "400ms",
        transitionTimingFunction: "ease-in-out",
        transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
        backgroundImage: gradientStyles[3],
      }}
      className="fixed left-0 top-0 z-10 w-screen overflow-hidden bg-background ease-in"
    >
      <div className="relative mx-auto flex h-full w-max flex-col items-center justify-evenly">
        <NavItem href="#home">HOME</NavItem>
        <NavItem>WORKS</NavItem>
        <NavItem href="#about">ABOUT US</NavItem>
        <NavItem>CONTACT</NavItem>
      </div>
    </div>
  );
};
