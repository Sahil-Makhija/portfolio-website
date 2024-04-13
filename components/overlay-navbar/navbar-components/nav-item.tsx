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
  const isOpen = useNavbarState((state) => state.isOpen);
  return (
    <Link
      href={href}
      className="w-max h-max overflow-hidden relative flex items-center justify-center group text-white px-1"
    >
      <div
        style={{
          height: "5%",
          transitionProperty: "width",
        }}
        className="absolute left-0 w-0 group-hover:w-full bg-white duration-200 delay-75 ease-in mt-2"
      />
      <Typography
        fontFamily={"inverse"}
        style={{ transform: isOpen ? "translateY(0)" : "translateY(160px)" }}
        className={cn(
          "capitalize transition-transform duration-300 ease-out delay-500"
        )}
        fontSize={"D1"}
      >
        {children}
      </Typography>
    </Link>
  );
};
