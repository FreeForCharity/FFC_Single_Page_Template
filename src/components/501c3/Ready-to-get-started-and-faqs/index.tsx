import React from 'react'
import ReadyToGetStarted from '@/components/help-for-charities/Ready-to-Get-Started-Now'
import AccordionItem from '@/components/ui/Accordion'

const index = () => {
  return (
    <div className="w-full max-w-[100%]">
      <div className="w-full max-w-[90%] mx-auto">
        <ReadyToGetStarted />
        <AccordionItem
          number="3"
          title=" Free For Charity Domain Name and Microsoft 365 Email Hosting Request"
        >
          <p className="pb-[1em]">
            Free For Charity Provides free .org domain names to US 501c3 organizations. Once your
            onboarding forms are accepted you will receive an email from the system with the
            discount code to request a new domain name or to transfer your current domain name to us
            so we can start managing it and paying the annual fees.
          </p>
          <h1 className="pb-[1em] font-[700]">
            Visit{' '}
            <a href="/domains" className="text-[#2ea3f2]">
              https://freeforcharity.org/domains
            </a>{' '}
            and follow all steps
          </h1>
          <p className="pb-[1em]">
            Once we have the domain name under management we can then set up your professional email
            addresses e.g. board@yourcharityname.org
          </p>
          <h1 className="font-[700]">
            As always if you run into problems contact us at anytime{' '}
            <a href="mailto:clarkemoyer@freeforcharity.org" className="text-[#2ea3f2]">
              clarkemoyer@freeforcharity.org
            </a>{' '}
            <a href="tel:5202228104">520-222-8104</a>
          </h1>
        </AccordionItem>
        <AccordionItem number="4" title="InterServer Nonprofit Hosting Request">
          <div className="space-y-6 font-[500] text-[#666]">
            {/* Intro Paragraph */}
            <p className="pb-4 leading-relaxed">
              A very small number of hosting providers provide free hosting for nonprofits. We
              recommend InterServer, and use them for our own site to host the core WordPress files
              for your website. Below are instructions for how to get free hosting from InterServer
              and set it up so that we can help manage your site. Once we have access to your
              hosting and website we can then add in the extra WPMUDEV and DIVI capabilities to
              either create a totally new site or update your current site.
            </p>

            {/* Section 1: Get Free Hosting */}
            <div>
              <ol className="list-decimal list-outside pl-5">
                <li>
                  Visit{' '}
                  <a
                    href="https://my.interserver.net/login.php"
                    className="text-[#2ea3f2] hover:underline"
                  >
                    sales@interserver.net
                  </a>{' '}
                  to create a free account with your organizational email address{' '}
                  <span className="">accounts@yourcharityname.org</span>
                </li>

                <li>
                  Send an email to{' '}
                  <a
                    href="mailto:sales@interserver.net"
                    className="text-[#2ea3f2] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://my.interserver.net
                  </a>{' '}
                  with:
                  <ul className="list-disc list-inside ml-6 mt-2 ">
                    <li>A copy of your IRS 501(c)(3) tax identification letter</li>
                    <li>
                      The domain name you want hosted with InterServer (from the Free For Charity
                      Domain Service)
                    </li>
                  </ul>
                </li>

                <li>Wait for InterServer to set up your account (they will do this promptly)</li>
                <li>Once your account is set up, log in to your DirectAdmin panel</li>
              </ol>
            </div>

            {/* Section 2: Setting Up WordPress */}
            <div>
              <h2 className="text-[22px] font-[500] text-[#333] mt-6 mb-3">Setting Up WordPress</h2>
              <ol className="list-decimal list-outside  pl-5">
                <li>In DirectAdmin, locate and open Softaculous</li>
                <li>Find WordPress in the list of available applications</li>
                <li>Click “Install” next to WordPress</li>
                <li>
                  Fill out the installation form:
                  <ul className="list-disc list-inside mt-2 ">
                    <li>Choose your domain</li>
                    <li>Leave the directory field blank for installation in the root directory</li>
                    <li>Set up an admin username and strong password</li>
                    <li>Choose a site name and description of your charity</li>
                  </ul>
                </li>
                <li>Click “Install” to complete the WordPress setup</li>
              </ol>
            </div>

            {/* Section 3: Adding Admin */}
            <div>
              <h2 className="text-[22px] font-[500] text-[#333] mt-6 mb-3">
                Adding Free For Charity Admin
              </h2>
              <ol className="list-decimal list-outside  pl-5">
                <li>Log in to your new WordPress dashboard</li>
                <li>Go to Users → Add New</li>
                <li>
                  Fill out the form:
                  <ul className="list-disc list-inside ml-6 mt-2 ">
                    <li>Username: globaladmin</li>
                    <li>
                      Email:{' '}
                      <a
                        href="mailto:globaladmin@freeforcharity.org"
                        className="text-[#2ea3f2] hover:underline"
                      >
                        globaladmin@freeforcharity.org
                      </a>
                    </li>
                    <li>Set a strong password</li>
                    <li>Role: Administrator</li>
                  </ul>
                </li>
                <li>Click “Add New User”</li>
              </ol>
            </div>

            {/* Section 4: Footer Link */}
            <div>
              <h2 className="text-[22px] font-[500] text-[#333] mt-6 mb-3">
                Adding InterServer Link to Footer
              </h2>
              <ol className="list-decimal list-outside  pl-5">
                <li>In your WordPress dashboard, go to Appearance → Customize</li>
                <li>Navigate to the footer section</li>
                <li>Add the following text: “Powered by InterServer”</li>
                <li>
                  Make the text “InterServer” a hyperlink to{' '}
                  <a
                    href="https://www.interserver.net/"
                    className="text-[#2ea3f2] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.interserver.net
                  </a>
                </li>
                <li>Save and publish your changes</li>
              </ol>
            </div>

            {/* Important Notes */}
            <div>
              <h2 className="text-[22px] font-[500] text-[#333] mt-6 mb-3">Important Notes:</h2>
              <ul className="list-disc list-inside pl-1">
                <li>
                  You <strong>must</strong> add the “Powered by InterServer” link within{' '}
                  <strong>30 days</strong>, or you’ll need to pay for the hosting package
                </li>
                <li>
                  InterServer is a for-profit US company that provides free hosting. Free For
                  Charity is a 501(c)(3) technology adoption charity; they are{' '}
                  <em>separate entities</em>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <p>
              As always, if you run into problems, contact us anytime{' '}
              <a
                href="mailto:clarkemoyer@freeforcharity.org"
                className="text-[#2ea3f2] hover:underline"
              >
                clarkemoyer@freeforcharity.org
              </a>{' '}
              520-222-8104
            </p>
          </div>
        </AccordionItem>
      </div>
    </div>
  )
}

export default index
