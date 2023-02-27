import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'

function AboutMe() {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          I&apos;m{' '}
          <span className="font-bold tracking-wider text-white">
            Filippe Braga
          </span>{' '}
          and I&apos;m a freelancer{' '}
          <span className="font-bold text-white">
            Web Developer and a 3D Creator
          </span>
          . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          voluptates tempora doloribus mollitia! Neque tempore eum non maiores
          dolore vitae amet assumenda a quisquam! Voluptate dignissimos unde
          deleniti optio aperiam?
        </p>
        <div>
          <h4 className="text-2xl font-semibold flex items-center gap-4">
            <span className="text-designColor">
              <HiChevronDoubleRight />
            </span>
            Web Design
          </h4>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
