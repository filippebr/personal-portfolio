'use client'
import { motion } from 'framer-motion'
import contactData from 'public/data/contactData'
import { FormEvent, useState } from 'react'

function Contact() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if (!username) {
      setErrMsg('Please enter your name.');
      return;
    }
  
    if (!email) {
      setErrMsg('Please enter your email.');
      return;
    }
  
    if (!message) {
      setErrMsg('Please enter your message.');
      return;
    }
  
    const successMessage = `Hello dear ${username}, thank you for your message. Additional information will be sent to you shortly via your email at ${email}.`;
    setSuccessMsg(successMessage);
  };
  return (
    <section
      id="contact"
      className="w-full h-[900px] md:h-[800px]  bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-0 relative"
    >
      <div className="w-full h-full overflow-hidden bg-black bg-opacity-90 px-5 py-20">
        <div className="max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Say Hello!
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {contactData.map((data) => (
              <div key={data.id} className="flex flex-col items-center gap-3">
                {data.icon}
                <p className="text-sm tracking-wide">{data.label}</p>
                <p className="text-sm tracking-wide">{data.value}</p>
              </div>
            ))}
          </div>
          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: 'easeIn' }}
              className="max-w-[600px] h-full flex justify-center items-center mx-auto text-lg font-semibold px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="w-full flex flex-col items-center gap-4 md:gap-10">
              <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Name"
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-yellow duration-200"
                  type="text"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-yellow duration-200"
                  type="email"
                />
              </div>

              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-lg h-42 p-4 text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-yellow duration-200 resize-none"
                placeholder="Your Messages"
              ></textarea>
              {errMsg && (
                <p className="w-full bg-red-500 py-1 text-center text-base font-semibold tracking-wider">
                  {errMsg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="w-44 h-12 text-black bg-yellow text-base uppercase font-bold tracking-wide border-2 border-transparent hover:bg-black hover:text-white hover:border-yellow duration-300"
              >
                Submit Now
              </button>
            </form>
          )}
          <div className="w-full py-10 bg-black bg-opacity-40 flex flex-col md:flex-row px-4 md:items-center justify-between">
            <div className="text-lg font-thin">
              <p>For project enquires</p>
              <p>
                or say Hello -{' '}
                <span className="font-semibold text-yellow">
                  webdevfibr@protonmail.com
                </span>
              </p>
            </div>
            <p>© 2023 webdevfibr All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
