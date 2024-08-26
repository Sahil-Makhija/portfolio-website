import { useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { cn } from "@/lib/utils";

interface CarouselCreatorProps {
  children: React.ReactNode | Array<React.ReactNode>;
  showOnScreen?: number;
  className?: string;
  containerClass?: string;
  hideButtons?: boolean;
}

export const CarouselCreator: React.FC<CarouselCreatorProps> = ({
  children,
  showOnScreen = 1,
  className,
  containerClass = "",
  hideButtons,
}) => {
  const groupedChildren = useMemo(() => {
    const childArray = Array.isArray(children) ? children : [children];
    const groupedChildren = [];
    for (let i = 0; i < childArray.length; i += showOnScreen) {
      groupedChildren.push(childArray.slice(i, i + showOnScreen));
    }
    return groupedChildren;
  }, [children, showOnScreen]);

  return (
    <Carousel className={cn("max-w-screen-xl", className)}>
      <CarouselContent>
        {groupedChildren.map((group, index) => (
          <CarouselItem
            className={cn(
              "flex items-center justify-center gap-4",
              containerClass,
            )}
            key={index}
          >
            {group}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
