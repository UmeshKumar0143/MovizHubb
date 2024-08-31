import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosCall, IoMdVideocam } from "react-icons/io";
import { FaFire } from 'react-icons/fa';
import { RiSparklingLine } from 'react-icons/ri';
import { IoTv } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import { PiWarningCircleBold } from 'react-icons/pi';

const SIdeNav = () => {
  return (
    <div className='text-white ml-2 border-r pr-3 h-full'>
        <div className='Heading flex gap-8 px-4 py-2 border-b '>
            <  IoMdVideocam className='text-purple-500 text-4xl ' />
            <Link to={"/"} className='font-bold text-2xl  uppercase tracking-wider '>MoviezHuB</Link>
        </div>
        <div  className='Contents flex flex-col gap-3 mt-5 '>
            <Link to={'/trending'} className='mt-5 flex items-center gap-3 rounded hover:cursor-pointer hover:bg-purple-600 transition-all duration-100 px-3 py-6'>
                <FaFire className='text-2xl' />
                <Link to={"/trending"} className='text-2xl font-semibold  capitalize'>Trending</Link>
            </Link>
            <Link to={'/popular'} className='mt-5 flex items-center gap-3 rounded hover:cursor-pointer hover:bg-purple-600 transition-all duration-100 px-3 py-6'>
                <RiSparklingLine className='text-2xl' />
                <Link to={'/popular'} className='text-2xl font-semibold  capitalize'>Popular</Link>
            </Link>
            <Link to={'/tvshows'} className='mt-5 flex items-center gap-3 rounded hover:cursor-pointer hover:bg-purple-600 transition-all duration-100 px-3 py-6'>
                <IoTv className='text-2xl' />
                <Link className='text-2xl font-semibold  capitalize'>TV Shows </Link>
            </Link>
            <Link to={'/person'} className='mt-5 flex items-center gap-3 rounded hover:cursor-pointer hover:bg-purple-600 transition-all duration-100 px-3 py-6'>
                <BsPeopleFill className='text-2xl' />
                <Link className='text-2xl font-semibold  capitalize'>People</Link>
            </Link>
        </div>
        <div className='About border-t  mt-3'>
        <div className='mt-5 flex items-center gap-3 rounded hover:cursor-pointer hover:bg-zinc-800 transition-all duration-100 px-3 py-4'>
                <PiWarningCircleBold className='text-2xl' />
                <Link className='text-xl font-semibold  capitalize'>About</Link>
            </div>
        <div className='mt-5 flex items-center gap-3 rounded hover:cursor-pointer hover:bg-zinc-800 transition-all duration-100 px-3 py-4'>
                <IoIosCall className='text-2xl' />
                <Link className='text-2xl font-semibold  capitalize'>Contact Us </Link>
            </div>
        </div>
    </div>
  )
}

export default SIdeNav