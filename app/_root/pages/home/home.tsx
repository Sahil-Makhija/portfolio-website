import { Typography } from "@/components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export const Home = () => {
  const heroContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!heroContainer.current) return;
    const children = gsap.utils.toArray(heroContainer.current.children);
    children.map((child) => {
      gsap.fromTo(
        // @ts-ignore
        child,
        {
          x: "-200%",
        },
        {
          x: "0%",
          duration: 0.75,
          ease: "power1.inOut",
          delay: children.indexOf(child) / 5,
        }
      );
    });
  }, []);
  return (
    <div className="h-screen py-20 flex justify-center items-center">
      <div className="flex px-12 max-w-screen-2xl overflow-hidden w-full  h-max justify-between text-white">
        <div ref={heroContainer} className="flex flex-col gap-6 max-w-72">
          <Typography
            fontFamily={"futura"}
            fontSize={"D1"}
            fontWeight={"medium"}
          >
            SAHIL <br />
            MAKHIJA
          </Typography>
          <div className="relative h-6 w-36">
            <div className="h-1 w-20 rounded-s-sm rounded-e-sm left-0 absolute top-0  bg-rose" />
            <div className="h-1 w-20 rounded-s-sm rounded-e-sm right-0 absolute bottom-0  bg-rose" />
          </div>
          <Typography
            fontFamily={"futura"}
            fontSize={"h3"}
            fontWeight={"medium"}
          >
            web designer / Software Developer.
          </Typography>
        </div>
      </div>
    </div>
  );
};
