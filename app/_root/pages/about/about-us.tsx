import { Typography } from "@/components";
import React from "react";

export const AboutUs = () => {
  return (
    <div className="h-screen py-20 flex justify-center items-center">
      <div className="flex px-12 max-w-screen-2xl overflow-hidden w-full  h-max justify-between text-white">
        <div className="flex flex-col gap-6">
          <Typography
            fontFamily={"futura"}
            fontSize={"D1"}
            fontWeight={"medium"}
          >
            About Me
          </Typography>
          <div className="relative h-6 w-36">
            <div className="h-1 w-24 rounded-s-sm rounded-e-sm left-0 absolute top-0  bg-rose" />
            <div className="h-1 w-24 rounded-s-sm rounded-e-sm right-0 absolute bottom-0  bg-rose" />
          </div>
          {/* <Typography
            fontFamily={"futura"}
            fontSize={"h3"}
            fontWeight={"medium"}
          >
            sahilmakhija667@gmail.com
          </Typography> */}
        </div>
      </div>
    </div>
  );
};
