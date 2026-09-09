// import { PastoralTeam } from "../constants/PastoralTeam"
// import PastoralTeams from "./PastoralTeam"

// function Pastoral() {
//     return (
//         <>
//             <h5 className="text-center pt-4">PASTORAL TEAM</h5>
//             <h1 className=' text-[#041a4f]  text-center font-bold text-4xl'>Serving the Church
//             </h1>
//             <p className="text-center p-4">Our pastoral team serves with humility, biblical conviction, and a heart for God's people.

//             </p>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-10 ml-6 mr-6 md:mr-17 rounded-sm '>
//                 {
//                     PastoralTeam.map((proj) => (
//                         <PastoralTeams
//                             key={proj.id}
//                             image={proj.img}
//                             title={proj.position}
//                             name={proj.name}
//                             desc={proj.desc}
//                         />

//                     ))
//                 }
//             </div>
//         </>
//     )
// }

// export default Pastoral

import React, { useEffect, useState } from "react"
import PastoralTeams from "./PastoralTeam"
import API from "../api/api"

function Pastoral() {
    const [pastoralTeam, setPastoralTeam] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPastoralTeam = async () => {
            try {
                const response = await API.get("/api/pastoral")

                console.log("Pastoral API response:", response.data)

                const data = Array.isArray(response.data)
                    ? response.data
                    : Array.isArray(response.data.data)
                        ? response.data.data
                        : []

                setPastoralTeam(data)
            } catch (error) {
                console.error("Failed to fetch pastoral team:", error)
                setPastoralTeam([])
            } finally {
                setLoading(false)
            }
        }

        fetchPastoralTeam()
    }, [])

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading pastoral team...
            </div>
        )
    }

    return (
        <>
            <h5 className="text-center pt-4">
                PASTORAL TEAM
            </h5>

            <h1 className="text-[#041a4f] text-center font-bold text-4xl">
                Serving the Church
            </h1>

            <p className="text-center p-4">
                Our pastoral team serves with humility, biblical conviction,
                and a heart for God's people.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-10 ml-6 mr-6 md:mr-17 rounded-sm">
                {pastoralTeam.map((proj) => (
                    // <PastoralTeams
                    //     key={proj._id}
                    //     image={proj.img}
                    //     title={proj.position}
                    //     name={proj.name}
                    //     desc={proj.desc}
                    // />
                    <PastoralTeams
                        key={proj._id}
                        image={`${API.defaults.baseURL}${proj.img}`}
                        title={proj.position}
                        name={proj.name}
                        desc={proj.desc}
                    />
                ))}
            </div>
        </>
    )
}

export default Pastoral