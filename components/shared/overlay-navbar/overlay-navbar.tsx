"use client";
import { Typography } from "../typography";
import { MenuIcon, NavbarOverlay } from "./navbar-components";

export const OverlayNavbar = () => {
  return (
    <>
      <NavbarOverlay />
      <header className="fixed left-0 top-0 z-10 flex h-20 w-screen items-center justify-between px-8 py-12">
        <Typography fontFamily={"inverse"} fontSize={"h2"}>
          SM
        </Typography>
        <MenuIcon />
      </header>
    </>
  );
};
