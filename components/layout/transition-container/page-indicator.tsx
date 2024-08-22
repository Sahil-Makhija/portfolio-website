import { Separator } from "@/components/ui";
import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";
import { TransitionDiv } from "../transition-div/transition-div";

interface PageIndicatorProps {
  activePageIndex: number;
  totalPages: number;
  setActivePage?: () => void;
  className?: string;
  style?: CSSProperties;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  activePageIndex,
  setActivePage,
  totalPages,
  className,
  style,
}) => {
  return (
    <div style={style} className={cn("h-max w-max overflow-hidden", className)}>
      <TransitionDiv
        matchingRoute="/"
        className="flex -translate-x-10 flex-col gap-12 transition-transform duration-75 lg:gap-9"
        routeMatchClassName="translate-x-0"
      >
        {Array.from({ length: totalPages }).map((_, idx) => (
          <Separator
            key={`page-indicator-idx-${idx}`}
            style={{ height: "3px" }}
            className={cn(
              "bg-white delay-75 duration-150 ease-in",
              activePageIndex === idx ? "w-10" : "w-6",
            )}
          />
        ))}
      </TransitionDiv>
    </div>
  );
};
