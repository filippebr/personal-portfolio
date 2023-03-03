import { FaMap, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className="w-full h-[800px] bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-4 relative">
      <div className="w-full h-full bg-black bg-opacity-80 py-20">
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
        </div>
      </div>
    </div>
  )
}

export default Contact
