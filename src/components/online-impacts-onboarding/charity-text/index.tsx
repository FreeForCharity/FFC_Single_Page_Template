import React from 'react'
import HelpForCharities from '@/components/ui/help-for-charity'
import AccordionItem from '@/components/ui/Accordion'
import Link from 'next/link'

const index = () => {
  return (
    <div className="w-full bg-[#FCFCFC]">
      <div className="w-full max-w-[90%] mx-auto pt-[20px]">
        <HelpForCharities
          title="Free For Charity 501c3 Supported Charity Products and Services for Former Online Impacts Supported Charities"
          description=""
        />
        <h1 className="text-[26px] font-[500] text-[#333] my-[20px]" id="lato-font">
          Lets get started on your transfer today
        </h1>
        <p className="text-[18px] font-[500] pb-[1em]" id="lato-font">
          Great News. As an Online Impacts supported charity you already are likely using many of
          the products and features needed to convert over to Free For Charity to support your .org
          Domain Name, WordPress hosting, and more!
        </p>
        <p className="text-[18px] font-[500]" id="lato-font">
          Depending on when you signed up or were transferred to Online Impacts you are already
          likey using a registered .org domain name, Cloudflare for DNS and DDoS Protection, Web
          Hosting with interserver.net, a Softaculous managed WordPress Website, WPMUDEV Plugins for
          security and backups, and Divi as a core theme / template. If not, we can help you to
          update or upgrade your technology to these supported platforms!
        </p>
        <h1
          className="text-[23px] sm:text-[26px] font-[500] text-[#333] my-[20px] leading-[1.4]"
          id="lato-font"
        >
          We are here to help. If you run into any issues or have questions about the changes,
          please reach out directly to:
        </h1>

        <h1
          className="text-[23px] sm:text-[26px] font-[500] text-[#333] my-[20px] leading-[1.4]"
          id="lato-font"
        >
          Clarke Moyer the founder of Free For Charity at clarkemoyer@freeforcharity.org or text me
          at 520-222-8104
        </h1>
        <h1
          className="text-[23px] sm:text-[26px] font-[500] text-[#333] my-[20px] leading-[1.4]"
          id="lato-font"
        >
          Pardhasaradhi Namburi the founder of Online Impacts at pardhu@onlineimpacts.org
        </h1>
        <HelpForCharities
          title="About Free For Charity"
          description="Free For Charity is a US based 501c3 charity for charities that provides other US based 501(c)(3) organizations with free .org domain name registration, professional website design tools and templates, as well as ongoing website management and digital infrastructure services. Our mission is to empower charities with a strong digital presence, enabling them to effectively communicate their cause and engage supporters online. By offering these essential services always at no cost, we ensure that even small non-profits can present themselves professionally in the digital world, enhancing their visibility and impact."
          descriptionAlign="left"
        />

        <div className="w-full h-[1px] bg-[#7EBEC5] mt-[30px] mb-[50px]"></div>
        <h1 className="text-[26px] font-[500] text-[#333] mt-[20px]" id="lato-font">
          Before You Begin Onboarding
        </h1>
        <p className="text-[18px] font-[600] text-[#666]" id="abeezee">
          Obtain the following information and materials ready to ensure you can complete the
          onboarding steps:
        </p>
        <ol
          className="text-[18px] mb-[50px] font-[600] text-[#666] list-decimal list-inside "
          id="abeezee"
        >
          <li>501(c)(3) determination letter from the IRS</li>
          <li>EIN (Employer Identification Number)</li>
          <li>
            Board member information:
            <ol className="list-decimal list-inside ml-9 ">
              <li>Names</li>
              <li>Titles</li>
              <li>Contact information (Including a LinkedIn Profile link)</li>
              <li>Brief bios</li>
            </ol>
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

        <AccordionItem number="1" title=" External Validation Preparation">
          <h1 className="pb-[1em]">
            Before proceeding, ensure your charity agrees to use and sets up:
          </h1>
          <ol className="list-decimal list-inside pb-[23px]">
            <li>
              A yourcharityname@outlook.com Email Address
              <ol className="list-decimal list-inside ml-8">
                <li>
                  Used to sign up for all other accounts until you have your professional email
                  address
                </li>
              </ol>
            </li>
            <li>
              An up-to-date GuideStar profile
              <ol className="list-decimal list-inside ml-8">
                <li>
                  (Please read our{' '}
                  <Link href="#" className="text-[#2ea3f2]">
                    GuideStar Guide
                  </Link>
                  , we require charities to have at least
                  <strong>Gold Seal of Transparency</strong> to receive our services.)
                </li>
              </ol>
            </li>
            <li>
              A Verified Nonprofit Facebook Page
              <ol className="list-decimal list-inside ml-8">
                <li>
                  Used as an initial validation for your charity mission and used by other
                  validators as proof of existence.
                </li>
              </ol>
            </li>
            <li>
              A Verified Nonprofit LinkedIn Page
              <ol className="list-decimal list-inside ml-8">
                <li>
                  Used as an initial validation for your charity Team Members and used by other
                  validators as proof of existence.
                </li>
              </ol>
            </li>
            <li>
              A VolunteerMatch profile
              <ol className="list-decimal list-inside ml-8">
                <li>Used to gain board members and volunteers with a widget from your website</li>
              </ol>
            </li>
            <li>
              A TechSoup account and validation
              <ol className="list-decimal list-inside ml-8">
                <li>Used to gain many charity discounts including QuickBooks</li>
              </ol>
            </li>
            <li>
              A PayPal account for nonprofits
              <ol className="list-decimal list-inside ml-8">
                <li>Used to accept donations on your website and on Facebook</li>
              </ol>
            </li>
          </ol>
          NOTE: If any item is not yet completed we recommend you complete them in the order listed
          above. If you run into issues reach out to us by text or call for help.
        </AccordionItem>

        <AccordionItem number="2" title="Free For Charity Onboarding Form">
          {/* Step 1 */}
          <h1 className="text-[18px] font-[700] text-[#4a4a4a] mb-[1em]" id="lato-font">
            Step 1: 501(c)(3) Status Verification via GuideStar
          </h1>

          <h1 className="text-[18px] font-[700] text-[#4a4a4a] mb-[1em]">What is GuideStar?</h1>

          <p className="text-[18px] text-[#555] mb-[1em]">
            <span className="font-[700] text-[#4a4a4a]">Our Benefit:</span> By using the GuideStar
            profile page for 501(c)(3) status verification, our organization aligns itself with a
            respected authority in nonprofit transparency. This association strengthens our
            reputation as a diligent and responsible entity in the philanthropic sector.{' '}
            <span className="font-[700] text-[#4a4a4a] underline">
              It also ensures that we can check the NTEE codes to match mission alignment.
            </span>
          </p>

          <p className="text-[18px] text-[#555] leading-relaxed mb-[1em]">
            <span className="font-[700] text-[#4a4a4a]">Your Benefit:</span> For your charity,
            achieving validation through GuideStar enhances your credibility and visibility. It
            reassures donors and stakeholders of your legal compliance and ethical standing,
            potentially increasing funding opportunities.
          </p>

          <p className="text-[18px] text-[#555] leading-relaxed mb-[1em]">
            We require two links from your GuideStar page — the public profile link and the “full
            profile” link. For instructions on how to find them in GuideStar,{' '}
            <Link href="/guidestar-guide" className="text-[#2ea3f2] hover:underline">
              click here
            </Link>
            .
          </p>

          {/* Step 2 */}
          <h2 className="text-[18px] font-[700] text-[#4a4a4a] mb-[1em]">
            Step 2: Board Contact Information
          </h2>
          <p className="text-[18px] text-[#555] mb-[1em]">
            We require full contact information for the three key roles on your charity’s board:
          </p>

          {/* Step 3 */}
          <h2 className="text-[18px] font-[700] text-[#4a4a4a] mb-[1em]">
            Step 3: Primary and Technical Contact Information
          </h2>
          <p className="text-[18px] text-[#555]">
            We require full contact information for your charity’s primary and technical contacts.
            Additionally, please provide the time zone and best contact hours for the primary
            contact. The primary and technical contacts should match those listed in GuideStar.
          </p>
        </AccordionItem>
      </div>
    </div>
  )
}

export default index
