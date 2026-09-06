import React from 'react'

function PastoralTeams(props) {
    return (
        <div className="grid md:grid-cols-2 gap-2 md:ml-4 my-3 w-full max-w-200 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="relative overflow-hidden ">
                <img
                    src={props.image}
                    alt={props.title}
                    className="h-60 md:h-92 w-full max-w-md sm:w-full transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500" />
            </div>

            <div className="p-7">
                <h1 className=" text-xl relative bottom-27 sm:ml-0 ml-25 md:top-62 md:right-70 rounded-sm w-45 py-1 font-semibold text-white text-center transition-all duration-300 bg-[#041a4f]">
                    {props.title}
                </h1>

                <h1 className="relative md:bottom-2 bottom-10 text-2xl font-semibold text-[#041a4f] transition-all duration-300">
                    {props.name}
                </h1>

                <p className=" text-base relative md:bottom-0 bottom-7 text-justify leading-7 text-gray-600 transition-colors duration-300  md:text-sm">
                    {props.desc}
                </p>
            </div>

        </div>
    )
}

export default PastoralTeams