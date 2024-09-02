import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { IoSearch } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import Hero from './Hero';
import { Link } from 'react-router-dom';

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async (query) => {
    const { data } = await axios.get(`/search/multi?query=${query}`);
    setSearches(data.results || []);
  };


  useEffect(() => {
    if (query) {
      getSearches(query);
    } else {
      setSearches([]);
    }
  }, [query]);

  return (
    <>
    <div className="text-white flex flex-col relative">
      <div className="Search w-[150vh] mt-3 gap-3 flex justify-center items-center">
        <IoSearch className="text-3xl font-semibold" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[80%] text-xl font-semibold outline-none px-5 py-2 focus:border-b bg-transparent"
          type="text"
          placeholder="Search anything ..."
        />
        <button onClick={() => setQuery("")}>
          <RxCross1 className="font-bold text-xl" />
        </button>
      </div>
      {query.length > 0 && (
        <div className="  z-[100] Searches_Results w-[80%] flex flex-col overflow-hidden overflow-y-auto p-3 max-h-[40vh] bg-zinc-500 absolute top-16 gap-3 left-32">
          {searches.length > 0 ? (
            searches.map((item, index) => (
              <Link to={`/${item.media_type}/${item.id}`} key={index} className="Search-Item w-full flex gap-12 py-5 px-4 hover:border-[1px] cursor-pointer bg-zinc-800">
                <div className="Img-div w-[15%] h-20">
                  <img
                    className="rounded border-black w-full h-full object-cover shadow-sm"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}
                    alt="Loading..."
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold capitalize">
                    {item.title || item.name || item.original_name || item.original_title}
                  </h1>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="text-center text-xl">No results found</h1>
          )}
        </div>
      )}
    </div>
       
    </>
  );
};

export default TopNav;
