import { Typography } from "@/components";

export const Home = () => {
  return (
    <div
      style={{ scrollSnapAlign: "start" }}
      id="home"
      className="h-screen border py-20 flex items-center justify-center"
    >
      <div className="flex justify-between max-w-screen-2xl h-full items-center w-full text-white">
        <div>
          <Typography
            fontFamily={"inverse"}
            className="border rounded-md px-2"
            fontSize={"h1"}
          >
            Creative Marketing Agency
          </Typography>
        </div>
      </div>
      <div />
    </div>
  );
};
