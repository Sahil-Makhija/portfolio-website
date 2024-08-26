import { Typography } from "@/components";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  orientation?: "left" | "right";
  className?: string;
  title: string;
  description: string | React.ReactNode;
  githubURL?: string;
  liveURL?: string;
  coverImageURL: string;
  label?: string;
}

const className = {
  left: "",
  right: "",
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  coverImageURL,
  description,
  title,
  className,
  githubURL,
  liveURL,
  orientation,
  label = "Featured project",
}) => {
  return (
    <div
      className="overflow-hi`d`den relative flex w-full max-w-screen-lg border"
      style={{ aspectRatio: "14/5" }}
    >
      <Image
        src={coverImageURL}
        alt={title}
        fill
        style={{ maxWidth: "60%" }}
        className="scale-150 rounded-sm object-contain"
      />
      <div className="absolute right-4 top-4 flex h-full w-1/2 flex-col items-end gap-6">
        <div className="flex flex-col gap-2">
          <Typography
            fontSize={"label"}
            fontWeight={"semibold"}
            fontFamily={"inter"}
            className="text-end text-rose"
          >
            Featured Project
          </Typography>
          <Typography
            fontSize={"h3"}
            fontFamily={"futura"}
            fontWeight={"semibold"}
            className="text-foreground"
          >
            {title}
          </Typography>
        </div>
        <div className="flex w-max max-w-full items-center justify-center rounded-sm px-4 py-6">
          <Typography
            className="text-end text-muted-foreground"
            fontSize={"body-m"}
            fontFamily={"poppins"}
            fontWeight={"medium"}
          >
            {description}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            minus.
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <Github />
          <ExternalLink />
        </div>
      </div>
    </div>
  );
};
