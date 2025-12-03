import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface TransparentbtnProps {
  text: string
  href?: string
  color?: string // new color prop
}

const Transparentbtn: React.FC<TransparentbtnProps> = ({ text, href, color = '#2ea3f2' }) => {
  return (
    <div>
      <a
        href={href || '#'}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        className={`
          group relative my-4 flex w-full items-center justify-between
          border-2 px-4 py-2.5 transition-all duration-300 rounded
          hover:border-transparent hover:bg-gray-200 mx-auto md:mx-0 max-w-fit
        `}
        style={{ borderColor: color, color }}
        id="aria-font"
      >
        <span className="text-[17px] font-medium leading-tight sm:text-[18px] md:text-[20px] transition-transform duration-300 group-hover:-translate-x-1">
          {text}
        </span>

        <IoIosArrowForward
          className="h-6 w-6 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          strokeWidth={2}
          style={{ color }}
        />
      </a>
    </div>
  )
}

export default Transparentbtn
