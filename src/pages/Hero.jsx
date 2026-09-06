import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/praying.png')] bg-cover bg-center">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 max-w-5xl">

        {/* Heading */}
        <h1 className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-extrabold
          tracking-tight
          text-white
          drop-shadow-[0_3px_5px_rgba(255,255,255,0.5)]
          transition-all duration-700
          hover:scale-105
          cursor-default
        ">
          Welcome Home
        </h1>

        {/* Subtitle */}
        <p className="
          mt-5
          text-2xl sm:text-3xl md:text-4xl
          font-bold
          text-white
          tracking-wide
          transition-all duration-500
          hover:tracking-wider
        ">
          A place to Belong{" "}
          <span className="italic">
            A Faith to Live
          </span>
        </p>

        {/* Description */}
        <p className="
          mt-6
          max-w-3xl
          text-base sm:text-lg md:text-xl
          leading-relaxed
          text-white
          font-medium
          drop-shadow-[0_2px_3px_rgba(255,255,255,0.7)]
          transition-all duration-500
          hover:scale-[1.02]
        ">
          We are a Christ-centered church family seeking to know God,
          love people, grow together, and share the hope of the Gospel.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-9">

          <Link to="/plan-a-visit">
            <button
              className="
                group
                px-7 py-3.5
                rounded-full
                bg-green-500
                text-white
                font-bold
                shadow-lg
                shadow-green-500/30
                transition-all
                duration-500
                hover:scale-103
                active:scale-95
              "
            >
              Plan Your Visit
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>

          <Link to="/sermons">
            <button
              className="
                group
                px-7 py-3.5
                rounded-full
                border-2
                border-green-600
                text-white
                font-bold
                backdrop-blur-sm
                transition-all
                duration-500
                hover:scale-103
                hover:text-white
                active:scale-95
              "
            >
              Watch Sermons
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>

        </div>

        {/* Decorative line */}
        <div className="
          mt-10
          w-20 h-1
          bg-green-500
          rounded-full
          transition-all duration-500
          hover:w-32
        "></div>

      </div>
    </section>
  )
}

export default Hero