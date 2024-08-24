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
    ></div>
  );
};
