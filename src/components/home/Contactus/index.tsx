import React from 'react'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

interface ContactInfo {
  email: string
  phone: string
  mainAddress: string
  paAddress: string
}

const contact: ContactInfo = {
  email: 'clarkemoyer@freeforcharity.org',
  phone: '(520) 222-8104',
  mainAddress: '4030 Wake Forest Road STE 349 Raleigh North Carolina 27609',
  paAddress: '301 Science Park Rd Suite 119 State College PA 16803',
}

const ContactUsSection: React.FC = () => {
  return (
    <div className="pt-15 pb-20 px-4 bg-[#FCFCFC]">
      <div className="w-full max-w-[1200px] mx-auto text-center">
        <h2 className="font-[700] text-[#F27022] text-[30px] md:text-[40px] leading-[44px] mb-7">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 py-6">
          {/* Email */}
          <div className="w-full max-w-[550px]">
            <MdEmail className="w-[55px] h-[55px] text-[#2680A7] mx-auto mb-4" />
            <p className="font-[600] text-[24px] text-black mb-2">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="font-[600] text-[#2ea3f2] text-[18px]"
              id="lato-font"
            >
              {contact.email}
            </a>
          </div>

          {/* Main Address */}
          <div className="w-full max-w-[550px]">
            <MdLocationOn className="w-[55px] h-[55px] text-[#2680A7] mx-auto mb-4" />
            <p className="font-[600] text-[24px] text-black mb-2">Main Address</p>
            <p className="font-[600] text-[18px] text-[#666666]" id="lato-font">
              {contact.mainAddress}
            </p>
          </div>

          {/* Phone */}
          <div className="w-full max-w-[550px]">
            <MdPhone className="w-[55px] h-[55px] text-[#2680A7] mx-auto mb-4" />
            <p className="font-[600] text-[24px] text-black mb-2">Call</p>
            <a
              href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
              className="font-[600] text-[#2ea3f2] text-[18px]"
              id="lato-font"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        {/* PA Office */}
        <div className="w-full max-w-[550px] mx-auto">
          <MdLocationOn className="w-[55px] h-[55px] text-[#2680A7] mx-auto mb-4" />
          <p className="font-[600] text-[24px] text-black mb-2">PA Office Address</p>
          <p className="font-[600] text-[18px] text-[#666666]" id="lato-font">
            {contact.paAddress}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUsSection
