import React from 'react'
import { FaCheck, FaLeaf } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Ladies_Bible() {
  return (
    <div className='grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6  mr-15 rounded-sm'>
      <div className='bg-[#041a4f] flex flex-col items-center mt-16 min-h-100 text-white justify-center'>
        <h4 className='text-2xl text-yellow-400 font-bold tracking-tight p-4  sm:text-5xl lg:text-4xl' >Ministries</h4>
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl'>Our Ladies Bible Studies</h1>
        <p className="mb-4 pt-10 text-sm text-yellow-400 font-semibold uppercase tracking-widest">A welcoming space for women to study Scripture, pray together, and encourage one another.

        </p>
      </div>

      <div className='flex items-center flex-col md:flex-row justify-center p-4 gap-6'>
        <div className='flex flex-col gap-6 max-w-xl rounded-xl bg-yellow-50 p-6'>
          <FaLeaf className='text-2xl md:text-4xl text-green-400' />
          <h1 className='font-bold text-3xl text-left'>Our Ladies Bible Studies</h1>
          <p className='text-sm'>We gather regularly to open God's Word, share life honestly, pray for one another, and grow in Christ together.</p>
          <p className='flex flex-col p-6 text-sm rounded-2xl bg-blue-50  text-left'>
            <b className='text-xl'>Gathering Information</b>
            <span>Wednesdays · 6:30 PM</span>
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

        <button className='bg-yellow-600 p-3 m-4 relative right-35 md:left-0.5 rounded-xl hover:scale-105 transition duration-500 text-white font-bold'>Get Connected</button>

      </Link>




    </div>

  )
}

export default Ladies_Bible