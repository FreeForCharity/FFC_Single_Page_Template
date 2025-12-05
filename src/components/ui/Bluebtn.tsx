// components/ui/BlueBtn.tsx
'use client'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface BlueBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  href?: string // new prop for the link
}

const BlueBtn: React.FC<BlueBtnProps> = ({ children = 'Learn More', href, ...props }) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank') // opens link in new tab
    }
  }

  return (
    <button
      className="
        relative group mx-auto
        cursor-pointer px-[30px] py-[7px] mt-[30px]
        shadow-[0px_12px_18px_-6px_rgba(0,0,0,0)]
        hover:shadow-[0px_12px_18px_-4px_rgba(255,105,0,0.8)]
        transition-all duration-300 ease-in-out
        text-white border border-[#2583ab] rounded-[10px]
        text-[18px] font-semibold bg-[#2583ab]
        flex items-center justify-center
      "
      id="montserrat-font"
      onClick={handleClick} // handle link click
      {...props}
    >
      {/* Button Text */}
      <span className="z-10">{children}</span>

      {/* Arrow Icon */}
      <IoIosArrowForward
        className="
          absolute right-2 top-1/2 -translate-y-1/2
          opacity-0 -translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 ease-in-out
          w-[20px] h-[20px]
        "
      />
    </button>
  )
}

export default BlueBtn
