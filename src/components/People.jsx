import React, { useEffect, useState } from "react";
import { IoHome, IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroller";
import { RiUserStarFill } from "react-icons/ri";
import RealCards from "./RealCards";
const People = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)



  const getSearches = async (query) => {
    const { data } = await axios.get(`/search/multi?query=${query}`);
    setSearches(data.results || []);
};


  const getMovies = async () => {
    const { data } = await axios.get(`person/popular?page=${page}`);
    console.log(data.results[0].profile_path)
    if(data.results.length>0){
    setMovies((prev)=> [...prev,...data.results])
    setpage(page+1);
    }else{
      sethasMore(false)
    }
  };


  const refreshData = () =>{
    if(movies.length===0){
      getMovies();
    }else{
      setpage(1);
      setMovies([]);
      getMovies();
    }
  }


  useEffect(() => {
    if (query) {
      getSearches(query);
    } else {
      setSearches([]);
    }
  }, [query]);

  useEffect(()=>{
    refreshData();
  },[])

  return movies.length > 0 ? (
    <div className="w-full text-white relative h-full  ">
      <div className="TopBar flex h-[10%] gap-4  pb-4 items-center mt-2 w-full ">
        <div className="Home px-4 mt-3 py-2 gap-2 flex md:gap-5 items-center">
          <Link to={"/"}>
            <IoHome className="hover:text-purple-500 hover:scale-105 transition-all ease-in-out duration-75 text-xl xl:text-3xl  text-zinc-500" />
          </Link>
          <Link
            to={"/"}
            className="hover:text-purple-500 hover:scale-105 transition-all ease-in-out duration-75 text-zinc-500 text-xl xl:text-3xl font-bold uppercase"
          >
            Home
          </Link>
        </div>

        <div className="Search_Bar   flex justify-center items-center w-[40%] lg:w-[60%]">
          <div className=" Search-Bar  text-white flex flex-col relative">
            <div className="Search w-[20vh] md:w-[40vh] sm:w-[30vh] lg:w-[90vh] xl:w-[120vh]  mt-3 gap-3 flex justify-center items-center">
              <IoSearch className="text-3xl font-semibold" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-[80%] text-xl font-semibold outline-none px-5 py-2 focus:border-b bg-transparent"
                type="text"
                placeholder="Search anything ..."
              />
              <button onClick={() => setQuery("")}>
                <RxCross1 className="font-bold text-lg md:text-xl" />
              </button>
            </div>
            {query.length > 0 && (
              <div className="  z-[1000] Searches_Results w-[80%] flex flex-col overflow-hidden overflow-y-auto p-3 max-h-[40vh] bg-zinc-500 absolute lg:left-[12vh] left-[4vh]  top-16 gap-3 ">
                {searches.length > 0 ? (
                  searches.map((item, index) => (
                    <div
                      key={index}
                      className="Search-Item w-full flex md:gap-12 gap-4 py-5 px-4 hover:border-[1px] cursor-pointer bg-zinc-800"
                    >
                      <div className="Img-div bg-violet-500 w-[10%] sm:w-[15%] h-10 md:h-20">
                        <img 
                          className="rounded border-black w-full h-full object-cover shadow-sm"
                          src={`https://image.tmdb.org/t/p/original/${
                            item.backdrop_path || item.poster_path
                          }`}
                          alt="Loading..."
                        />
                      </div>
                      <div>
                        <h1 className="sm:text-2xl text-xs font-bold capitalize">
                          {item.title ||
                            item.name ||
                            item.original_name ||
                            item.original_title}
                        </h1>
                      </div>

                    </div>
                  ))
                ) : (
                  <h1 className="text-center sm:text-xl text-base">No results found</h1>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="People-Page w-full  mt-4 ml-14 ">
        <div className="w-full   pb-6">
          <h1 className="hover:text-purple-500 transition-all ease-in-out duration-75 text-zinc-200 text-2xl md:text-5xl  font-semibold uppercase">
            People
          </h1>
        </div>
       
        <RealCards movies={movies} page={page}  getMovies={getMovies} hasMore={hasMore}  />
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
      />
    </div>
  );
};

export default People;
