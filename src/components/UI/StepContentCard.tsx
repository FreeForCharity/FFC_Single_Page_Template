import React from 'react'

type StepsCardProps = {
  title: string
  children: React.ReactNode
  className?: string
  id: string
}

export default function StepsCard({ title, children, className, id }: StepsCardProps) {
  return (
    <div
      className={`w-[90%] lg:w-[65%] mx-auto bg-white rounded-[10px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.3)] py-[50px] px-[30px] ${
        className || ''
      }`}
      id={id}
    >
      {/* Title */}
      <h2
        className="text-center text-[30px] md:text-[35px] font-[700] leading-[46px] text-[#0d7ff8] mb-[10px] mt-[3px]"
        id="cantata-font"
      >
        {title}
      </h2>

      {/* Dynamic Custom Content */}
      <div className="w-[85%] mx-auto text-gray-800 text-[18px] md:text-[20px] leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  )
}
