'use client'

import React, { useState, useRef, useLayoutEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

interface AccordionItemProps {
  number: string
  title: string
  children: React.ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ number, title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  // Using useLayoutEffect (not useEffect) for synchronous DOM measurement before paint
  // This is the correct React pattern to avoid visual flicker when measuring and updating height
  useLayoutEffect(() => {
    if (contentRef.current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="mb-5 border border-[#1c6e92] rounded-[10px] overflow-hidden">
      {/* Header */}
      <button
        onClick={toggle}
        className={`w-full px-4 py-3 flex items-center justify-between text-left transition-colors duration-300 cursor-pointer ${
          isOpen ? 'bg-white/90' : 'bg-none'
        }`}
        aria-expanded={isOpen}
      >
        {/* Text takes remaining space */}
        <span
          className={`font-[600] text-[22px] flex-1 pr-3 transition-colors duration-300 ${
            isOpen ? 'text-gray-900' : 'text-gray-900'
          }`}
        >
          {number}.{title}
        </span>

        {/* Icon container with fixed width */}
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          {isOpen ? (
            <FaMinus className="w-5 h-5 text-white bg-[#1c6e92] p-1 rounded-full transition-transform duration-300" />
          ) : (
            <FaPlus className="w-5 h-5 text-white bg-[#1c6e92] p-1 rounded-full transition-transform duration-300" />
          )}
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-800 ease-in-out ${
          isOpen ? 'bg-white/90' : 'bg-white'
        }`}
        style={{ maxHeight: height }}
      >
        <div
          ref={contentRef}
          className="px-4 pb-4 pt-2 text-gray-700 text-[18px] font-[500] transition-colors duration-300"
          id="lato-font"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
