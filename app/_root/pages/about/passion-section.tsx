import { Separator, Typography } from "@/components";
import { passion } from "@/constants";
import Image from "next/image";

export const PassionSection: React.FC = () => {
  return (
    <div className="relative flex w-screen justify-center overflow-hidden bg-white pt-40">
      <div className="absolute left-0 top-40 flex w-max -translate-y-2 items-center gap-4">
        <Separator className="h-0.5 w-12 bg-black" />
        <Typography
          fontFamily={"inverse"}
          fontSize={"h1"}
          className="text-rose"
        >
          02
        </Typography>
      </div>
      <div className="flex h-full w-full max-w-screen-xl flex-col justify-between gap-32 lg:w-4/5">
        <Typography
          fontSize={"h2"}
          fontFamily={"futura"}
          fontWeight={"medium"}
          className="tracking-widest text-foreground max-lg:text-center"
        >
          PASSION
        </Typography>
        <div className="grid w-full grid-cols-1 place-content-evenly gap-16 max-lg:place-items-center lg:grid-cols-3">
          {passion.map((item) => (
            <div
              className="flex max-w-80 flex-col items-center gap-6"
              key={`passion-item-${item.title}`}
            >
              <Image
                src={item.imageURL}
                alt={item.title}
                className="aspect-square max-w-40"
                width={160}
                height={160}
              />
              <Typography
                fontFamily={"futura"}
                fontSize={"h3"}
                fontWeight={"semibold"}
                className="uppercase tracking-widest text-foreground"
              >
                {item.title}
              </Typography>
              <Typography
                fontSize={"body-l"}
                fontFamily={"inter"}
                className="text-justify text-muted-foreground"
              >
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
