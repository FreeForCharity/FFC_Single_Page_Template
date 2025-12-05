import React from 'react'
import Link from 'next/link'
import AccordionItem from '@/components/ui/Accordion'
const index = () => {
  return (
    <div className="bg-[#fcfcfc] pt-[60px] pb-[25px] w-full max-w-[100%]">
      <div className="w-[90%] max-w-[90%] mx-auto py-[2%] items-center">
        <h1 className="text-[#f27022] text-[28px] font-[700] mb-[15px] text-center">
          Free For Charity 501c3 Supported Charity Products and Services
        </h1>
        <div className="mt-[20px] mb-[2.5%]">
          <p className="text-[18px] font-[500] color-black pb-[1em]" id="lato-font">
            Free For Charity is a US based 501c3 charity for charities that provides other US based
            501(c)(3) organizations with free .org domain name registration, professional website
            design tools and templates, as well as ongoing website management and digital
            infrastructure services.
          </p>
          <p className="text-[18px] font-[500] color-black pb-[1em]" id="lato-font">
            Our mission is to empower charities with a strong digital presence, enabling them to
            effectively communicate their cause and engage supporters online.
          </p>
          <p className="text-[18px] font-[500] color-black" id="lato-font">
            By offering these essential services always at no cost, we ensure that even small
            non-profits can present themselves professionally in the digital world, enhancing their
            visibility and impact.
          </p>
        </div>

        <div className="mb-[70px]">
          <h1 className="text-[26px] font-[500] color-[#333] text-center pb-[10px]" id="aria-font">
            Before You Begin Onboarding
          </h1>
          <h3 className="text-[14px] font-[700] underline text-center text-[#666]" id="aria-font">
            Obtain the following information and materials ready to ensure you can complete the
            onboarding steps
          </h3>

          <ol
            className="text-[14px] font-[500] text-[#666] list-decimal list-outside space-y-3 pl-5 mb-[1em]"
            id="aria-font"
          >
            <li>501(c)(3) determination letter from the IRS</li>
            <li>EIN (Employer Identification Number)</li>
            <li>
              Board member information:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-[#666]">
                <li>Names</li>
                <li>Titles</li>
                <li>Contact information (Including a LinkedIn Profile link)</li>
                <li>Brief bios</li>
              </ul>
            </li>
            <li>Mission statement</li>
            <li>Most recent Form 990</li>
            <li>Annual report (if available)</li>
            <li>List of programs and services</li>
            <li>Financial statements for the past two years</li>
            <li>Current operating budget</li>
            <li>Strategic plan (if available)</li>
            <li>Existing website URL (if applicable)</li>
            <li>Social media account links</li>
            <li>Logo files (high-resolution)</li>
            <li>Any existing brand guidelines</li>
          </ol>
        </div>

        <AccordionItem number="1" title=" External Validation Preparation">
          <h1 className="font-[700] text-[18px] text-[#4A4A44] pb-[1em] underline" id="lato-font">
            Before proceeding, ensure your charity agrees to use and sets up:
          </h1>
          <ol
            className="text-[18px] font-[500] text-[#4A4A44] list-decimal list-outside pl-5 pb-[23px]"
            id="lato-font"
          >
            <li>
              A yourcharityname@outlook.com Email Address
              <ol className="list-decimal list-outside ml-8 mt-1 space-y-1 text-[#666]">
                <li>
                  Used to sign up for all other accounts until you have your professional email
                  address
                </li>
              </ol>
            </li>

            <li>
              An up-to-date GuideStar profile
              <ol className="list-decimal list-outside ml-8 mt-1 space-y-1 text-[#666]">
                <li>
                  (Please read our{' '}
                  <a
                    href="/guidestar-guide"
                    className="text-[#2ea3f2] hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GuideStar Guide
                  </a>
                  , we require charities to have at least Gold Seal of Transparency to receive our
                  services.)
                </li>
              </ol>
            </li>

            <li>
              A Verified Nonprofit Facebook Page
              <ol className="list-decimal list-outside ml-8 mt-1 space-y-1 text-[#666]">
                <li>
                  Used as an initial validation for your charity mission and used by other
                  validators as proof of existence.
                </li>
              </ol>
            </li>

            <li>
              A Verified Nonprofit LinkedIn Page
              <ol className="list-decimal list-outside ml-8 mt-1 space-y-1 text-[#666]">
                <li>
                  Used as an initial validation for your charity Team Members and used by other
                  validators as proof of existence.
                </li>
              </ol>
            </li>

            <li>
              A VolunteerMatch profile
              <ol className="list-decimal list-outside ml-8 mt-1 space-y-1 text-[#666]">
                <li>Used to gain board members and volunteers with a widget from your website</li>
              </ol>
            </li>

            <li>
              A TechSoup account and validation
              <ol className="list-decimal list-outside ml-8 mt-1 space-y-1 text-[#666]">
                <li>Used to gain many charity discounts including QuickBooks</li>
              </ol>
            </li>

            <li>
              A PayPal account for nonprofits
              <ol className="list-decimal list-outside ml-8 mt-1 space-y-1 text-[#666]">
                <li>Used to accept donations on your website and on Facebook</li>
              </ol>
            </li>
          </ol>
          NOTE: If any item is not yet completed we recommend you complete them in the order listed
          above. If you run into issues reach out to us by text or call for help.
        </AccordionItem>

        <AccordionItem number="2" title=" Free For Charity Onboarding Form">
          <h1 className="font-[700] text-[18px] text-[#4A4A44] pb-[1em]" id="lato-font">
            Step 1: 501C3 Status Verification via GuideStar (Only approves US Based 501c
            organizations)
          </h1>
          <h1 className="font-[700] text-[18px] text-[#4A4A44] pb-[1em]" id="lato-font">
            What is GuideStar?
          </h1>
          <p className="text-[18px] font-[500] mb-[1em]">
            <span className="font-[700]">Our Benefit:</span> By using the GuideStar profile page for
            501C3 status verification, our organization aligns itself with a respected authority in
            non-profit transparency. This association strengthens our reputation as a diligent and
            responsible entity in the philanthropic sector.{' '}
            <span className="underline font-[700]">
              It also ensures that we can check the NTEE codes to match mission alignment.
            </span>
          </p>
          <p className="text-[18px] font-[500] mb-[1em]">
            <span className="font-[700]">Your Benefit:</span> For your charity, achieving validation
            through GuideStar enhances your charity’s credibility and visibility. It reassures
            donors and stakeholders of its legal compliance and ethical standing, potentially
            increasing funding opportunities.
          </p>

          <p className="text-[18px] font-[500] mb-[1em]">
            We require two links from your GuideStar page, the public profile link, and the ‘full
            profile’ link. For instructions on how to find them in GuideStar,{' '}
            <Link href="/guidestar-guide" className="text-[#2ea3f2]">
              click here
            </Link>
            .
          </p>
          <h1 className="font-[700] text-[18px] text-[#4A4A44] pb-[1em]" id="lato-font">
            Step 2: Board Contact Information
          </h1>
          <p className="text-[18px] font-[500] mb-[1em]">
            We require full contact information for the three key roles on your charity’s board:
            President / Chair, Secretary, and Treasurer. You may optionally provide information for
            a Vice President / Vice Chair and/or an additional Member-At-Large, but the three key
            roles are non-optional.
          </p>
          <h1 className="font-[700] text-[18px] text-[#4A4A44] pb-[1em]" id="lato-font">
            Step 3: Primary and Technical Contact Information
          </h1>
          <p className="text-[18px] font-[500]">
            We require full contact information for your charity’s primary and technical contacts.
            Additionally please provide the time-zone and best contact hours for the primary
            contact. The primary and technical contacts should match those listed in GuideStar.
          </p>
        </AccordionItem>
      </div>
    </div>
  )
}

export default index
