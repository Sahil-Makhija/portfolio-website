"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { CSSProperties, HTMLAttributes } from "react";

interface TransitionDivProps extends HTMLAttributes<HTMLDivElement> {
  matchingRoute: string;
  routeMatchStyle?: CSSProperties;
  routeMatchClassName?: string;
}

export const TransitionDiv: React.FC<TransitionDivProps> = ({
  children,
  style: defaultStyle,
  routeMatchClassName,
  routeMatchStyle = {},
  matchingRoute,
  className,
}) => {
  const pathname = usePathname();
  const isRouteMatched = pathname === matchingRoute;

  return (
    <div
      style={{
        transitionDuration: "400ms",
        ...defaultStyle,
        ...(isRouteMatched && routeMatchStyle),
      }}
      className={cn(
        "ease-in",
        className,
        isRouteMatched && routeMatchClassName,
        "transition-all",
      )}
    >
      {children}
    </div>
  );
};
