import React from 'react'
import Transparentbtn from '@/components/ui/Transparentbtn'

const index = () => {
  return (
    <div className="pb-[30px]">
      <div>
        <div className="w-[90%] md:w-[80%] mx-auto text-center pb-[54px]">
          <h1
            className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#333] pt-[22px]"
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

        <div className="py-[41px] ">
          <div className="pt-[24px] pb-[3px] w-[90%] md:w-[80%] mx-auto max-w-[1080px]">
            <h1
              className="mt-[2px] mb-[12px] pb-[10px] text-[30px] md:text-[35px] font-[700] leading-[46px] text-[#0d7ff8] text-center"
              id="cantata-font"
            >
              STEPS TO GET A NEW WEBSITE DESIGNED AND HOSTED
            </h1>
            <p
              className="mb-[13px] w-[85%] mx-auto font-[500] text-[20px] leading-[30px] text-center"
              id="raleway-font"
            >
              New site design has a backlog with Free for Charity but please reach out to get on the
              list for a new free charity website. We try to support 100 Charities a year. If you
              have your own design team and just need our hosting, plugins, and themes; follow the
              steps at either the 501c3 or pre-501c3 onboarding pages to complete next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
