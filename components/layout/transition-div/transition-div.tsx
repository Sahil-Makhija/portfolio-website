"use client";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { usePathname } from "next/navigation";
import React, { CSSProperties, HTMLAttributes } from "react";

interface TransitionDivProps extends HTMLAttributes<HTMLDivElement> {
  matchingRoute: string;
  routeMatchStyle?: CSSProperties;
  routeMatchClassName?: string;
  asChild?: boolean;
}

export const TransitionDiv: React.FC<TransitionDivProps> = ({
  children,
  style: defaultStyle,
  routeMatchClassName,
  routeMatchStyle = {},
  matchingRoute,
  className,
  asChild = false,
}) => {
  const pathname = usePathname();
  const isRouteMatched = pathname === matchingRoute;

  const Comp = asChild ? Slot : "div";

  return (
    <Comp
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
    </Comp>
  );
};
