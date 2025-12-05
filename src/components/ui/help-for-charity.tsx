import React from 'react'

interface SectionProps {
  title: string
  description: string
  titleAlign?: 'left' | 'center' | 'right'
  descriptionAlign?: 'left' | 'center' | 'right'
  bg?: string
}

const InfoSection: React.FC<SectionProps> = ({
  title,
  description,
  titleAlign = 'center',
  descriptionAlign = 'center',
  bg = '#FCFCFC',
}) => {
  return (
    <div style={{ backgroundColor: bg }}>
      <div className="py-[0px]">
        <h1 className={`text-[#f27022] text-[28px] font-[700] mb-[15px] text-${titleAlign}`}>
          {title}
        </h1>
        <p className={`text-[18px] font-[500] text-black text-${descriptionAlign}`} id="lato-font">
          {description}
        </p>
      </div>
    </div>
  )
}

export default InfoSection
