import React from "react";
import { Typography } from "./typography";
import { socialLinks } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="flex h-80 w-screen items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(101deg, rgb(7, 33, 66), rgb(140, 43, 122) 52%, rgb(255, 77, 90))",
      }}
    >
      <Link href={`mailto:${socialLinks["email"]}`}>
        <Typography
          fontFamily={"futura"}
          fontSize={"h2"}
          fontWeight={"regular"}
          className="hover:text-white/80"
        >
          {socialLinks["email"]}
        </Typography>
      </Link>
    </footer>
  );
};
