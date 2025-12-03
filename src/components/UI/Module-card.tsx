import React from 'react'

interface Modulecard {
  title: string
  children: React.ReactNode
  id: string
}

const Modulecard: React.FC<Modulecard> = ({ title, children, id }) => {
  return (
    <section className="w-full mx-auto py-[2em] md:px-[2em]" id={id}>
      {/* Full Card with Title Inside */}
      <div className="bg-white rounded-[0.5rem] shadow-lg p-[1.5rem]">
        {/* Title with Bottom Border - Inside Card */}
        <h1 className="text-[25px] md:text-[30px] font-[600] text-[#111827] leading-[30px] border-b-[2px] w-full border-[#DC2626] inline-block mb-[1.5rem] pb-[0.5rem]">
          {title}
        </h1>
        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-5 text-[14px] font-[500] leading-[22px]">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Modulecard
