import React, { HTMLAttributes } from "react";

interface ElementContainerProps extends HTMLAttributes<HTMLDivElement> {
  href: string;
}

export const ElementContainer: React.FC<ElementContainerProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <div data-element-name="transition-element-container" {...props}>
      {children}
    </div>
  );
};
