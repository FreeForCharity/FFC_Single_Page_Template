import React from 'react'
import Transparentbtn from '@/components/ui/Transparentbtn'

const Index = () => {
  return (
    <div className="w-full pt-[60px] pb-[40px] bg-[#FCFCFC]">
      {/* Two-Column Section - Responsive */}
      <div className="w-full max-w-[90%] mx-auto py-[3%] flex flex-col md:flex-row gap-8 md:gap-0 items-stretch">
        {/* Left Column */}
        <div className="w-full md:w-[47%] md:mr-[5.5%] flex flex-col justify-between bg-transparent">
          <div>
            <h1 className="text-[28px] font-[700] leading-[31px] text-[#f27022]">
              You can create a measurable impact to the success of charities nation wide with your
              donation or volunteer hours.
            </h1>
            <p
              className="text-[18px] font-[500] leading-[27px] mb-[5.82%] mt-[20px]"
              id="lato-font"
            >
              Every organizations success ultimately falls down to how much support the organization
              received for its causes. Here at Free for Charity it is our mission to provide world
              class services to other nonprofits throughout the United States.
            </p>
            <h1 className="text-[28px] font-[700] leading-[31px] text-[#f27022]">
              We cannot do the work we do without your support.
            </h1>
            <p className="text-[18px] font-[500] leading-[27px] pb-[1em] mt-[20px]" id="lato-font">
              From the day to day costs of running servers, websites, and paying for software to
              support our training programs; Free for Charity can always put to good use your
              donation. Consider your options to donate today.
            </p>
            <p className="text-[18px] font-[500] leading-[27px] mb-[5.82%]" id="lato-font">
              In addition to financial support, Free for Charity also needs community support
              through{' '}
              <a href="/volunteer" className="text-[#2ea3f2]">
                skilled volunteers
              </a>{' '}
              and gifts in kind (such as services or products sold by your business). Take a look at
              the volunteer opportunities today.
            </p>
          </div>
        </div>

        {/* Right Column - Button */}
        <div className="w-full md:w-[50%] flex items-stretch">
          <div className="bg-[#7EBEC5] flex flex-col justify-center items-center text-center py-[20px] md:py-[40px] md:px-[60px] px-[30px] w-full h-full">
            <h1
              className="text-[26px] font-[500] leading-[26px] text-white pb-[10px]"
              id="aria-font"
            >
              Thank you for supporting our mission to help charities in need!
            </h1>
            <p className="text-[14px] font-[500] leading-[24px] text-white pb-[1em]" id="aria-font">
              Click the button below to make a donation at PayPal and support Free For Charity. Your
              contribution will make a meaningful impact in helping us provide world-class training
              programs and support charities throughout the United States. From covering the costs
              of running servers and websites to supporting our training programs, every donation
              counts. Help us continue our mission by donating today.
            </p>

            <Transparentbtn
              text="Donate Today"
              href="https://www.paypal.com/donate/?hosted_button_id=9ZKQ23YC3G2J2"
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
