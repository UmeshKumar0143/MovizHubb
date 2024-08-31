import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import TopNav from './TopNav'
import SIdeNav from './SIdeNav'

const Home = () => {
  return (
    <div className='w-full h-full flex'>
      <div className="LeftPart w-[30%] p-4 h-full ">
        <SIdeNav/>
      </div>
    <div className='RightPart w-full h-full '>
        <TopNav/>
        <Hero />
        <Cards />
    </div>
    </div>
  )
}

export default Home 