import React from 'react'
import Transparentbtn from '@/components/ui/Transparentbtn'

const FFCOnboardingNotice = () => {
  return (
    <section className="pt-[20px] pb-[40px]  bg-white">
      <div className="py-[20px] w-[90%] md:w-[80%] mx-auto max-w-[1080px] text-center">
        {/* Main Heading */}
        <h2
          className="font-[700] text-[30px] md:text-[35px] leading-[45px] mb-[16px] pb-[10px] text-[#0d7ff8]"
          id="cantata-font"
        >
          Dear Prospective FFC Domain Supported Charity
        </h2>

        {/* Warning Note */}
        <p
          className="font-[500] text-[20px] leading-[30px] mb-[16px] md:w-[65%] mx-auto"
          id="raleway-font"
        >
          ** Please read this full page top to bottom before taking any actions as it has several
          follow-on tasks for you as a new domain owner / domain transfer to freeforcharty.org**
        </p>

        {/* Step 1 */}
        <p
          className="font-[600] text-[20px] md:text-[27px] leading-[35px] w-[85%] mx-auto mt-[30px] pb-[1em]"
          id="raleway-font"
        >
          You will have to perform several steps to get full use of your domain once ordered.
        </p>

        {/* Step 2 */}
        <p
          className="font-[600] text-[20px] md:text-[27px] leading-[35px] w-[85%] mx-auto  pb-[1em]"
          id="raleway-font"
        >
          The first step is always to complete the FFC on-boarding
        </p>
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <h1
          className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#333] pb-[10px]"
          id="aria-font"
        >
          Ready to Get Started Now?
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-o sm:gap-6">
          <Transparentbtn
            text="501(c)3 Charities Click Here To Get Started!"
            href="https://freeforcharity.org/hub/store/ffc-consulting/free-for-charity-501c3-onboarding-ffc-nonprofit-charity-onboarding"
          />
          <Transparentbtn
            text="Pre-501(c)3 Charities Click Here to Get Started!"
            href="https://freeforcharity.org/hub/store/ffc-consulting/nonprofit-charity-onboarding"
          />
        </div>
      </div>
    </section>
  )
}

export default FFCOnboardingNotice
