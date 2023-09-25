'use client'
import { motion } from 'framer-motion'

import ContactData from '@/app/data/ContactData'
import { FormEvent, useState } from 'react'
import FormContact from './formContact'

function Contact() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()    
    setIsLoading(true)
  
    if (!username) {
      setErrMsg('Please enter your name.')
      return
    }
  
    if (!email) {
      setErrMsg('Please enter your email.')
      return
    }
  
    if (!message) {
      setErrMsg('Please enter your message.')
      return
    }

    try {
      await fetch('/api/welcome', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          message
        })
      })
    } catch (error) {
      console.error('error', error)
    } finally {
      setIsLoading(false)
    }
  
    const successMessage = `Hello dear ${username}, thank you for your message. Additional information will be sent to you shortly via your email at ${email}.`;
    setSuccessMsg(successMessage);
  }
  
  return (
    <section
      id="contact"
      className="w-full h-[900px] md:h-[800px] bg-contact-image-mobile md:bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-0 relative"
    >
      <div className="w-full h-full overflow-hidden bg-black bg-opacity-90 px-20 py-20">
        <div className="w-full h-full mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Say Hello!
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {ContactData.map((data) => (
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
            <FormContact 
              setUsername={setUsername} 
              setEmail={setEmail} 
              setMessage={setMessage} 
              errMsg={errMsg} 
              handleSubmit={handleSubmit} 
              setIsLoading={isLoading}
            />            
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
