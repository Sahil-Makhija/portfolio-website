"use client";
import React from "react";

import { CirclePattern } from "./components";
import { AboutMe, Contact, Home, Portfolio } from "./pages";
import { PageBody, TransitionContainer } from "@/components";

export const RootLayout: React.FC = () => {
  return (
    <>
      <TransitionContainer baseRoute="/" id="homepage">
        <Home />
        <AboutMe />
        <Portfolio />
        <Contact />
      </TransitionContainer>
      <PageBody pageRoute="/">
        <CirclePattern circles={6} />
      </PageBody>
    </>
  );
};

RootLayout.displayName = "RootLayout";
