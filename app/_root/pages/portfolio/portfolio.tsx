import {
  Button,
  PageBody,
  PageHeader,
  TransitionDiv,
  Typography,
} from "@/components";
import Link from "next/link";

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
          className="flex h-max w-full max-w-screen-2xl items-end justify-between overflow-hidden px-12 text-white"
          routeMatchClassName="-translate-y-64"
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
    </>
  );
};
