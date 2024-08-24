"use client";
import { Separator, Typography } from "@/components";
import { SkillItem } from "./components";
import { SkillSet } from "@/constants";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const SkillsSection: React.FC = () => {
  const isBrowser = typeof window !== "undefined";
  const scrolled = useScrollTop(isBrowser ? window.innerHeight * 1.6 : 0);

  return (
    <div className="relative flex h-max w-screen justify-center overflow-hidden bg-white py-40">
      <div className="absolute left-0 top-40 flex w-max -translate-y-2 items-center gap-4">
        <Separator className="h-0.5 w-12 bg-black" />
        <Typography
          fontFamily={"inverse"}
          fontSize={"h1"}
          className="text-rose"
        >
          03
        </Typography>
      </div>
      <div className="flex h-full w-full max-w-screen-xl flex-col justify-between gap-32 lg:w-4/5">
        <Typography
          fontSize={"h2"}
          fontFamily={"futura"}
          fontWeight={"medium"}
          className="tracking-widest text-foreground max-lg:text-center"
        >
          SKILL SET
        </Typography>
        <div className="mx-auto grid h-max w-4/5 grid-cols-1 gap-16 lg:w-full lg:grid-cols-2">
          {SkillSet.map((skill, idx) => (
            <SkillItem
              experience={skill.experience}
              iconURL={skill.iconURL}
              title={skill.title}
              level={scrolled ? skill.level : 0}
              key={`skill-item-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
