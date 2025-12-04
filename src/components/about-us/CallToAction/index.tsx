import React from 'react'
import CallToActionCard from '@/components/ui/CallToActionCard'
import { IoIosHome } from 'react-icons/io'
import { IoHeart } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa6'

const Index = () => {
  return (
    <div>
      <div className="py-[54px] bg-white">
        <div className="w-[90%] md:w-[85%] max-w-[1200px] mx-auto pt-[30px] px-[10px] lg:px-[31px] pb-[19px]">
          <h1 className="py-[27px] text-[30px] lg:text-[40px] font-[700] leading-[44px] text-center text-[#f27022]">
            Get started today with any of the below options:
          </h1>

          <div className="pt-[10px] flex gap-[33px] flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center sm:items-stretch justify-center">
            <CallToActionCard
              icon={<IoIosHome className="w-[80px] h-[80px]" />}
              iconLabel="Home"
              text="Onboarding"
              href="/501c3"
            />
            <CallToActionCard
              icon={<IoHeart className="w-[80px] h-[80px]" />}
              iconLabel="Heart"
              text="Donate"
              href="/donate"
            />
            <CallToActionCard
              icon={<FaUser className="w-[80px] h-[80px]" />}
              iconLabel="User"
              text="Volunteer"
              href="/volunteer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
