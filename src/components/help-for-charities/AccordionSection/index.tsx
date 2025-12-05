import React from 'react'
import AccordionItem from '@/components/ui/Accordion'

const index = () => {
  return (
    <div className="bg-[#fcfcfc]">
      <div className="w-[90%] max-w-[90%] mx-auto py-[2%] items-center text-center">
        <h1 className="text-[#f27022] text-[28px] font-[700] mb-[15px] mt-[40px]">
          Empower Your Charity with Cutting-Edge Technology
        </h1>
        <p className="text-[18px] font-[500] color-black text-left" id="lato-font">
          At Free For Charity, we believe that every non-profit deserves a powerful digital
          presence. That’s why we offer a comprehensive, modern tech stack to 501(c)(3)
          organizations – completely free of charge. When you partner with us, you’re not just
          getting a website; you’re embracing a full suite of top-tier digital tools.
        </p>
      </div>
      <div className="w-[90%] max-w-[90%] mx-auto py-[2%] items-center text-center">
        <h1 className="text-[#f27022] text-[28px] font-[700] mb-[15px]">
          Our Tech Stack: Your Gateway to Digital Excellence
        </h1>
        <p className="text-[18px] font-[500] color-black text-left" id="lato-font">
          By choosing Free For Charity, you’re agreeing to adopt our carefully curated tech stack:
        </p>
      </div>

      <div className="w-full">
        <div className="w-[90%] max-w-[90%] mx-auto">
          <AccordionItem number="1" title=" WordPress">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Easy-to-use, flexible content management for your website</li>
              <li>For Us: Standardized platform for efficient support and management</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="2" title=" Divi Theme">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Professional-looking website with drag-and-drop design capabilities</li>
              <li>For Us: Consistent, high-quality design across all charity partners</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="3" title=" WPMU DEV">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Enterprise-grade security, performance, and management tools</li>
              <li>For Us: Centralized management and monitoring of all partner websites</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="4" title=" Cloudflare">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Faster website load times and enhanced security</li>
              <li>For Us: Centralized management and automation tools.</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="5" title=" Microsoft 365">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Professional email and collaboration tools</li>
              <li>For Us: Streamlined communication and support processes</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="6" title=" VolunteerMatch">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Access to a large pool of potential volunteers</li>
              <li>For Us: Validation of your active community engagement</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="7" title=" GuideStar">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Increased transparency and credibility with donors</li>
              <li>For Us: Verified financial and operational information about our partners</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="8" title=" TechSoup">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Access to discounted software and technology resources</li>
              <li>For Us: Additional validation of your non-profit status</li>
            </ul>
          </AccordionItem>

          <AccordionItem number="9" title=" PayPal">
            <ul className="list-disc list-inside space-y-1">
              <li>For You: Easy, secure online donation processing</li>
              <li>For Us: Standardized financial transaction system for all partners</li>
            </ul>
          </AccordionItem>
        </div>
      </div>
    </div>
  )
}

export default index
