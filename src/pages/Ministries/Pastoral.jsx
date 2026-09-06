import React from 'react'
import { FaBookOpen, FaCheck, FaCross } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Pastoral() {
  return (
    <div className='grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6  mr-15 rounded-sm'>
      <div className='bg-[#041a4f] flex flex-col items-center mt-16 min-h-100 text-white justify-center'>
        <h4 className='text-2xl text-yellow-400 font-bold tracking-tight p-4  sm:text-5xl lg:text-4xl' >Ministries</h4>
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl'>Pastoral Internship</h1>
        <p className="mb-4 pt-10 text-sm text-yellow-400 font-semibold uppercase tracking-widest">A practical ministry pathway for men preparing to serve the local church through pastoral ministry.





        </p>
      </div>

      <div className='flex items-center justify-center p-4 gap-6 md:flex-row flex-col'>
        <div className='flex flex-col gap-6 max-w-xl rounded-xl bg-yellow-50 p-6'>
          <FaCross className='text-4xl text-green-400' />
          <h1 className='font-bold text-3xl text-left'>Pastoral Internship</h1>
          <p className='text-sm'>The pastoral internship provides guided ministry experience, theological development, preaching opportunities, mentoring, and hands-on service within the local church.</p>
          <p className='flex flex-col p-6 text-sm rounded-2xl bg-blue-50  text-left'>
            <b className='text-xl'>Gathering Information</b>
            <span>Applications Open · By Appointment</span>
          </p>
        </div>
        <div>
          <h1 className='font-bold p-6 text-2xl'>Why Join?</h1>
          <ul className='bg-yellow-100 rounded-2xl p-2'>
            <li className='flex gap-2 items-center p-4'><FaCheck /><p>Biblical teaching</p></li>
            <li className='flex gap-2 items-center p-4'><FaCheck /><p>Prayer and encouragement
            </p></li>
            <li className='flex gap-2 items-center p-4'><FaCheck /><p>Meaningful fellowship</p></li>
            <li className='flex gap-2 items-center p-4'><FaCheck /><p>Opportunities to serve</p></li>
          </ul>
        </div>
      </div>

      <Link to='/plan-a-visit' className='text-left relative bottom-10 left-58'>

        <button className='bg-yellow-600 p-3 m-4 rounded-xl relative md:left-1 right-35 hover:scale-105 transition duration-500 text-white font-bold'>Get Connected</button>

      </Link>




    </div>
  )
}

export default Pastoral