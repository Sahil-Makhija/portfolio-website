import React from "react";

interface LeftArrowProps {
  color?: "white" | "black";
  className?: string;
  onClick?: () => void;
}

export const LeftArrow: React.FC<LeftArrowProps> = ({
  color,
  className,
  onClick,
}) => {
  return (
    <div role="button" className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="34"
        viewBox="0 0 67 34"
        style={{ transform: "translateX(0%)" }}
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke={color}
          stroke-linecap="round"
          transform="translate(2 1)"
        >
          <path stroke-width="2" d="M0,15.5533333 L64,15.5533333"></path>
          <polyline
            stroke-width="2"
            points="15.556 0 0 15.556 15.556 31.111"
          ></polyline>
        </g>
      </svg>
    </div>
  );
};
