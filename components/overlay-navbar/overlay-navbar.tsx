"use client";
import { useState } from "react";
import { MenuIcon, NavbarOverlay } from "./navbar-components";

export const OverlayNavbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlayNav = () => {
    setShowOverlay((prev) => !prev);
  };
  return (
    <>
      <NavbarOverlay isOpen={showOverlay} />
      <header className="h-20 flex fixed top-0 left-0 w-screen items-center z-10 px-8">
        <MenuIcon onClick={toggleOverlayNav} isOpen={showOverlay} />
      </header>
    </>
  );
};
