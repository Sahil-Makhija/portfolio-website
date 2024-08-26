import {
  Button,
  CarouselCreator,
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
      <PageBody className="flex justify-center" pageRoute="/portfolio">
        <div
          style={{ height: "70vh" }}
          className="animate-fade-in absolute bottom-4 mx-auto min-h-96 w-full max-w-screen-xl overflow-y-auto overflow-x-hidden rounded-3xl bg-white"
        ></div>
      </PageBody>
    </>
  );
};
{
  /* <ProjectCard
  coverImageURL="/images/about.jpg"
  description="My Portfolio Website"
  title="Sahil Makhija | Portfolio"
/> */
}
