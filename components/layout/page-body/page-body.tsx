"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes } from "react";

interface PageBodyProps extends HTMLAttributes<HTMLDivElement> {
  pageRoute: string;
  asChild?: boolean;
}

export const PageBody: React.FC<PageBodyProps> = ({
  pageRoute,
  children,
  className,
  asChild = false,
}) => {
  const pathname = usePathname();
  const atPageRoute = pageRoute === pathname;
  const Comp = asChild ? Slot : "div";

  if (!atPageRoute) {
    return null;
  }

  return (
    <Comp className={cn(className, "h-max overflow-hidden")}>{children}</Comp>
  );
};
