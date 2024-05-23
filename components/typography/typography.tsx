import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyStyles> {
  gradientColor?: boolean;
  component?: React.ElementType;
}

const gradientColorStyles = {
  background:
    "linear-gradient(90deg, #7351BE 0%, #EF6547 44.09%, #3A8FF2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const typographyStyles = cva("text-white text-wrap", {
  variants: {
    fontFamily: {
      inter: "font-inter",
      inverse: "font-inverse",
      futura: "font-futura",
    },
    fontSize: {
      D1: "text-[120px] leading-none tracking-wider ",
      D2: "text-7xl leading-tight tracking-wide",
      h1: "text-5xl leading-normal",
      h2: "text-4xl leading-normal",
      h3: "text-3xl leading-normal",
      h4: "text-2xl leading-normal",
      h5: "text-xl leading-normal",
      h6: "text-lg leading-normal",
      "body-l": "text-lg leading-relaxed",
      "body-m": "text-base leading-normal",
      "body-s": "text-sm leading-normal",
      label: "text-13px leading-normal",
      caption: "text-xs leading-normal",
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
  component: BaseComponent = "span",
  ...restProps
}) => {
  return (
    <BaseComponent
      className={cn(
        typographyStyles({ fontFamily, fontSize, fontWeight }),
        className
      )}
      style={gradientColor ? { ...style, ...gradientColorStyles } : style}
      {...restProps}
    >
      {children}
    </BaseComponent>
  );
};
