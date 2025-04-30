"use client";

import { Typography } from "../../typography";
import { cn } from "@/lib/utils";
import { useNavbarState } from "@/states";
import { FC, ReactNode } from "react";

import { useRouter } from "next/navigation";

interface NavItemProps {
  children: ReactNode;
  href?: string;
}

export const NavItem: FC<NavItemProps> = ({ children, href = "/" }) => {
  const { isOpen, setIsOpen } = useNavbarState((state) => state);
  const router = useRouter();

  return (
    <li
      onClick={() => {
        setIsOpen(false);
        // setTimeout(() => {
        //   router.push(href);
        // }, 500);
      }}
      className="group peer relative flex h-max w-max cursor-pointer items-center justify-center overflow-hidden px-1 text-white hover:z-20"
    >
      <div
        style={{
          height: "6%",
          transitionProperty: "width",
        }}
        className="absolute left-0 mb-4 w-0 bg-white delay-75 duration-200 ease-in group-hover:w-full"
      />
      <Typography
        fontFamily={"futura"}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(160px)",
        }}
        className={cn(
          "leading-none transition-transform delay-500 duration-300 ease-out",
        )}
        fontSize={"D1"}
      >
        {children}
      </Typography>
    </li>
  );
};
