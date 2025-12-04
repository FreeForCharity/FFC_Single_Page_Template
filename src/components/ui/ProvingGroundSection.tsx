import React from 'react'

interface ProvingGroundSectionProps {
  title: string
  children: React.ReactNode
}

const ProvingGroundSection: React.FC<ProvingGroundSectionProps> = ({ title, children }) => {
  return (
    <section className="w-full mx-auto py-[2em] md:px-[2em]" id="segoe-font">
      {/* Title with Bottom Border */}
      <h1 className="text-[25px] md:text-[30px] font-[600] text-[#111827] leading-[30px] border-b-[2px] w-full border-[#3B82F6] inline-block mb-[1.5rem] pb-[0.5rem]">
        {title}
      </h1>

      {/* Content Card */}
      <div className=" bg-white rounded-[0.5rem] shadow-md p-[1.5rem] ">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-5 text-[14px] font-[500] leading-[22px]">
          {children}
        </div>
      </div>
    </section>
  )
}

export default ProvingGroundSection
