import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
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
  )
}

export default Loader