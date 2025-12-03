'use client'

import React from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  heading: string
  paragraph: string
  heroImg: string
  fontSize?: number
  lineHeight?: number
  imageContainerWidth?: string // 👈 new prop (e.g., "w-[100%]" or "w-[80%]")
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  paragraph,
  heroImg,
  fontSize,
  lineHeight,
  imageContainerWidth = 'w-[100%] lg:w-[62%]', // 👈 default value
}) => {
  return (
    <section
      className="w-full flex items-center overflow-hidden pt-[80px]
             bg-[linear-gradient(320deg,_#2584AD_48%,_#ffffff_48%)]
             md:bg-[linear-gradient(320deg,_#f58c23_48%,_#ffffff_48%)]"
    >
      <div className="w-[90%] max-w-[100%] mx-auto pt-[90px] pb-[90px]">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[0px]">
          {/* Left: Text Content */}
          <div className="w-full lg:w-[40%]">
            <h1 className="text-[#f27022] text-[40px] md:text-[60px] font-[600] leading-[60px] md:leading-[78px] mb-[3px]">
              {heading}
            </h1>
            <p
              className="font-[500] w-full mt-[11px]"
              id="lato-font"
              style={{
                fontSize: fontSize ? `${fontSize}px` : '22px',
                lineHeight: lineHeight ? `${lineHeight}px` : '31px',
              }}
            >
              {paragraph}
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-[60%] md:pr-[50px] md:pl-[80px]">
            <div className={`relative ${imageContainerWidth} mx-auto`}>
              <Image
                src={heroImg}
                alt="Hero Image"
                width={1200}
                height={600}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
