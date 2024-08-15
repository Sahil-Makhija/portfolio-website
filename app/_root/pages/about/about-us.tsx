import { Button, Typography } from "@/components";
import Link from "next/link";
import React from "react";

export const AboutUs = () => {
  return (
    <div className="flex h-screen items-center justify-center py-20">
      <div className="flex h-max w-full max-w-screen-2xl justify-between overflow-hidden px-12 text-white">
        <div className="flex flex-col gap-6">
          <Typography
            fontFamily={"futura"}
            fontSize={"D1"}
            fontWeight={"medium"}
          >
            About Me
          </Typography>
          <div className="relative h-6 w-36">
            <div className="absolute left-0 top-0 h-1 w-24 rounded-e-sm rounded-s-sm bg-rose" />
            <div className="absolute bottom-0 right-0 h-1 w-24 rounded-e-sm rounded-s-sm bg-rose" />
          </div>
          <Typography
            fontFamily={"futura"}
            fontSize={"h4"}
            fontWeight={"regular"}
          >
            Driven by technology,
            <br />
            fueled by curiosity.
          </Typography>
          <Button
            className="w-max"
            radius={"rounded"}
            variant={"primary"}
            size={"lg"}
            asChild
          >
            <Link href={"/about"}>Show me more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
