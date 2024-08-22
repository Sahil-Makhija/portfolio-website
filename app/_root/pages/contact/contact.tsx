import { PageHeader, Typography } from "@/components";
import { useRef } from "react";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/constants";

export const Contact = () => {
  const heroContainer = useRef<HTMLDivElement>(null);
  // useGSAP(() => {
  //   if (!heroContainer.current) return;
  //   const children = gsap.utils.toArray(heroContainer.current.children);
  //   children.map((child) => {
  //     gsap.fromTo(
  //       // @ts-ignore
  //       child,
  //       {
  //         x: "-200%",
  //       },
  //       {
  //         x: "0%",
  //         duration: 0.75,
  //         ease: "power1.inOut",
  //         delay: children.indexOf(child) / 5,
  //       },
  //     );
  //   });
  // }, []);
  return (
    <PageHeader
      baseRoute="/"
      pageRoute="/contact"
      className="flex h-screen items-center justify-center py-20"
    >
      <div className="flex h-max w-full max-w-screen-2xl justify-between overflow-hidden px-12 text-white md:w-4/5">
        <div ref={heroContainer} className="flex flex-col gap-6">
          <Typography
            fontFamily={"futura"}
            fontSize={"D1"}
            fontWeight={"medium"}
          >
            Get In Touch
          </Typography>
          <div className="relative h-6 w-36">
            <div className="absolute left-0 top-0 h-1 w-20 rounded-e-sm rounded-s-sm bg-rose" />
            <div className="absolute bottom-0 right-0 h-1 w-20 rounded-e-sm rounded-s-sm bg-rose" />
          </div>
          <Link href={socialLinks["email"]}>
            <Typography
              fontFamily={"futura"}
              fontSize={"h3"}
              fontWeight={"medium"}
              className="hover:text-white/80"
            >
              sahilmakhija667@gmail.com
            </Typography>
          </Link>
          <div className="flex items-center gap-8">
            <Link target="_blank" href={socialLinks["linkedIn"]}>
              <Linkedin className="size-8" />
            </Link>
            <Link target="_blank" href={socialLinks["github"]}>
              <Github className="size-8" />
            </Link>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};
