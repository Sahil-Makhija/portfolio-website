"use client";
import { Typography } from "../typography";
import { MenuIcon, NavbarOverlay } from "./navbar-components";

export const OverlayNavbar = () => {
  return (
    <>
      <NavbarOverlay />
      <header className="h-20 flex fixed top-0 left-0 w-screen justify-between items-center z-10 px-8 py-12">
        <Typography
          fontFamily={"inverse"}
          fontSize={"h2"}
          className="text-white"
        >
          SM
        </Typography>
        <MenuIcon />
      </header>
    </>
  );
};
