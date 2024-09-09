import React from 'react'
import { TailSpin } from "react-loader-spinner";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroller";
import { RiUserStarFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Loader from './Loader';
const default_img = '/img/noimg.png'

const RealCards = ({page,getMovies,hasMore,movies, title}) => {
  return (
    <div
          className="Trending-Cards w-full z-[20]
         top-[23vh]  absolute h-[150vh]  mx-auto"
        >
          <InfiniteScroll
          pageStart={page} 
          loader={ <Loader />} 
          loadMore={getMovies}
          hasMore= {hasMore}
          >
          <div
            id="Cards-div"
            className="flex  text-white w-full flex-wrap  py-3 gap-10 relative   select-none  "
            >
            {movies.map((item, index) => (
              <Link to={`/${item.media_type || title }/${item.id}`}
                key={index}
                className=" hover:scale-105 transition-all ease-in-out duration-75  rounded-md hover:cursor-pointer  Cards w-[35vh] ml-4 min-h-[55vh] mt-4 hover:border-2 p-3 "
              >
                <div className="img-div w-full h-[45vh]">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${item.profile_path? item.profile_path: item.backdrop_path}  `}
                    onError={ (e) => {
                      e.target.error = null; 
                      e.target.src = default_img; 
                    }}
                    alt=""
                  />
                </div>
                <div className="px-2 py-2">
                  <h1 className="text-2xl mt-3 font-bold uppercase ">
                    {item.title ||
                      item.name ||
                      item.original_name ||
                      item.original_title}
                  </h1>

                </div>
              </Link>
            ))}
          </div>
          </InfiniteScroll>
        </div>
  )
}

export default RealCards