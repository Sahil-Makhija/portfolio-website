"use client";

import { useNavbarState } from "@/states";
import { NavItem } from "./nav-item";

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
        backgroundImage:
          "linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a)",
      }}
      className="fixed top-0 z-0 left-0 w-screen ease-in overflow-hidden flex flex-col items-center justify-evenly"
    >
      <NavItem>Home</NavItem>
      <NavItem>About Me</NavItem>
      <NavItem>Works</NavItem>
      <NavItem>Contact</NavItem>
    </div>
  );
};
