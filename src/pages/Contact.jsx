import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="mx-auto px-6 py-15 sm:px-8 lg:px-12 flex items-center justify-center min-h-screen bg-[#041a4f]">
      <div className="flex justify-center flex-col items-center  ">
        <p className="mb-4 md:text-3xl text-xl text-yellow-400 font-bold uppercase tracking-widest">
          Plan Your Visit


        </p>

        <h1 className="text-xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
          We would love to worship with you.


        </h1>

        <p className="p-4 text-justify text-lg leading-8 text-white">
          Whether you're exploring faith or looking for a church family, you are welcome here.

        </p>

        <div className='flex gap-4 m-8 md:flex-row items-center'>

          <Link to="/plan-a-visit">

            <button className="bg-yellow-400 px-7 py-3 rounded-xl text-white font-bold hover:scale-105 transition duration-700 items-center">Contact Us</button>

          </Link>

          <Link to="/about/our-leaders">
            <button className="text-white border border-gray-400 px-2 md:px-4 py-3 rounded-2xl font-bold hover:scale-105 transition duration-700 flex gap-2 items-center">Meet Our Leaders</button>
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Contact