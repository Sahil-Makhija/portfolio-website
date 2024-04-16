import { Typography } from "@/components/typography";
import { cn } from "@/lib/utils";
import { useNavbarState } from "@/states";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  href?: string;
}

export const NavItem: FC<NavItemProps> = ({ children, href = "/" }) => {
  const { isOpen, setIsOpen } = useNavbarState((state) => state);

  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="w-max peer  hover:z-20 h-max overflow-hidden relative flex items-center justify-center group text-white px-1"
    >
      <div
        style={{
          height: "6%",
          transitionProperty: "width",
        }}
        className="absolute left-0 w-0 group-hover:w-full bg-white duration-200 delay-75 ease-in mb-4"
      />
      <Typography
        fontFamily={"futura"}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(160px)",
        }}
        className={cn(
          "transition-transform duration-300 ease-out delay-500 leading-none"
        )}
        fontSize={"D1"}
      >
        {children}
      </Typography>
    </Link>
  );
};
