// components/AddressCard.tsx
import Image from 'next/image'
import React from 'react'

interface AddressCardProps {
  imageSrc: string // Path to the location icon (e.g., "/location-pin.svg")
  heading: string // e.g., "Main Address"
  description: string // e.g., "4030 Wake Forest Road STE 349 Raleigh\nNorth Carolina 27609"
}

const AddressCard: React.FC<AddressCardProps> = ({ imageSrc, heading, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      {/* Icon */}
      <div className="w-12 h-12 relative">
        <Image src={imageSrc} alt="Location pin" fill className="object-contain" />
      </div>

      {/* Heading */}
      <h3 className="text-[24px] font-[600] leading-[31px]">{heading}</h3>

      {/* Description - supports line breaks */}
      <p
        className="text-[18px] font-[600] leading-[24px] text-[#666] whitespace-pre-line"
        id="lato-font"
      >
        {description}
      </p>
    </div>
  )
}

export default AddressCard
