"use client";
import React from "react";

import { CirclePattern } from "./components";
import { AboutMe, Contact, Home, Portfolio } from "./pages";
import { TransitionContainer } from "@/components";

export const RootLayout: React.FC = () => {
  return (
    <>
      <TransitionContainer baseRoute="/" id="homepage">
        <Home />
        <AboutMe />
        <Portfolio />
        <Contact />
      </TransitionContainer>
      <CirclePattern circles={6} />
    </>
  );
};

RootLayout.displayName = "RootLayout";
