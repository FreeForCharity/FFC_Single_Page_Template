import React from 'react'
import HelpForCharities from '@/components/ui/help-for-charity'

const index = () => {
  return (
    <div>
      <div className="bg-[#FCFCFC]">
        <div className="pt-20 pb-7 w-[90%] mx-auto">
          <HelpForCharities
            title="Help For Charities and Nonprofit Groups from an Unbiased Fellow Charity"
            description="Free for Charity is working every day to provide your charity, and you the charity or nonprofit director with the tools and techniques needed to thrive, FREE. Sign up today to get access to all of this for your nonprofit or charity group today even if you are still pending final 501c3 status."
          />
          <div className="h-[75px] w-full"></div>
          <HelpForCharities title="Free For Charity Products and Services" description="" />
          <HelpForCharities
            title="–Establishment and Governance Support–"
            description="At Free For Charity, we understand the importance of Non Profit Establishment and Governance Support. We are here to provide help for charities by offering expertise in effective business and technology management. Our dedicated team of volunteers works to manage all aspects of your charity’s projects, we help you find the software and tools you need to thrive."
            descriptionAlign="left"
          />
          <HelpForCharities
            title=""
            description="Looking to establish and govern your charity? We’ve got you covered. Our services include support for Charity Mission Plan “Pitch Deck” assistance, full plan development with budgeting and mission sections for IRS 1023 501c3 application, and consultation on initial board considerations. We also provide support for state and local nonprofit establishment, federal 501c3 nonprofit establishment, charity banking services, charity donation processing, and more. With Free For Charity, we connect students, professionals, and businesses with charities in need. Contact us today to get started on your charity’s mission!"
            descriptionAlign="left"
          />
        </div>
      </div>
    </div>
  )
}

export default index
