// import React from 'react'

// function StatementOfFaithsChild(props) {
//     return (
//         <div className="grid grid-cols-2 gap-2 md:ml-4 my-6 rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">


//             <div className="p-7 text-center">
//                <h1 className="mb-3 text-2xl font-semibold text-[#041a4f] transition-all duration-300">
//                     {props.num}
//                 </h1>

//                 <h1 className="mb-3 text-2xl font-semibold text-[#041a4f] transition-all duration-300">
//                     {props.names}
//                 </h1>

//                 <p className=" text-base text-justify leading-7 w-full text-gray-600 transition-colors duration-300  md:text-sm">
//                     {props.descs}
//                 </p>

//                 <p className=" text-base text-justify leading-7 text-gray-600 transition-colors duration-300  md:text-sm">
//                     {props.bibles}
//                 </p>
//             </div>

//         </div>
//     )
// }

// export default StatementOfFaithsChild

import React from "react";

function StatementOfFaithsChild(props) {
    return (
        <div className="my-6 rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            
            <div className="relative p-7">
                
                {/* Number - top left */}
                <span className="absolute bg-yellow-300 p-2 rounded-full top-5 left-13 text-xl font-bold text-[#041a4f]">
                    {props.num}
                </span>

                {/* Name + Description */}
                <div className="">
                    <h1 className="mb-2 md:text-2xl text-xl text-left ml-20 font-semibold text-[#041a4f]">
                        {props.names}
                    </h1>

                    <p className="w-full p-6 text-justify text-sm leading-10 text-gray-600 md:text-xl">
                        {props.descs}
                    </p>

                    <p className=" w-full p-4 text-justify text-sm leading-7 text-gray-600 md:text-sm">
                        {props.bibles}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default StatementOfFaithsChild;