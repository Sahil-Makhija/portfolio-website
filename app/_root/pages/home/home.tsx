import { PageHeader, Typography } from "@/components";
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
        },
      );
    });
  }, []);
  return (
    <PageHeader
      baseRoute="/"
      pageRoute="/"
      className="flex h-screen items-center justify-center py-20"
    >
      <div className="overflow-hiddentext-white flex h-max w-full max-w-screen-2xl justify-between md:w-4/5">
        <div ref={heroContainer} className="flex max-w-72 flex-col gap-6">
          <Typography
            fontFamily={"futura"}
            fontSize={"D1"}
            fontWeight={"medium"}
          >
            SAHIL <br />
            MAKHIJA
          </Typography>
          <div className="relative h-6 w-36">
            <div className="absolute left-0 top-0 h-1 w-20 rounded-e-sm rounded-s-sm bg-rose" />
            <div className="absolute bottom-0 right-0 h-1 w-20 rounded-e-sm rounded-s-sm bg-rose" />
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
    </PageHeader>
  );
};
