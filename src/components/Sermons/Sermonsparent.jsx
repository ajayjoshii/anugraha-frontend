// import React from 'react'
// import { Sermons } from '../../constants/Sermons'
// import SermonsChild from './SermonsChild'

// function Sermonsparent() {
//     return (
//         <div className='grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6  mr-15 rounded-sm'>

//             <div className='mx-3 md:mx-8 grid md:grid-cols-3 gap-5'>
//                 {
//                     Sermons.map((proj) => (
//                         <SermonsChild
//                             key={proj.id}
//                             images={proj.img}
//                             names={proj.name}
//                             subs={proj.sub}
//                             pastors={proj.pastor}
//                             buttons={proj.button}

//                         />

//                     ))
//                 }

//             </div>

//         </div>
//     )
// }

// export default Sermonsparent

import React, { useEffect, useState } from "react"
import SermonsChild from "./SermonsChild"
import API from "../../api/api"

function Sermonsparent() {
    const [sermons, setSermons] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSermons = async () => {
            try {
                const response = await API.get("/api/sermons")
                setSermons(response.data.data)
            } catch (error) {
                console.error("Failed to fetch sermons:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchSermons()
    }, [])

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading sermons...
            </div>
        )
    }

    return (
        <div className="grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6 mr-15 rounded-sm">
            <div className="mx-3 md:mx-8 grid md:grid-cols-3 gap-5">
                {sermons.map((proj) => (
                    // <SermonsChild
                    //     key={proj._id}
                    //     images={proj.img}
                    //     names={proj.name}
                    //     subs={proj.sub}
                    //     pastors={proj.pastor}
                    //     buttons={proj.button}
                    // />

                    <sermons
                        key={proj._id}
                        image={`${API.defaults.baseURL}${proj.img}`}
                        title={proj.position}
                        name={proj.name}
                        desc={proj.desc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sermonsparent