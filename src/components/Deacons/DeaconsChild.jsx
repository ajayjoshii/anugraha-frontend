import React from 'react'

function DeaconsChild(props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:ml-4 my-6 w-full max-w-160 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="relative overflow-hidden ">
                <img
                    src={props.images}
                    alt={props.titles}
                    className="md:h-83 h-102 w-full transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500" />

                <h1 className="text-xl rounded-sm w-45 py-1 font-semibold  text-center transition-all duration-300 text-white relative sm:left-15 bottom-15 left-28 bg-[#041a4f]">
                    {props.titles}
                </h1>
            </div>

            <div className="p-7">
                {/* <h1 className="text-xl rounded-sm w-45 py-1 font-semibold  text-center transition-all duration-300 text-white sm:relative sm:top-69 sm:right-70 bg-[#041a4f]">
                    {props.titles}
                </h1> */}

                <h1 className="mb-3 relative bottom-14 md:top-1 text-2xl font-semibold text-[#041a4f] transition-all duration-300">
                    {props.names}
                </h1>

                <p className=" text-base text-justify leading-7 text-gray-600 transition-colors duration-300  md:text-sm">
                    {props.descs}
                </p>
            </div>

        </div>
    )
}

export default DeaconsChild