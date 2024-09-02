import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadMovie } from '../store/actions/movieActions';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { LuExternalLink } from 'react-icons/lu';
import { FaEarthAmericas } from 'react-icons/fa6';
import { TfiAnnouncement } from 'react-icons/tfi';
import { TailSpin } from 'react-loader-spinner';
import { removeMovie } from '../store/reducers/movieSlice';

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
      ) : (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), 
                        url('https://image.tmdb.org/t/p/original/${info.details.backdrop_path}')`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-full"
        >
          <div className='top-div w-full py-3 mt-3 items-center px-3'>
            <div className='Icons flex items-center gap-16'>
              <IoArrowBack onClick={() => navigate(-1)} className='hover:scale-110 transition-all duration-100 ease-in-out hover:cursor-pointer hover:text-purple-500 text-3xl' />
              <LuExternalLink className='hover:scale-110 transition-all duration-100 ease-in-out hover:cursor-pointer hover:text-purple-500 text-3xl' />
              <FaEarthAmericas className='hover:scale-110 transition-all duration-100 ease-in-out hover:cursor-pointer hover:text-purple-500 text-3xl' />
              <span className='hover:scale-110 transition-all duration-100 ease-in-out hover:cursor-pointer hover:text-purple-500 text-3xl'>IMDB</span>
            </div>
          </div>
         
          <div className='heading mt-12 ml-16  flex items-center gap-5 w-[140vh]'>
            <div className='img-detail  w-[50vh]'>
              <img  className='w-full hover:cursor-pointer hover:scale-105 transition-all duration-100  rounded-md border h-[45vh]' src={`https://image.tmdb.org/t/p/original/${info.details.backdrop_path}`} alt="" />
            </div>
            <div className='text-details'>
            <h1 className='text-6xl font-bold uppercase'>
              {info.details.title ||
                info.details.name ||
                info.details.original_name ||
                info.details.original_title}
            </h1>

            <div className='flex items-center gap-5 mt-3'>
              <h4 className='text-lg flex items-center gap-2'>
                <span><TfiAnnouncement className='text-yellow-400 fill-yellow-400' /></span>
                Release on: <span className='font-medium'>{info.details.release_date}</span>
              </h4>

              <h4 className='text-lg font-medium items-center flex'>
                Genre: <span className=''>{info.details.genres.map(item => <span key={item.id} className='ml-2'>{item.name},</span>)}</span>
              </h4>

              <h4 className='Rating text-lg font-medium'>
                Rating: <span>{info.details.vote_average}</span>
              </h4>
            </div>

            <div className='desc mt-4 w-[100vh]'>
              <p className='text-xl font-semibold'>{info.details.overview}</p>
            </div>

            <div className='watchtrailer mt-8'>
              <button className='px-4 py-3 hover:bg-purple-700 bg-purple-600 rounded-md font-semibold'>Watch Trailer</button>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
