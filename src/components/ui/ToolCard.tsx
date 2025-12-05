'use client'
import React, { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { IoIosArrowForward } from 'react-icons/io' // Import arrow

type ToolCardProps = {
  logo?: string | StaticImageData
  title: string
  description?: string
  link: string
}

export default function ToolCard({ logo, title, description, link }: ToolCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add('flip-once')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-[rgba(255,255,255,0.88)] rounded-[15px] overflow-hidden pt-[20px] pr-[19px] pb-[50px] pl-[19px] shadow-[0px_2px_70px_-15px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-center mb-[15px]">
        {logo && (
          <div className="relative w-full mx-auto h-[200px]">
            <Image src={logo} alt={`${title} logo`} fill className="object-conver" />
          </div>
        )}
      </div>

      <div className="flex-1 items-center flex flex-col">
        <div className="h-[3px] bg-[#e88d33] w-[23%] mx-auto mb-[20px]"></div>
        <h3 className="pb-[10px] text-center text-[28px] text-[#333] font-[600] leading-[36px]">
          {title}
        </h3>

        {description && (
          <p
            className="mb-[22px] text-[18px] leading-[24px] font-[500] text-[#666] text-center"
            id="lato-font"
          >
            {description}
          </p>
        )}
        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group inline-flex items-center justify-center gap-2 px-[30px] py-[6px] text-white border border-[#f27022] rounded-[10px] text-[18px] bg-[#f27022] transition-all duration-300 ease-in-out shadow-md leading-[31px] font-[600] hover:shadow-[0px_12px_18px_-6px_#f27022]"
          id="montserrat-font"
        >
          <span className="transition-all duration-300 group-hover:translate-x-1">Get Started</span>
          <IoIosArrowForward className="opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out w-[20px] h-[20px]" />
        </a>
      </div>

      <style jsx>{`
        .flip-once {
          animation: flipIn 0.9s ease-out forwards;
        }
        @keyframes flipIn {
          0% {
            transform: rotateY(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
