'use client'

import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { motion, Variants } from 'framer-motion'

const sectionVariants: Variants = {
  offscreen: { opacity: 0, scale: 0.8 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.6 },
  },
}

const Index = () => {
  return (
    <div className="py-[91px] bg-[#0c5575]">
      <div className="w-[90%] md:w-[80%] mx-auto max-w-[1080px] flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[0px]">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-[46%] mr-[86px] flex flex-col items-start"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Image */}
          <div className="relative w-full aspect-[16/9] mb-[30px]">
            <Image
              src="https://freeforcharity.org/wp-content/uploads/2021/07/credit-karma-logo.png"
              alt="Placeholder Image"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-left">
            <div className="flex mb-5">
              <div className="h-[3px] bg-[#e88d33] w-[18%]"></div>
            </div>

            <h3 className="text-[28px] font-[600] text-white leading-[36px] pb-[10px] tracking-[1px]">
              Credit Karma (free add supported)
            </h3>

            <div className="text-white text-[18px] leading-[24px] font-[500]" id="lato-font">
              Credit Karma actually gives you a FREE credit score and report from transunion. When I
              say free I mean it. At no time does it even ask you for a credit card so it is
              impossible to charge you. It uses the same model as Mint.com for income and serves you
              with information based on what it pulls. This is a great way to get your score and
              report alerts. You don’t really need all three reports this gets the job done.
            </div>

            {/* Button */}
            <a
              href="https://www.creditkarma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative group inline-flex items-center justify-center gap-2
                mt-[25px] px-[30px] py-[6px]
                text-white border border-[#f27022] rounded-[10px]
                text-[18px] bg-[#f27022]
                transition-all duration-300 ease-in-out
                shadow-md leading-[31px] font-[600]
                hover:shadow-[0px_12px_18px_-6px_#f27022]
              "
              id="montserrat-font"
            >
              <span className="transition-all duration-300 group-hover:translate-x-1">
                Get Started
              </span>
              <IoIosArrowForward
                className="
                  opacity-0 translate-x-[-8px]
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300 ease-in-out
                  w-[20px] h-[20px]
                "
              />
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-[46%] flex flex-col items-start"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Image */}
          <div className="relative w-full aspect-[16/9] mb-[30px]">
            <Image
              src="https://freeforcharity.org/wp-content/uploads/2021/07/482664-rescuetime.jpg"
              alt="Placeholder Image"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-left">
            <div className="flex mb-5">
              <div className="h-[3px] bg-[#e88d33] w-[18%]"></div>
            </div>

            <h3 className="text-[28px] font-[600] text-white leading-[36px] pb-[10px] tracking-[1px]">
              Rescue Time (free with a paid premium version)
            </h3>

            <div className="text-white text-[18px] leading-[24px] font-[500]" id="lato-font">
              Rescue Time is another FREE tool that really tells you about yourself and how you
              spend your time. It is amazing once you get it set up. The only downside is that you
              may not be able to install this on your work computer. NOTE: I use the paid version on
              my systems.
            </div>

            {/* Button */}
            <a
              href="https://www.rescuetime.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative group inline-flex items-center justify-center gap-2
                mt-[25px] px-[30px] py-[6px]
                text-white border border-[#f27022] rounded-[10px]
                text-[18px] bg-[#f27022]
                transition-all duration-300 ease-in-out
                shadow-md leading-[31px] font-[600]
                hover:shadow-[0px_12px_18px_-6px_#f27022]
              "
              id="montserrat-font"
            >
              <span className="transition-all duration-300 group-hover:translate-x-1">
                Get Started
              </span>
              <IoIosArrowForward
                className="
                  opacity-0 translate-x-[-8px]
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300 ease-in-out
                  w-[20px] h-[20px]
                "
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Index
