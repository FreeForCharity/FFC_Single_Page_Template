import React from 'react'
import ApplicationFormButton from '@/components/ui/ApplicationFormButton'

const index: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center mb-10 pt-10">
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <h1
          className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#333] mb-6"
          id="aria-font"
        >
          Ready to Get Started Now?
        </h1>

        <div className="flex items-center justify-center">
          <ApplicationFormButton className="max-w-fit" />
        </div>
      </div>
    </div>
  )
}

export default index
