import React from 'react'
import Pastoral from '../../components/Pastoral'
import DeaconsParent from '../../components/Deacons/DeaconsParent'
import StatementOfFaithparent from '../../components/StatementOfFaith/StatementOfFaithparent'

function Statementfaith() {
  return (
    <section className="bg-white ">
      <div className="mx-auto px-6 py-20 sm:px-8 lg:px-12 bg-blue-900">
        <div className="flex justify-center flex-col items-center min-w-screen  ">
          <p className="mb-4 text-sm pt-10 text-yellow-400 font-semibold uppercase tracking-widest">
            About Our Church
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            हाम्रो विश्वासको सार
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-white">
            फेथ कम्युनिटी बप्तिस चर्चको विश्वासको सार यस प्रकारको रहेको छ।
          </p>
        </div>

      </div>

      <StatementOfFaithparent/>




    </section>
  )
}

export default Statementfaith