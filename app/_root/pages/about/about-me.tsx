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

export const AboutMe = () => {
  return (
    <>
      <PageHeader
        baseRoute="/"
        pageRoute="/about"
        className="relative flex h-screen items-center py-20"
      >
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col gap-6">
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
          style={{ height: "80vh", width: "55vw", left: "40vw" }}
          routeMatchStyle={{ height: "100vh", width: "60vw" }}
          matchingRoute="/about"
          className="absolute overflow-hidden"
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
        <SkillsSection />
      </PageBody>
    </>
  );
};
