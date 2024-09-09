import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadMovie } from '../store/actions/movieActions';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { LuExternalLink } from 'react-icons/lu';
import { FaEarthAmericas } from 'react-icons/fa6';
import { TfiAnnouncement } from 'react-icons/tfi';
import { TailSpin } from 'react-loader-spinner';
import { removeMovie } from '../store/reducers/movieSlice';
import Cards from './Cards';
import { FaPlayCircle } from 'react-icons/fa';
import Loader from './Loader';

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id, type } = useParams();
  
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(asyncLoadMovie(id, type)).then(() => setLoading(false));
    return () =>{
      dispatch(removeMovie());
    }
  }, [dispatch, id, type]);

  return (
    <div key={`${id}-${type}`} className='text-white w-full h-full '>
      {loading || !info ? (
        <Loader />
      ) : (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), 
                        url('https://image.tmdb.org/t/p/original/${info.details.backdrop_path}')`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[90vh] relative "
        >
          <div className='top-div w-full py-3 mt-3 items-center px-3'>
            <div className='Icons flex items-center gap-16'>
              <IoArrowBack onClick={() => navigate(-1)} className='hover:scale-110 transition-all duration-100 ease-in-out hover:cursor-pointer hover:text-purple-500 text-3xl' />
            </div>
          </div>
         
          <div className='heading mt-12 ml-16  flex items-center gap-5 w-[140vh]'>
            <div className='img-detail p w-[60vh] '>
              <img  className='w-full hover:cursor-pointer hover:scale-105 transition-all duration-100  rounded-md border h-[50vh]' src={`https://image.tmdb.org/t/p/original/${info.details.backdrop_path}`} alt="" />
            </div>
            <div className='text-details'>
            <h1 className='text-6xl font-bold uppercase'>
              {info.details.title ||
                info.details.name ||
                info.details.original_name ||
                info.details.original_title}
            </h1>

            <div className='flex items-center gap-5 mt-3  w-[109fvh]'>
              <h4 className='text-lg flex items-center gap-2'>
                <span><TfiAnnouncement className='text-yellow-400 fill-yellow-400' /></span>
                Release on: <span className={`font-medium ${info.details.release_date? "text-zinc-200" : "text-zinc-400"}`} >{info.details.release_date || "Not Avialable"}</span>
              </h4>

              <h4 className='text-lg font-medium items-center flex'>
                Genre: <span className={`font-medium ${info.details.genres? "text-zinc-200" : "text-zinc-400"}`}>{info.details.genres.map(item => <span key={item.id} className='ml-2'>{item.name},</span>)}</span>
              </h4>

              <h4 className='Rating text-lg font-medium'>
                Rating: <span className={`font-medium ${info.details.vote_average? "text-zinc-200" : "text-zinc-400"}`} >{info.details.vote_average}</span>
              </h4>
            </div>

            <div className='desc mt-4 w-[100vh]'>
              <p className='text-xl font-semibold'>{info.details.overview}</p>
            </div>

            <div className='watchtrailer mt-8'>
              <Link to={`trailer/${info.videos.key}`} className='w-[20vh] py-3 hover:bg-purple-700 bg-purple-600 rounded-md font-semibold flex justify-center items-center gap-2'><span className='text-xl'><FaPlayCircle/></span> Watch Trailer</Link>
            </div>
          </div>
          </div>
          <div className='w-full flex  justify-center items-center'>
          <Cards info = {info}/>
          </div>
          <Outlet/>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
