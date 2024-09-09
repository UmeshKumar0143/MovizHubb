import React from 'react';
import { VscClose } from 'react-icons/vsc';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom';

const Trailer = () => {
  const navigate = useNavigate();
  const { watchid } = useParams();

  return (
    <div className='w-full h-[150vh] absolute flex justify-center items-center bg-black bg-opacity-70 top-0'>
      <div className='w-[80%] h-[50%] -top-[25vh] relative'>
        <div className='absolute -top-[8vh] -right-[3vh] p-4'>
          <VscClose
            className='text-3xl font-medium hover:font-bold hover:cursor-pointer hover:scale-125 hover:text-zinc-50 text-zinc-400'
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="w-full h-full border border-zinc-400 p-1 hover:border-2">
          {watchid ? (
            <ReactPlayer 
              width='100%' 
              height='100%'  
              controls={true} 
              url={`https://www.youtube.com/watch?v=${watchid}`} 
            />
          ) : (
            <h1 className="text-zinc-50 text-center">No trailer available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trailer;
