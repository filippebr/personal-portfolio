import { FaMap, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className="w-full h-[800px] bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-0 relative">
      <div className="w-full h-full bg-black bg-opacity-90 px-5 py-20">
        <div className="max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Say Hello!
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">São Paulo, Brasil</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">+9999999999</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">filippeffx@hotmail.com</p>
            </div>
          </div>
          <form className="w-full flex flex-col items-center gap-4 md:gap-10">
            <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
              <input
                placeholder="Name"
                className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColor duration-200"
                type="text"
              />
              <input
                placeholder="Email"
                className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColor duration-200"
                type="email"
              />
            </div>

            <textarea
              className="w-full text-lg h-36 p-4 text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColor duration-200 resize-none"
              placeholder="Your Messages"
            ></textarea>

            <button>Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
