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
      style={{ aspectRatio: "14/5" }}
      className={cn(
        "relative mx-auto w-full max-w-screen-lg overflow-hidden",
        className,
        "flex justify-end",
      )}
    >
      <Image
        src={coverImageURL}
        alt={title}
        fill
        className="z-0 max-h-96 max-w-[55%] object-cover grayscale transition-all duration-150 ease-in-out hover:grayscale-0"
      />
      <div className="z-10 flex w-1/2 flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Typography
            className="text-rose"
            fontFamily={"inter"}
            fontSize={"label"}
            fontWeight={"regular"}
          >
            {label}
          </Typography>
          <Typography
            fontFamily={"poppins"}
            fontSize={"h3"}
            fontWeight={"semibold"}
            className="tracking-wider"
          >
            {title}
          </Typography>
        </div>
        <div className="h-max w-full rounded-md bg-primary p-4 text-white shadow-sm shadow-black hover:shadow-lg">
          {description}
        </div>
        <div className="flex items-center gap-3">
          {!!githubURL && (
            <Link href={githubURL}>
              <Github />
            </Link>
          )}
          {liveURL && (
            <Link href={liveURL}>
              <ExternalLink />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
