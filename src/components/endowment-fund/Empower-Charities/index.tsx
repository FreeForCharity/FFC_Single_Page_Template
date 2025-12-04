import React, { CSSProperties, FC, IframeHTMLAttributes } from 'react'

interface ExtendedIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowpaymentrequest?: string
  allowtransparency?: string // lowercase version for DOM compatibility
}

const DonationSection: FC = () => {
  const commonStyle: CSSProperties = {
    position: 'absolute',
    border: '0',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
  }

  const donationFormStyle: CSSProperties = {
    ...commonStyle,
    height: '100%',
  }

  const thermometerStyle: CSSProperties = {
    ...commonStyle,
    height: '120px',
  }

  const donationFormProps: ExtendedIframeProps = {
    title: 'Donation form powered by Zeffy',
    style: donationFormStyle,
    src: 'https://www.zeffy.com/embed/donation-form/free-for-charity-endowment-fund',
    allowpaymentrequest: '',
    allowtransparency: 'true', // ✅ fixed here
  }

  const thermometerProps: ExtendedIframeProps = {
    title: 'Donation thermometer powered by Zeffy',
    style: thermometerStyle,
    src: 'https://www.zeffy.com/embed/thermometer/free-for-charity-endowment-fund',
    allowtransparency: 'true', // ✅ fixed here
  }

  return (
    <div className="bg-[#003566] py-[54px]">
      <div className="w-[90%] md:w-[80%] mx-auto py-[27px]">
        <div className="mb-[10px]">
          <h3 className="text-[32px] font-[500] leading-[42px] pb-[10px] text-white" id="cinzel">
            Empower Charities with Your Generosity
          </h3>
        </div>

        <div className="h-full min-h-[1374px] pt-[120px]">
          {/* Thermometer Embed */}
          <div className="relative w-full h-[120px]">
            <iframe {...thermometerProps}></iframe>
          </div>
        </div>

        <div className="h-full min-h-[1200px] bg-white space-y-10">
          {/* Donation Form */}
          <div className="relative w-full h-[1200px]">
            <iframe {...donationFormProps}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationSection
