'use client'

import Design from './Design'
import { Link } from 'react-scroll'
import { HiMinus } from 'react-icons/hi'
import { useRef, useState } from 'react'

function Banner() {
  const ref = useRef<string | any>('')
  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setMenu(false)
    }
  }
  const [menu, setMenu] = useState(false)
  return (
    <section id="home" className="w-full h-[800px] relative text-white">
      <Design />
      <div className="absolute left-0 top-0 w-full h-[800px] bg-black bg-opacity-10 ">
        <nav className="w-full px-16 py-6 flex justify-between fixed top-0 z-40 bg-black bg-opacity-25">
          <h1 className="font-bodyFont text-4xl text-white font-extrabold border-2 w-12 text-center">
            S
          </h1>
          <div
            onClick={() => setMenu(true)}
            className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer"
          >
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </nav>
        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-black">
            I&apos;m Filippe Braga
          </h1>
          <div className="flex items-center gap-2 md:gap-6 text-base md:text-xl font-bold bg-designColor px-6 py-3 uppercase">
            <h2 className="tracking-[4px]">Programmer</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">Designer</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">3D Creator</h2>
          </div>
        </div>
      </div>
      {menu && (
        <div
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
          className="w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-50"
        >
          <div className="w-full md:w-[60%] lg:w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center">
            <div className="w-4/5 px-12">
              <div>
                <ul className="flex flex-col gap-2">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Home
                    </li>
                  </Link>

                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      About
                    </li>
                  </Link>

                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Portfolio
                    </li>
                  </Link>

                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Testimonial
                    </li>
                  </Link>

                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="text-lg font-thin mt-32">
                <p>For project enqueries</p>
                <p>
                  or say &lsquo;Hello&lsquo; -{' '}
                  <span className="font-semibold text-designColor">
                    webdevfibr@protonmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="w-1/5 h-full border-1-[1px] text-center flex items-center justify-center">
              <button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-designColor"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Banner
