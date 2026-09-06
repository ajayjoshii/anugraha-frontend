import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../constants/Navlinks'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)


  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <nav className='bg-[#000c3d] text-white  fixed w-full h-17 z-20 border-b-2 border-gray-400'>
      <div className='flex justify-between items-center'>
        <NavLink to="/" className="flex gap-2 hover:scale-105 duration-700 ease-in-out items-center ml-6">
          <img src="/logos.jpg" alt="logo" className='h-15 w-15' />

          <h1 className='font-bold text-center text-sm'>Anugraha <br /> Church</h1>
        </NavLink>
        <button onClick={() => setOpen(!open)} className='font-bold md:hidden bg-blue-400 px-3 hover:scale-105 py-3 transition duration-500 ease-in-out relative right-4'>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>


        <ul className='sm:flex hidden gap-6 mr-8 font-semibold items-center'>

          {navLinks.map((link, index) => (

            <li key={index} className='relative hover:scale-105 duration-700'>

              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setDropdown(dropdown === link.name ? null : link.name)
                    }
                    className='cursor-pointer transition'
                  >
                    {link.name} ▼
                  </button>

                  {dropdown === link.name && (
                    <ul className='absolute top-11 left-0 bg-white text-black shadow-lg rounded w-48 p-2 z-50'>

                      {link.submenu.map((item, index) => (
                        <li
                          key={index}
                          className='p-2 hover:bg-gray-200 rounded'
                        >
                          <Link
                            to={item.path}
                            onClick={() => {
                              setDropdown(null),
                                ScrollTop


                            }


                            }
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  )}
                </>
              ) : (
                <Link onClick={ScrollTop} to={link.path}>
                  {link.name}
                </Link>
              )}

            </li>

          ))}

        </ul>


        <Link to="/plan-a-visit" className='relative right-40 text-centerm hidden'>
          <p className='text-sm rounded text-[#041a4f] font-bold bg-white hover:scale-105 duration-700 w-30 p-2'>Plan a Visit</p>

        </Link>

        <Link to="/admin/login" className='relative right-40 text-center'>
          <p className='text-sm rounded text-[#041a4f] font-bold bg-white hover:scale-105 duration-700 w-30 p-2'>Login</p>

        </Link>

      </div>

      {
        open && (
          <>

            <ul className="md:hidden bg-zinc-100 text-black
      flex flex-col
      gap-2 md:gap-7
      md:mr-80
      font-semibold
      w-full md:w-auto h-85
      items-start md:items-center absolute top-17
     md:mt-0
      p-3 md:p-0
       md:rounded-none
       md:bg-transparent
    
      border border-white/20 md:border-0
      shadow-xl md:shadow-none
    ">

              {navLinks.map((link, index) => (
                <li key={index} className="relative w-full md:w-auto text-black">

                  {link.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setDropdown(
                            dropdown === link.name ? null : link.name
                          )
                        }
                        className="
                  group
                  flex items-center gap-2
                  px-4 py-3 md:px-0 md:py-2
                  rounded-xl md:rounded-none
                  
                  transition-colors duration-300
                  hover:text-yellow-400
                "
                      >
                        <span className="relative">
                          {link.name}

                          {/* Underline only under text */}
                          <span className="
                    absolute
                    left-0
                    -bottom-1
                    h-0.5
                    w-0
                    rounded-full
                    bg-linear-to-r
                    from-yellow-300
                    to-orange-500
                    shadow-[0_0_8px_rgba(250,204,21,0.7)]
                    transition-all
                    duration-500
                    group-hover:w-full text-black
                  " />
                        </span>

                        <span
                          className={`
                    text-xs
                    transition-transform
                    duration-300
                    ${dropdown === link.name ? "rotate-180" : ""}
                  `}
                        >
                          ▼
                        </span>
                      </button>

                      {dropdown === link.name && (
                        <ul className=" text-black
                      absolute left-30 top-1
                  md:absolute
                  md:top-12
                  md:left-1/2
                  w-40 md:w-56
                  mt-2 md:mt-0
                  p-2
                  rounded-sm
                  bg-white/95
                  backdrop-blur-xl
                  border border-gray-200
                  shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                  z-50
                  animate-[dropdown_0.3s_ease-out]
                ">
                          {link.submenu.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.path}
                                onClick={() => {
                                  setDropdown(null);
                                  ScrollTop();
                                  setOpen(false)
                                }}
                                className="
                          group/item
                          block
                          px-4 py-3
                          rounded-xl
                          text-black
                          text-sm
                          transition-colors
                          duration-300
                          hover:bg-blue-50
                          hover:text-blue-900
                        "
                              >
                                <span className="relative inline-block">
                                  {item.name}

                                  {/* Underline only under text */}
                                  <span className="
                            absolute
                            left-0
                            -bottom-1 text-black
                            h-0.5
                            w-0
                            rounded-full
                            bg-yellow-500
                            transition-all
                            duration-300
                            group-hover/item:w-full
                          " />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                    </>
                  ) : (
                    <Link
                      onClick={() => {
                        ScrollTop();
                        setOpen(false)


                      }



                      }
                      to={link.path}
                      className="
                group
                inline-block
                px-4 py-3
                md:px-0 md:py-2
                rounded-xl md:rounded-none
                
                transition-colors
                duration-300
                hover:text-yellow-400
              "
                    >
                      <span className="relative inline-block">
                        {link.name}

                        {/* Underline only under text */}
                        <span className="
                  absolute
                  left-0
                  -bottom-1
                  h-0.5
                  w-0
                  rounded-full
                  bg-linear-to-r
                  from-yellow-300
                  to-orange-500
                  shadow-[0_0_8px_rgba(250,204,21,0.7)]
                  transition-all
                  duration-500 text-black
                  group-hover:w-full
                " />
                      </span>
                    </Link>
                  )}

                </li>
              ))}

            </ul>

            <Link to="/admin/login" className='relative right-40 text-center'>
              <p className='text-sm rounded text-[#041a4f] font-bold bg-white hover:scale-105 duration-700 w-30 p-2'>Login</p>

            </Link>

          </>
        )
      }



    </nav>
  )
}

export default Navbar
