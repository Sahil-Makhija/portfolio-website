"use client";
import { cn } from "@/lib/utils";
import { Typography } from "../typography";
import { MenuIcon, NavbarOverlay } from "./navbar-components";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const OverlayNavbar = () => {
  const scrolled = useScrollTop();
  const textColor = scrolled ? "text-black" : "text-white";
  return (
    <>
      <NavbarOverlay />
      <header className="fixed left-0 top-0 z-10 flex h-20 w-screen items-center justify-between px-8 py-12">
        <Typography
          className={cn(textColor)}
          fontFamily={"inverse"}
          fontSize={"h2"}
        >
          SM
        </Typography>
        <MenuIcon />
      </header>
    </>
  );
};
