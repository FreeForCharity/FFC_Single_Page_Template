'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface InfoCardProps {
  imageUrl?: string
  heading: string
  date?: string
  description: string
  href?: string // new prop for dynamic link
}

const InfoCard: React.FC<InfoCardProps> = ({ imageUrl, heading, date, description, href }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div
      className={`min-w-[300px] w-full max-w-full mx-auto bg-white overflow-hidden transition-all duration-[300ms] ${
        isHovered
          ? 'shadow-none border border-[#d8d8d8]'
          : 'shadow-[0_2px_18px_0_rgba(0,0,0,0.3)] border border-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={heading}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay on Hover */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isHovered ? 'bg-[#7CB5CE] opacity-80' : 'opacity-0'
            }`}
          />
        </div>
      )}

      {/* Description Section */}
      <div className="p-4">
        <h3 className="text-[25px] font-[500] text-black leading-[25px]">
          {href ? (
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {heading}
            </Link>
          ) : (
            heading
          )}
        </h3>
        {date && (
          <p id="aria-font" className="text-[14px] font-[600] text-[#f27022] my-2">
            {date}
          </p>
        )}
        <p id="lato-font" className="text-[#666666] font-[500] text-[18px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default InfoCard
