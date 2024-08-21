import React from "react";
import { ViewOutDiv } from "./viewout-div";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export const ImageFrame: React.FC<{ containerClass?: string } & ImageProps> = ({
  containerClass = "",
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative h-full min-h-96 w-max min-w-96 overflow-hidden",
        containerClass,
      )}
    >
      <Image
        className={cn(`tilt animate-slideLeft h-full w-full`, className)}
        {...props}
        fill
        alt="_image"
      />
      <ViewOutDiv />
    </div>
  );
};
