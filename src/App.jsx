import React from 'react'
import SIdeNav from './components/SIdeNav'
import {Route,Routes,Router, Link } from 'react-router-dom'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import TvShows from './components/TvShows'
import People from './components/People'
import MovieDetails from './components/MovieDetails'
import Tv from './components/Tv'
import Persondetails from './components/Persondetails'


const App = () => {
  return (
   <div className='w-full h-[135vh] flex  bg-zinc-900'>
    <Routes>
        <Route path='/'  element= {<Home/>}></Route>
        <Route path='/trending' element={<Trending/>}></Route>
        <Route path='/trending/:type/:id' element={<MovieDetails/>}></Route>
        <Route path='/popular' element={<Popular/>} ></Route>
        <Route path='/popular/:type/:id' element={<MovieDetails/>}></Route>
        <Route path='/tvshows' element={<TvShows/>}></Route>
        <Route path='/tv/:type/:id' element={<Tv/>}></Route>
        <Route path='/person' element={<People/>}></Route>
        <Route path='/person/:type/:id' element={<Persondetails/>}></Route>
   </Routes>
   </div>
      
      
  ) 
}

export default App