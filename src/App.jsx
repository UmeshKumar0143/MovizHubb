import React from 'react'
import SIdeNav from './components/SIdeNav'
import { Link } from 'react-router-dom'
const App = () => {
  return (
   <div className='w-full h-screen flex bg-zinc-900'>
    <div className='Left-Part border-r w-[30%] p-4 h-full   '>
      <SIdeNav/> 
      </div>
      <div className='Right-Part w-full   h-full  '>

      </div>
   </div>
  )
}

export default App