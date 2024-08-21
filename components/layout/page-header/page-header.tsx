"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes } from "react";

interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  pageRoute: string;
  baseRoute: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageRoute,
  children,
  className,
  baseRoute,
}) => {
  const pathname = usePathname();
  const atPageRoute = pageRoute === pathname;
  const atBaseRoute = baseRoute === pathname;

  if (!atBaseRoute && !atPageRoute) {
    return null;
  }

  return (
    <section className={cn(className, "h-screen overflow-hidden")}>
      {children}
    </section>
  );
};
