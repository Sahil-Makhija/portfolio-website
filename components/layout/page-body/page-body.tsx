"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes } from "react";

interface PageBodyProps extends HTMLAttributes<HTMLDivElement> {
  pageRoute: string;
}

export const PageBody: React.FC<PageBodyProps> = ({
  pageRoute,
  children,
  className,
}) => {
  const pathname = usePathname();
  const atPageRoute = pageRoute === pathname;

  if (!atPageRoute) {
    return null;
  }

  return (
    <div className={cn(className, "h-max overflow-hidden")}>{children}</div>
  );
};
