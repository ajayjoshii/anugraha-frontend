import React from 'react'
import StatementOfFaithsChild from './StatementOfFaithsChild'
import { StatementOfFaith } from './../../constants/StatementOfFaith';

function StatementOfFaithparent() {
    return (
        <>
                 
            <div className='grid text-center grid-cols-1 md:grid-cols-1 gap-6 md:ml-10 md:mr-15 rounded-sm ml-4 mr-4'>
                {
                    StatementOfFaith.map((proj) => (
                        <StatementOfFaithsChild
                            key={proj.id}
                            num={proj.number}
                            names={proj.Name}
                            descs={proj.desc}
                            bibles={proj.bible}
                        />

                    ))
                }
            </div>
        </>
    )
}

export default StatementOfFaithparent