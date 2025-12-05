import React from 'react'
import Image from 'next/image'

type StepCardProps = {
  imageSrc: string
  imageAlt?: string
  text: string
  className?: string
}

export default function StepCard({
  imageSrc,
  imageAlt = 'Step icon',
  text,
  className = '',
}: StepCardProps) {
  return (
    <div
      className={`
        bg-white rounded-[8px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.3)] 
        border-l-[8px] border-[#0d7ff8]
        p-[20px] text-center mx-auto
        ${className}
      `}
    >
      {/* Circle Image */}
      <div className="mx-auto flex-shrink-0 w-[50px] h-[50px] bg-white rounded-full overflow-hidden shadow-lg mb-[30px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={56}
          height={56}
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Text Content */}
      <p className="text-[20px] leading-[28px] font-[500]" id="raleway-font">
        {text}
      </p>
    </div>
  )
}
