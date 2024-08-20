import { PageHeader, Typography } from "@/components";
import Link from "next/link";

export const Portfolio = () => {
  return (
    <PageHeader
      baseRoute="/"
      pageRoute="/portfolio"
      className="flex h-screen items-center justify-center py-20"
    >
      <div className="flex h-max w-full max-w-screen-2xl justify-between overflow-hidden px-12 text-white">
        <div className="flex max-w-72 flex-col gap-6">
          <Typography
            fontFamily={"futura"}
            fontSize={"D1"}
            fontWeight={"medium"}
          >
            Our <br />
            Works
          </Typography>
          <div className="relative h-6 w-36">
            <div className="absolute left-0 top-0 h-1 w-20 rounded-e-sm rounded-s-sm bg-rose" />
            <div className="absolute bottom-0 right-0 h-1 w-20 rounded-e-sm rounded-s-sm bg-rose" />
          </div>
          <Link href={"/contact"}>Show me more</Link>
        </div>
      </div>
    </PageHeader>
  );
};
