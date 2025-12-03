import React from 'react'
import Link from 'next/link'

interface GeneralDonationCardProps {
  title: string
  description: string
  img: string // Single image URL
  href?: string // new prop for the link
}

const GeneralDonationCard: React.FC<GeneralDonationCardProps> = ({
  title,
  description,
  img,
  href = '#', // default fallback
}) => {
  return (
    <Link
      href={href}
      className="block mx-auto bg-white p-6 rounded-[10px] overflow-hidden pt-[50px] pr-[20px] pb-[50px] pl-[20px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.3)]"
      id="lato-font"
    >
      {/* Title */}
      <h1 className="text-[30px] font-[700] leading-[30px] text-center pb-[10px]">{title}</h1>

      {/* Description */}
      <p className="text-[18px] font-[500] leading-[24px] text-center text-[#666] pb-[1em]">
        {description}
      </p>

      {/* Image */}
      <div className="flex justify-center">
        <img src={img} alt="Donation image" className="h-12 w-auto object-contain" />
      </div>
    </Link>
  )
}

export default GeneralDonationCard
