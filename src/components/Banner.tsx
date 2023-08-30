'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'
import { HiMinus } from 'react-icons/hi'
import Design from './Design'
import ScrollLink from './ScrollLink'

function Banner() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [navColor, setnavColor] = useState<string>('transparent')
  const [menu, setMenu] = useState<boolean>(false)

  function handleClick(event: MouseEvent<HTMLDivElement>): void {
    if (
      event.target instanceof Element &&
      ref.current?.contains(event.target)
    ) {
      setMenu(false)
    }
  }

  const listenedScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#000') : setnavColor('transparent')
  }

  useEffect(() => {
    window.addEventListener('scroll', listenedScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenedScrollEvent)
    }
  }, [])

  return (
    <section id="home" className="w-full h-[800px] relative text-white">
      <Design />
      <div className="absolute left-0 top-0 w-full h-[800px] bg-black bg-opacity-10 ">
        <nav
          style={{
            backgroundColor: navColor,
            transition: 'all 1s',
          }}
          className="w-full px-16 py-6 flex justify-between fixed top-0 z-40 bg-black bg-opacity-25"
        >
          <h1 className="font-bodyFont text-4xl text-white font-extrabold border-2 w-12 text-center">
            F
          </h1>
          <div
            onClick={() => setMenu(true)}
            className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer"
          >
            <span className="w-full h-[3px] bg-yellow inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-yellow inline-flex"></span>
            <span className="w-full h-[3px] bg-yellow inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </nav>
        <div className="w-full h-full flex flex-col justify-end items-center px-4 pb-20">
          <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-black text-grayLight">
            Filippe Braga
          </h1>
          <div className="flex items-center gap-2 md:gap-6 text-base md:text-xl font-bold bg-yellow px-6 py-3 uppercase">
            <h2 className="tracking-[4px] text-black">Programmer</h2>
            <HiMinus className="text-2xl rotate-90 text-black" />
            <h2 className="tracking-[4px] text-black">Designer</h2>
            <HiMinus className="text-2xl rotate-90 text-black" />
            <h2 className="tracking-[4px] text-black">3D Creator</h2>
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
                  <ScrollLink to="home">Home</ScrollLink>
                  {/* <ScrollLink to="about">About</ScrollLink> */}
                  <ScrollLink to="portfolio">Portfolio</ScrollLink>
                  {/* <ScrollLink to="testimonial">Testimonial</ScrollLink> */}
                  <ScrollLink to="contact">Contact</ScrollLink>
                </ul>
              </div>
              <div className="text-lg font-thin mt-32">
                <p>For project enqueries</p>
                <p>
                  or say &lsquo;Hello&lsquo; -{' '}
                  <span className="font-semibold text-yellow">
                    webdevfibr@protonmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="w-1/5 h-full border-1-[1px] text-center flex items-center justify-center">
              <button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-yellow"
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
