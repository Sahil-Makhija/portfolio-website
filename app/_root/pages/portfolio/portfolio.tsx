import {
  Button,
  PageBody,
  PageHeader,
  TransitionDiv,
  Typography,
} from "@/components";
import Link from "next/link";
import { ProjectCard } from "./project-card";
import { socialLinks } from "@/constants";

export const Portfolio = () => {
  return (
    <>
      <PageHeader
        baseRoute="/"
        pageRoute="/portfolio"
        className="flex h-screen items-center justify-center py-20"
      >
        <TransitionDiv
          matchingRoute="/portfolio"
          className="flex h-max w-full max-w-screen-2xl items-end justify-between overflow-hidden px-12 text-white md:w-4/5"
          routeMatchClassName="-translate-y-72"
        >
          <div className="flex flex-col gap-6">
            <Typography
              fontFamily={"futura"}
              fontSize={"D1"}
              fontWeight={"medium"}
            >
              Portfolio
            </Typography>

            <TransitionDiv
              matchingRoute="/portfolio"
              routeMatchClassName="translate-y-16 opacity-0"
            >
              <Button
                className="w-max"
                radius={"rounded"}
                variant={"primary"}
                size={"lg"}
                asChild
              >
                <Link href={"/portfolio"}>Show me more</Link>
              </Button>
            </TransitionDiv>
          </div>
        </TransitionDiv>
      </PageHeader>
      <PageBody
        className="absolute left-1/4 top-80 mx-auto w-1/2 rounded-xl bg-white"
        pageRoute="/portfolio"
      >
        <div className="grid w-full max-w-screen-xl grid-cols-1 rounded-xl">
          <ProjectCard
            coverImageURL="/images/about.jpg"
            title="Sahil Makhija | Portfolio"
            description="Supreme Portfolio developed by Myself"
            orientation="left"
            githubURL="/"
            liveURL="/"
          />
        </div>
      </PageBody>
    </>
  );
};
