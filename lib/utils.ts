import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToTop = (fn: () => void) => {
  if (window.scrollY > 0) {
    window.scrollTo({ behavior: "smooth", top: 0 });
    setTimeout(() => {
      fn();
    }, window.screenY * 40);
  } else {
    fn();
  }
};
