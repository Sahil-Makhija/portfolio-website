import { Progress, Typography } from "@/components";
import Image from "next/image";
import React from "react";

export interface SkillItemProps {
  title: string;
  iconURL: string;
  experience: string;
  level: number;
}

export const SkillItem: React.FC<SkillItemProps> = ({
  experience,
  iconURL,
  level,
  title,
}) => {
  return (
    <div className="flex h-max gap-4 overflow-hidden">
      <Image
        src={iconURL}
        className="max-w-10 object-contain md:max-w-14 lg:max-w-max"
        alt={`_${title}`}
        width={60}
        height={60}
      />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-between">
          <Typography
            fontSize={"h4"}
            fontFamily={"futura"}
            fontWeight={"semibold"}
            className="tracking-widest text-foreground"
          >
            {title}
            <Typography
              className="ml-2 text-muted-foreground"
              fontSize={"body-s"}
              fontWeight={"medium"}
              fontFamily={"poppins"}
            >
              {experience}
            </Typography>
          </Typography>
          <Typography
            fontFamily={"futura"}
            fontSize={"h4"}
            fontWeight={"semibold"}
            className="text-foreground"
          >
            {level}
            <Typography
              className="ml-2 text-muted-foreground"
              fontSize={"body-l"}
              fontWeight={"medium"}
              fontFamily={"poppins"}
            >
              %
            </Typography>
          </Typography>
        </div>
        <Progress value={level} />
      </div>
    </div>
  );
};
