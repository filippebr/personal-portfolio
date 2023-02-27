import { Design } from './Design'

function Banner() {
  return (
    <section id="home" className="w-full h-[700px] relative text-white">
      <Design />
      <div className="absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10 ">
        <nav className="">
          <h1 className="font-bodyFont text-4xl text-white font-extrabold border-2 w-12 text-center">
            S
          </h1>
          <div className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer">
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </nav>
        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-black">
            I&apos;m Filippe Braga
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Banner
