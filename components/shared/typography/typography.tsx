import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyStyles> {
  gradientColor?: boolean;
}

const gradientColorStyles = {
  background:
    "linear-gradient(90deg, #7351BE 0%, #EF6547 44.09%, #3A8FF2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const typographyStyles = cva("text-white text-wrap", {
  variants: {
    fontFamily: {
      inter: "font-inter",
      inverse: "font-inverse",
      futura: "font-futura",
      poppins: "font-poppins",
    },
    fontSize: {
      D1: "text-5xl sm:text-6xl md:text-[120px] leading-none tracking-wider",
      D2: "text-5xl sm:text-6xl md:text-7xl leading-tight tracking-wide",
      h1: "text-3xl sm:text-4xl md:text-5xl leading-normal",
      h2: "text-2xl sm:text-3xl md:text-4xl leading-normal",
      h3: "text-xl sm:text-2xl md:text-3xl leading-normal",
      h4: "text-lg sm:text-xl md:text-2xl leading-normal",
      h5: "text-base sm:text-lg md:text-xl leading-normal",
      h6: "text-sm sm:text-base md:text-lg leading-normal",
      "body-l": "text-base sm:text-lg leading-relaxed",
      "body-m": "text-sm sm:text-base leading-normal",
      "body-s": "text-xs sm:text-sm leading-normal",
      label: "text-xs sm:text-13px leading-normal",
      caption: "text-xxs sm:text-xs leading-normal",
    },
    fontWeight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    fontFamily: "inter",
    fontSize: "body-m",
    fontWeight: "regular",
  },
});

export const Typography: React.FC<TypographyProps> = ({
  fontFamily,
  fontSize,
  fontWeight,
  children,
  className,
  style = {},
  gradientColor = false,
  ...restProps
}) => {
  return (
    <span
      className={cn(
        typographyStyles({ fontFamily, fontSize, fontWeight }),
        className,
      )}
      style={gradientColor ? { ...style, ...gradientColorStyles } : style}
      {...restProps}
    >
      {children}
    </span>
  );
};
