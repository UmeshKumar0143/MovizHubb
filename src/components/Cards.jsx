import React, { useEffect, useState } from "react";
import axios from '../utils/axios'
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
const default_img = '/img/noimg.png'


const Cards = ({info}) => {
const  [movies, setMovies] = useState([])
const [filter, setFilter] = useState("all");
    const getMovies = async() => {
        const {data} = await axios.get(`/trending/${filter}/day`);
        setMovies(data.results);
    }

const SlideLeft  = () => {
 var slider = document.getElementById('Cards-div')
 slider.scrollBy({
  left: -1000,
  behavior: "smooth"
 })
}
const SlideRight  = () => {
 var slider = document.getElementById('Cards-div')
 slider.scrollBy({
  left: 300,
  behavior: "smooth"
 })
}

    
useEffect(()=>{
    getMovies();
},[filter])
  return movies.length || info >0 ?  (
    <div className="text-white ">
      <div id="Fiter-div" className={` flex overflow-hidden  ${info?"w-[200vh]":"w-[166vh]"} justify-between   items-center py-1 border-b`}>
        <div >
          <h1 className="text-2xl uppercase font-bold ml-3 mt-4">{info? <h1>Recommended</h1>: <h1>Home</h1>}</h1>
        </div>
        <div className={`${info? "hidden" : "flex"} gap-5 justify-center items-center mr-10`}>
          <label
            className="text-xl font-semibold text-zinc-300"
            htmlFor="filter"
          >
            Filter
          </label>
          <select onChange={(e)=>setFilter(e.target.value)}  className="text-white bg-black p-1" name="filter" id="filter">
            <option className="text-white font-semibold bg-black" value="all">
              All
            </option>
            <option className="text-white font-semibold bg-black" value="tv">
              TV-shows
            </option>
            <option
              className="text-white font-semibold bg-black"
              value="movie"
            >
              Movies
            </option>
          </select>
        </div>
      </div>
      <MdChevronLeft   onClick={SlideLeft} size={50} className= {`absolute top-[97vh] ${info? "left-[1vh]":"left-[40vh]"} z-[100] rounded-full px-2 hover:cursor-pointer hover:bg-purple-500`} />
      <MdChevronRight  onClick={SlideRight} size={50} className=" absolute top-[97vh] z-[100]  right-[4vh] rounded-full px-2 hover:cursor-pointer hover:bg-purple-500" />

      <div id="Cards-div" className={`flex  overflow-hidden ${info? "w-[200vh]": "w-[160vh]"} py-3 gap-2 relative ${info? "h-[65vh]": "h-[55vh]"} h-[55vh] select-none  `}>
     
     
     
      {info? info.similar.map((item,index)=>
         <div key={index} className=" hover:scale-105 transition-all ease-in-out duration-75  rounded-md hover:cursor-pointer  Cards min-w-[35vh] ml-2 h-[45vh] mt-2 ">
      <Link to={`/trending/${item.media_type || 'movie' || 'tv'}/${item.id}`} className="img-div w-full  h-[24vh]">
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path} || ${item.profile_path}`} onError={(e)=>
          {e.target.error = null,
          e.target.src = default_img}
        } alt="" />
      </Link>
      <div className='px-2 py-2'>
                <h1 className='text-2xl font-bold uppercase '>{item.title || item.name || item.original_name || item.original_title}</h1>

                {!info&&  <p className=' mt-2 font-medium '>{item.overview.slice(0,80)} <Link className='font-bold text-blue-400'>more..</Link></p>}
            </div>
      </div>):movies.map((item,index)=> <div key={index} className=" hover:scale-105 transition-all ease-in-out duration-75  rounded-md hover:cursor-pointer  Cards min-w-[35vh] ml-2 h-[45vh] mt-2 ">
      <Link to={`/trending/${item.media_type}/${item.id}`} className="img-div w-full  h-[24vh]">
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path} || ${item.profile_path}`} alt="" />
      </Link>
      <div className='px-2 py-2'>
                <h1 className='text-2xl font-bold uppercase '>{item.title || item.name || item.original_name || item.original_title}</h1>

                {!info&&  <p className=' mt-2 font-medium '>{item.overview.slice(0,80)} <Link className='font-bold text-blue-400'>more..</Link></p>}
            </div>
      </div>)}
      
      </div>
     
    </div>
  ):  <div className="w-full h-full flex justify-center items-center">
  <TailSpin
visible={true}
height="80"
width="80"
color="purple"
ariaLabel="tail-spin-loading"
radius="1"
wrapperStyle={{}}
wrapperClass=""
/></div>;
};

export default Cards;
