import React from 'react'
import { FaArrowRight, FaStar } from 'react-icons/fa'

function Church_CovenantChild(props) {
    return (
        <>

            <div className="my-6 rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                <div className=" p-7">
                    

                    {/* Number - top left */}
                    <span className="absolute bg-yellow-300 p-3 md:text-xl rounded-full top-5 left-12 text-sm font-bold text-[#041a4f]">
                        {props.num}
                    </span>

                    {/* Name + Description */}
                    <div className="">
                        <h1 className="mb-2 text-xl md:text-2xl text-left ml-20 font-semibold text-[#041a4f]">
                            {props.names}
                        </h1>

                        <p className="w-full p-6 text-justify leading-10 text-gray-600 md:text-xl text-sm">
                            {props.descs}
                        </p>

                        <p className=" w-full p-4 text-justify text-sm leading-7 text-gray-600 md:text-sm">
                            {props.bibles}
                        </p>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Church_CovenantChild