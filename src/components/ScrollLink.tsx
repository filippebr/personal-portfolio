'use client'

import { useState } from 'react'
import { Link } from 'react-scroll'

type ScrollLinkProps = {
  to: string
  children: React.ReactNode
}

function ScrollLink({ to, children }: ScrollLinkProps) {
  const [menu, setMenu] = useState(false)

  function handleClick() {
    setMenu(false)
  }

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={handleClick}
    >
      <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
        {children}
      </li>
    </Link>
  )
}

export default ScrollLink
