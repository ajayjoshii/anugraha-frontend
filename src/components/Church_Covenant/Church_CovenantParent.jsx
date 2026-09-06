import React from 'react'
import Church_CovenantChild from './Church_CovenantChild'
import { ChurchCovenant } from '../../constants/Church_Covenant'

function Church_CovenantParent() {
    return (
        <div className='grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6 md:mr-15 rounded-sm'>
            <div className='bg-[#041a4f] flex flex-col items-center mt-16 min-h-100 text-white justify-center'>
                <h4 className='text-2xl text-yellow-400 font-bold tracking-tight p-4  sm:text-5xl lg:text-4xl' >Our Covenant</h4>
                <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl'>हाम्रो मण्डलीको करार</h1>
                <p className="mb-4 pt-10 px-4 leading-8 text-sm text-justify text-yellow-400 font-semibold uppercase tracking-widest">परमेश्वर पिताको अनुग्रहद्वारा, प्रभु येशू ख्रीष्टमा विश्वास गरी र पवित्र आत्मामा निर्भर रही हामी फेथ कम्युनिटी बप्तिस चर्च परिवार, विश्वासद्वारा जिउनेछौं भनी हाम्रो यो करार एकअर्कासँग नवीकरण गर्दछौं।</p>
            </div>

            
            <div className='ml-4 mr-4'>
                {
                ChurchCovenant.map((proj) => (
                    <Church_CovenantChild
                        key={proj.id}
                        num={proj.number}
                        names={proj.Name}
                        descs={proj.desc}
                        bibles={proj.bible}
                    />

                ))
            }

            </div>
            
        </div>
    )
}

export default Church_CovenantParent