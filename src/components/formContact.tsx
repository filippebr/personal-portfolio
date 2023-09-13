import { MouseEventHandler } from "react"

type FormContactProps = {
  setUsername: (username: string) => void
  setEmail: (email: string) => void
  setMessage: (message: string) => void
  errMsg: string
  handleSubmit: (MouseEventHandler<HTMLButtonElement>)
}

function FormContact({ 
  setUsername, 
  setEmail, 
  setMessage, 
  errMsg, 
  handleSubmit 
}: FormContactProps): JSX.Element {
  return (
    <form 
      className="w-full flex flex-col items-center gap-4 md:gap-10"
    >
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
  )
}

export default FormContact