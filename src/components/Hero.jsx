import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
const Hero = () => {
  const [wallpaper, setWallpaper] = useState(null);

  const getWallpaper = async () => {
    const { data } = await axios.get("/trending/all/day");
    let RandomIndex = Math.floor(Math.random() * data.results.length);
    setWallpaper(data.results[RandomIndex]);
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);

  return wallpaper ? (
    <div className="w-[150vh]  mx-auto  text-white  mt-12 ">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), 
                      url('https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path} || ${wallpaper.profile_path}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-xl border-1 cursor-pointer transition-all ease-in-out duration-150 relative max-w-screen-lg mx-auto bg-slate-500 min-h-[60vh]"
      >
        <div className="">
          <h1 className="text-5xl w-full whitespace-wrap font-bold uppercase absolute top-1/3 left-[10vh] ">
            {wallpaper.title ||
              wallpaper.name ||
              wallpaper.original_name ||
              wallpaper.original_title}
          </h1>

          <p className="absolute  mt-[33vh] font-medium w-1/2 left-[10vh]">
            {wallpaper.overview.slice(0, 200)}{" "}
            <Link className="font-bold text-blue-400">more..</Link>
          </p>
        </div>
        <div>
          <button className="mt-[48vh] px-4 py-3 bg-transparent border-2 rounded-lg font-semibold capitalize hover:bg-purple-600 hover:font-bold hover:border-none  hover:scale-105 hover:text-base transition-all ease-in-out duration-75 left-[10vh] absolute">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
    <TailSpin
  visible={true}
  height="80"
  width="80"
  color="purple"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>
  );
};

export default Hero;

 