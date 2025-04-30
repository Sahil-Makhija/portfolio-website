"use client";

import { useNavbarState } from "@/states";
import { NavItem } from "./nav-item";

export const NavbarOverlay: React.FC = () => {
  const isOpen = useNavbarState((state) => state.isOpen);
  return (
    <nav
      style={{
        height: "100vh",
        transitionProperty: "transform",
        transitionDuration: "400ms",
        transitionTimingFunction: "ease-in-out",
        transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
        backgroundImage:
          "linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a)",
      }}
      className="fixed left-0 top-0 z-10 w-screen overflow-hidden bg-background ease-in"
    >
      <ul className="relative mx-auto flex h-full w-max flex-col items-center justify-evenly">
        <NavItem href="/">HOME</NavItem>
        <NavItem href="/about">ABOUT ME</NavItem>
        <NavItem href="/portfolio">WORKS</NavItem>
        <NavItem href="/contact">CONTACT</NavItem>
      </ul>
    </nav>
  );
};
