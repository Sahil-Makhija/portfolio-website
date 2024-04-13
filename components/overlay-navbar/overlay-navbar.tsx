"use client";
import { MenuIcon, NavbarOverlay } from "./navbar-components";

export const OverlayNavbar = () => {
  return (
    <>
      <NavbarOverlay />
      <header className="h-20 flex fixed top-0 left-0 w-screen items-center z-10 px-8">
        <MenuIcon />
      </header>
    </>
  );
};
