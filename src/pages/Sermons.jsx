import React from 'react'
import Sermonsparent from '../components/Sermons/Sermonsparent'

function Sermons() {
  return (
    <div className='grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6  mr-15 rounded-sm'>
      <div className='bg-[#041a4f] flex flex-col items-center mt-16 min-h-80 text-white justify-center'>
        <h4 className='text-2xl text-yellow-400 tracking-tight p-4  sm:text-5xl lg:text-4xl' >Sermons</h4>
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl'>Sermons</h1>
        <p className="mb-4 pt-10 text-sm tracking-widest">Biblical preaching designed to help us know Christ, understand Scripture, and live faithfully.


        </p>
      </div>
      <Sermonsparent/>

    </div>
  )
}

export default Sermons