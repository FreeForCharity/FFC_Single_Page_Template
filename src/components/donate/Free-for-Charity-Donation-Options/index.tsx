import React from 'react'
import Transparentbtn from '@/components/ui/Transparentbtn'

const index = () => {
  return (
    <div>
      <div className="w-full max-w-[90%] md:max-w-[80%] py-4 mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-[30px] md:text-[40px] font-[700] leading-[44px] text-[#f27022] mb-[20px]">
            Free for Charity Donation Options
          </h1>
          <p className="text-[18px] font-[500] text-black pb-[1em]" id="lato-font">
            Here at free for charity we make it easy to donate and help the cause of great free
            training programs and free services for charities.
          </p>
          <p className="text-[18px] font-[700] text-black mb-[50px]" id="lato-font">
            We have the following options:
          </p>
        </div>

        {/* Callout Box */}
        <div className="bg-[#7EBEC5] py-[20px] md:py-[40px] md:px-[60px]  px-[30px] flex flex-col items-center justify-center text-center">
          <h1 className="text-[26px] font-[500] leading-[26px] text-white pb-[10px]" id="aria-font">
            Free For Charity Domains Endowment Fund
          </h1>
          <p className="text-[14px] font-[500] leading-[24px] text-white pb-[1em]" id="aria-font">
            Free For Charity is creating an endowment fund to support our program that buys and
            manages domains names and email accounts for charities in need. Consider supporting to
            the largest fundrinaing campain in Free For Charity history.
          </p>
          <Transparentbtn
            text="Make a Lasting Impact Today!"
            href="/free-for-charity-endowment-fund"
            color="#fff"
          />
        </div>
      </div>
    </div>
  )
}

export default index
