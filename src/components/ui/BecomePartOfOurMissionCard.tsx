'use client'

import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface BecomePartOfOurMissionCardProps {
  bgImage: string
  heading: string
  description1: string
  description2: string
  buttonText: string
  buttonLink: string
}

const BecomePartOfOurMissionCard: React.FC<BecomePartOfOurMissionCardProps> = ({
  bgImage,
  heading,
  description1,
  description2,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="w-full rounded-[10px] overflow-hidden pt-[100px] pr-[50px] pb-[100px] pl-[50px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.3)] bg-white text-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.55) 100%), url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mb-[13px]">
        <h1 className="pb-[10px] text-[31px] font-[700] leading-[31px]" id="cantata-font">
          {heading}
        </h1>
        <p className="text-[18px] font-[500] leading-[32px]" id="raleway-font">
          {description1}
        </p>
        <p className="text-[18px] font-[500] leading-[32px]" id="raleway-font">
          {description2}
        </p>
      </div>

      {/* Gradient Anchor with Hover Icon Animation */}
      <a
        href={buttonLink}
        className="
    relative group mx-auto w-fit
    text-white border-2 border-white
    rounded-[8px] text-[18px] font-[500] leading-[31px]
    px-[20px] py-[6px]
    bg-[linear-gradient(130deg,#0d7ff8_0%,#59a5f7_100%)]
    flex items-center justify-center
    transition-all duration-300 ease-in-out
    hover:border-transparent hover:scale-x-110
  "
        id="aria-font"
      >
        <span className="z-10">{buttonText}</span>

        <IoIosArrowForward
          className="
      opacity-0 translate-x-[-8px]
      group-hover:opacity-100 group-hover:translate-x-0
      transition-all duration-300 ease-in-out
      w-[20px] h-[20px]
    "
        />
      </a>
    </div>
  )
}

export default BecomePartOfOurMissionCard
