import React from 'react'
import ApplicationFormButton from '@/components/ui/ApplicationFormButton'

const index = () => {
  return (
    <div className="py-[20px]">
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <h1
          className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#333] pb-[10px]"
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
