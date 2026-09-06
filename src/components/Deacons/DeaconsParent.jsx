// import React from 'react'
// import { Deacons } from '../../constants/Deacon'
// import DeaconsChild from './DeaconsChild'

// function DeaconsParent() {
//     return (
//         <>
//             <h1 className=' text-[#041a4f]  text-center font-bold text-4xl'>Deacon
//             </h1>
//             <p className="text-center p-4">Faithful servants helping care for the practical needs and ministry of our church family.



//             </p>
//             <div className='grid md:grid-cols-2 gap-6 md:ml-10 md:mr-15 ml-4 mr-4 rounded-sm '>
//                 {
//                     Deacons.map((proj) => (
//                         <DeaconsChild
//                             key={proj.id}
//                             images={proj.img}
//                             titles={proj.position}
//                             names={proj.name}
//                             descs={proj.desc}
//                         />

//                     ))
//                 }
//             </div>
//         </>
//     )
// }

// export default DeaconsParent



import React, { useEffect, useState } from "react";
import { getLeaders } from "../../api/api";
import DeaconsChild from "./DeaconsChild";

function DeaconsParent() {
    const [deacons, setDeacons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getLeaders()
            .then((response) => {
                console.log("Deacons API:", response.data);

                setDeacons(response.data.results);

                setLoading(false);
            })
            .catch((error) => {
                console.log("Deacons Error:", error);

                setError("Failed to load deacons");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                <p>Loading deacons...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-[#041a4f] text-center font-bold text-4xl">
                Deacon
            </h1>

            <p className="text-center p-4">
                Faithful servants helping care for the practical needs and ministry
                of our church family.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-10 md:mr-15 ml-4 mr-4 rounded-sm">
                {deacons.map((deacon) => (
                    <DeaconsChild
                        key={deacon.id}
                        images={deacon.image}
                        titles={deacon.position}
                        names={deacon.name}
                        descs={deacon.description}
                    />
                ))}
            </div>
        </>
    );
}

export default DeaconsParent;