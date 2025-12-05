import React from 'react'
import BlueBtn from '../../ui/Bluebtn'

const Mission: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 font-sans text-center">
      <div className="mx-auto w-full max-w-[1000px]">
        <h1 className="mb-6 font-bold text-[30px] sm:text-[32px] md:text-[40px] leading-[1.1] text-[#f27022] w-full sm:w-[85%] md:w-[70%] mx-auto">
          Free for Charity has a simple mission with broad implications.
        </h1>

        <p
          className="font-bold text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[27px] my-3 text-black px-2 sm:px-0"
          id="lato-font"
        >
          Reduce costs and increase revenues for nonprofits; putting that money back into their
          charitable mission where it belongs.
        </p>

        <p
          className="font-medium text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[27px] text-black px-2 sm:px-0"
          id="lato-font"
        >
          This charity for charities seeks to replace as many functions as possible that current
          nonprofits pay for to for-profit companies with free or at cost work from our campus, on
          site projects, or partnerships with other entities.
        </p>

        <div className="mt-6">
          <BlueBtn href="/about-us">Visit Site</BlueBtn>
        </div>
      </div>
    </section>
  )
}

export default Mission
