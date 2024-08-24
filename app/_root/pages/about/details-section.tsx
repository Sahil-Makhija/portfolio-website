import { Separator, Typography } from "@/components";

export const DetailsSection: React.FC = () => {
  return (
    <div className="relative flex h-max w-screen justify-center overflow-hidden bg-white pt-40">
      <div className="absolute left-0 top-40 flex w-max -translate-y-2 items-center gap-4">
        <Separator className="h-0.5 w-12 bg-black" />
        <Typography
          fontFamily={"inverse"}
          fontSize={"h1"}
          className="text-rose"
        >
          01
        </Typography>
      </div>
      <div className="flex h-full w-4/5 max-w-screen-xl flex-col justify-between gap-y-20 lg:flex-row">
        <Typography
          fontSize={"h2"}
          fontFamily={"futura"}
          fontWeight={"medium"}
          className="text-center tracking-widest text-foreground"
        >
          WHO I AM
        </Typography>
        <div className="flex h-max w-full flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <Typography
              className="tracking-widest text-foreground"
              fontFamily={"futura"}
              fontSize={"h3"}
            >
              Sahil Makhija
            </Typography>
            <Typography
              fontSize={"body-l"}
              fontFamily={"poppins"}
              fontWeight={"regular"}
              className="tracking-wider text-foreground"
            >
              I&apos;m a software engineer driven by a deep love for technology,
              always eager to learn and tackle challenging problems. I approach
              every endeavor with precision and a growth mindset, digging deep
              into anything I pursue.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
