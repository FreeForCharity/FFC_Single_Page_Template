import React from 'react'
import Transparentbtn from '@/components/ui/Transparentbtn'

const Index = () => {
  return (
    <div className="w-full pt-[60px] pb-[40px] bg-[#FCFCFC]">
      {/* Main Content Container */}
      <div className="w-full max-w-[90%] md:max-w-[80%] py-4 mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-[30px] md:text-[40px] font-[700] leading-[44px] text-[#f27022] mb-[20px]">
            Free for Charity Volunteer Options
          </h1>
          <p className="text-[18px] font-[500] text-black pb-[1em]" id="lato-font">
            Free for Charity is always looking for motivated and skilled people from around the US
            to help guide and participate in our training programs and direct support to charities.
          </p>
          <p className="text-[18px] font-[700] text-black mb-[50px]" id="lato-font">
            You can help in the following ways:
          </p>
        </div>

        {/* Callout Box */}
        <div className="bg-[#7EBEC5] py-[20px] md:py-[40px] md:px-[60px]  px-[30px] flex flex-col items-center justify-center text-center">
          <h1 className="text-[26px] font-[500] leading-[26px] text-white pb-[10px]" id="aria-font">
            IMPORTANT: A Prerequisite for All Applicants
          </h1>
          <p className="text-[14px] font-[500] leading-[24px] text-white pb-[1em]" id="aria-font">
            To ensure the highest standards of security and competence for the non-profits we serve,
            all prospective volunteers must first complete our{' '}
            <span className="font-[700]">Core Competencies Training Program.</span> This mandatory
            first step is our “proving ground” and ensures you have the foundational skills needed
            to succeed.
          </p>
          <p className="text-[14px] font-[500] leading-[24px] text-white pb-[20px]" id="aria-font">
            After you have successfully completed the training and received your certificate, you
            may then apply for one of the specific roles listed below.
          </p>
          <Transparentbtn
            text="Click Here to Start the Core Competencies Training"
            href="/ffc-volunteer-proving-ground-core-competencies"
            color="#fff"
          />
        </div>
      </div>

      {/* Two-Column Section - Responsive */}
      <div className="w-full max-w-[90%] mx-auto py-[3%] flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Left Column */}
        <div className="w-full md:w-[47%] md:mr-[5.5%]">
          <h1 className="text-[28px] font-[700] leading-[31px] text-[#f27022]">
            You can create a measurable impact to the success of charities nation wide with your
            donation or volunteer hours.
          </h1>
          <p className="text-[18px] font-[500] leading-[27px] mb-[5.82%] mt-[20px]" id="lato-font">
            Every organizations success ultimately falls down to how much support the organization
            received for its causes. Here at Free for Charity it is our mission to provide world
            class training programs that at the same time help charities throughout the United
            States.
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
            In addition to financial support, Free for Charity also needs community support through{' '}
            <a href="/volunteer" className="text-[#2EA3F4]">
              skilled volunteers
            </a>{' '}
            and gifts in kind (such as services or products sold by your business). Take a look at
            the volunteer opportunities today.
          </p>
        </div>

        {/* Right Column - Button */}
        <div>
          <a
            href="https://www.idealist.org/en/nonprofit/356bfc8e2ae64f83beea4a4e677e99d7-free-for-charity-state-college#opportunities"
            className="inline-block px-6 py-3 text-[16px] font-bold text-white bg-[#007bff] rounded-md text-center no-underline transition-colors duration-300 ease-in-out hover:bg-[#0056B3]"
            id="aria-font"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Our Volunteer Opportunities on Idealist
          </a>
        </div>
      </div>
    </div>
  )
}

export default Index
