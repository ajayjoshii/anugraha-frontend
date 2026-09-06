import React from 'react'

function SermonsChild(props) {
    return (
        <>

            <div className="my-6 rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative p-5 text-center max-h-160">
                    {/* Number - top left */}
                    {/* <span className="absolute bg-yellow-300 p-3 rounded-full top-5 left-12 text-xl font-bold text-[#041a4f]">
                        {props.num}
                    </span> */}

                    {/* Name + Description */}
                    <div className="flex flex-col items-center justify-center text-center">

                        <img src={props.images} alt="" className='rounded-xl' />


                        <h1 className="mb-2 text-xl pt-4 md:text-2xl font-bold text-[#041a4f]">
                            {props.names}
                        </h1>

                        <p className="w-full  text-xl leading-10 text-gray-600 md:text-xl text-center">
                            {props.subs}
                        </p>

                        <p className=" w-full text-base leading-7 text-gray-600  md:text-sm">
                            {props.pastors}
                        </p>

                        <p className="text-yellow-300 p-4 font-semibold text-left">
                            {props.buttons}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SermonsChild