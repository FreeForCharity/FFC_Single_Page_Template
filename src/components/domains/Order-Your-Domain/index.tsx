import React from 'react'
import StepCard from '@/components/ui/StepCard'

const HowToOrderDomain = () => {
  const steps = [
    {
      number: 1,
      title: 'Step 1',
      description: 'Set up your Cloudflare account',
      linkText: 'Find more',
      innerbg: 'bg-[#E09900]',
      outerbg: 'bg-[#fff]',
      linkUrl: '/domains/#orderstep1',
    },
    {
      number: 2,
      title: 'Step 2',
      description: 'Go to our domain management system page',
      linkText: 'Click here',
      innerbg: 'bg-[#4995D2]',
      outerbg: 'bg-[#4995D2]',
      linkUrl:
        'https://freeforcharity.org/hub/store/ffc-consulting/free-org-domain-name-with-microsoft-email-address-setup',
    },
    {
      number: 3,
      title: 'Step 3',
      description: 'Select Register a New Domain',
      linkText: 'Follow Steps',
      innerbg: 'bg-[#4995D2]',
      outerbg: 'bg-[#4995D2]',
      linkUrl: '/domains/#orderstep3',
    },
    {
      number: 4,
      title: 'Step 4',
      description: 'Change your DNS to point to Cloudflare',
      linkText: 'Click here',
      innerbg: 'bg-[#E09900]',
      outerbg: 'bg-[#fff]',
      linkUrl: '/domains/#orderstep',
    },
  ]

  return (
    <section className="py-[40px] bg-[#f2f2f2] relative overflow-hidden">
      {/* Top Wave */}
      <div
        className="absolute top-0 w-full h-[100px] z-[1] scale-y-[-1] bg-no-repeat bg-top"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNGRkZGRkYiPjxwYXRoIGQ9Ik02NDAgMTM5TDAgMHYxNDBoMTI4MFYwTDY0MCAxMzl6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTY0MCAxMzlMMCA0MnY5OGgxMjgwVjQybC02NDAgOTd6Ii8+PC9nPjwvc3ZnPg==')",
          backgroundSize: '100% 100px',
        }}
      />

      <div className="relative z-[2]">
        <div className="pb-[3px] w-[80%] max-w-6xl mx-auto mt-[2px] pt-[30px]">
          <h2
            className="text-center mb-[16px] text-[30px] md:text-[35px] text-[#0d7ff8] font-[700] leading-[46px]"
            id="cantata-font"
          >
            HOW TO ORDER YOUR DOMAIN NAME
          </h2>
          <p
            className="md:w-[85%] mx-auto text-center text-[20px] font-medium leading-[30px]"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            To order a free domain name with Free For Charity you must sign up for a Cloudflare
            account and also sign up at our hosting project site FFC Hosting. Before signing up at
            our site please read this full page to make sure you are ready to complete all steps.
          </p>
        </div>

        <div className="w-[80%] max-w-6xl mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave (fixed perfectly) */}
      <div
        className="absolute bottom-0 left-0 w-full h-[100px] z-[1] bg-no-repeat bg-bottom"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNGRkZGRkYiPjxwYXRoIGQ9Ik02NDAgMTM5TDAgMHYxNDBoMTI4MFYwTDY0MCAxMzl6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTY0MCAxMzlMMCA0MnY5OGgxMjgwVjQybC02NDAgOTd6Ii8+PC9nPjwvc3ZnPg==')",
          backgroundSize: '100% 100px',
        }}
      ></div>
    </section>
  )
}

export default HowToOrderDomain
