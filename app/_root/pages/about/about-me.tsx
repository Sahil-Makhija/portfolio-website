import {
  Button,
  PageBody,
  PageHeader,
  TransitionDiv,
  Typography,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DetailsSection } from "./details-section";
import { SkillsSection } from "./skills-section";
import { PassionSection } from "./passion-section";

export const AboutMe = () => {
  return (
    <>
      <PageHeader
        baseRoute="/"
        pageRoute="/about"
        className="relative flex h-screen items-end py-20 sm:items-center"
      >
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col gap-6 max-lg:px-12 md:w-4/5">
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
            className="tracking-widest"
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
        <TransitionDiv
          matchingRoute="/about"
          className="absolute left-[10%] h-1/2 w-4/5 overflow-hidden max-sm:top-20 sm:left-[40vw] sm:h-4/5 sm:w-[55vw]"
          routeMatchClassName="sm:h-screen left-0 w-screen sm:w-3/5"
        >
          <Image
            src={"/images/about.jpg"}
            alt="_about"
            className="h-full w-full object-cover"
            fill
          />
        </TransitionDiv>
      </PageHeader>
      <PageBody pageRoute="/about">
        <DetailsSection />
        <PassionSection />
        <SkillsSection />
      </PageBody>
    </>
  );
};
