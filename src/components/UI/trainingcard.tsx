// components/ui/TrainingCard.tsx
'use client'
import React from 'react'

interface TrainingCardProps {
  src: string
  heading: string
  text: string
}

const TrainingCard: React.FC<TrainingCardProps> = ({ src, heading, text }) => {
  return (
    <div className="max-w-full mx-auto bg-white shadow-[0_2px_18px_0_rgba(0,0,0,0.3)] transition-shadow duration-300 p-8 text-center">
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center">
          <img src={src} alt={heading} className="w-20 h-20" />
        </div>
      </div>

      {/* Heading */}
      <h3 className="font-semibold text-2xl leading-tight text-black mb-3">{heading}</h3>

      {/* Text */}
      <p className="font-[600] text-[18px] leading-[24px] text-[#666]" id="lato-font">
        {text}
      </p>
    </div>
  )
}

export default TrainingCard
