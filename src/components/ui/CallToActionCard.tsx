'use client'
import React, { useEffect, useRef, useState } from 'react'

interface IconTextCardProps {
  icon: React.ReactNode
  iconLabel?: string
  text: string
  href?: string
}

const IconTextCard: React.FC<IconTextCardProps> = ({ icon, iconLabel = 'icon', text, href }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect() // trigger only once
          }
        })
      },
      { threshold: 0.3 } // 30% visible triggers animation
    )

    const currentCard = cardRef.current
    if (currentCard) observer.observe(currentCard)

    return () => {
      if (currentCard) observer.unobserve(currentCard)
    }
  }, [])

  return (
    <a
      href={href || '#'}
      rel="noopener noreferrer"
      className="
        block
        bg-white 
        rounded-[10px] 
        overflow-hidden 
        px-[20px] 
        pt-[50px] 
        pb-[50px] 
        shadow-[0_2px_18px_rgba(0,0,0,0.3)]
        flex flex-col items-center space-y-6 
        w-full  mx-auto
        transition-transform duration-200 hover:scale-[1.03]
      "
    >
      {/* Icon with fadeTop animation triggered on scroll */}
      <div
        ref={cardRef}
        className={`
          text-[#277CA0] flex items-center justify-center mb-[30px]
          ${isVisible ? 'animate-fadeTop opacity-100' : 'opacity-0'}
        `}
        aria-label={iconLabel}
      >
        {icon}
      </div>

      {/* Text */}
      <h3 className="text-[30px] font-bold leading-[30px] text-center text-gray-900" id="lato-font">
        {text}
      </h3>
    </a>
  )
}

export default IconTextCard
