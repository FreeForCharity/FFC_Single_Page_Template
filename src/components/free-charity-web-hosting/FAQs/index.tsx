'use client'
import React, { useState, useRef, useLayoutEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

/* ---------------------------------------------------
   Reusable AccordionItem Component (Styled)
--------------------------------------------------- */
interface AccordionItemProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
  small?: boolean // ✅ for bottom style
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen,
  onToggle,
  children,
  small = false,
}) => {
  const [height, setHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  // Using useLayoutEffect (not useEffect) for synchronous DOM measurement before paint
  // This is the correct React pattern to avoid visual flicker when measuring and updating height
  useLayoutEffect(() => {
    if (contentRef.current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  return (
    <div className="mb-4 border-2 border-[#0d7ff8] rounded-[10px] overflow-hidden transition-all duration-300">
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full px-4 py-3 flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
          isOpen ? 'bg-white/90' : 'bg-none'
        }`}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 pr-3 font-[700] leading-[26px] transition-all duration-300 ease-in-out ${
            small
              ? `text-[18px] text-center ${isOpen ? 'text-[#0d7ff8]' : 'text-black'}`
              : isOpen
                ? 'text-[22px] text-[#0D7FF8]'
                : 'text-[18px] text-black'
          }`}
          id="cantata-font"
        >
          {title}
        </span>

        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          {isOpen ? (
            <FaMinus className="w-5 h-5 text-white bg-[#1c6e92] p-1 rounded-full transition-transform duration-300" />
          ) : (
            <FaPlus className="w-5 h-5 text-white bg-[#1c6e92] p-1 rounded-full transition-transform duration-300" />
          )}
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'bg-white/90' : 'bg-white'
        }`}
        style={{ maxHeight: height }}
      >
        <div
          ref={contentRef}
          className={`px-4 pb-4 pt-2 font-[500] transition-colors duration-300 ${
            small ? 'text-[16px] leading-[26px]' : 'text-[18px] leading-[29px]'
          }`}
          id="raleway-font"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------
   Main Layout: Left, Right & Bottom Accordions
--------------------------------------------------- */
const AccordionLayout = () => {
  const [openLeft, setOpenLeft] = useState<string | null>('left1')
  const [openRight, setOpenRight] = useState<string | null>('right1')
  const [bottomOpen, setBottomOpen] = useState(false)

  const toggleLeft = (id: string) => {
    setOpenLeft(openLeft === id ? null : id)
  }

  const toggleRight = (id: string) => {
    setOpenRight(openRight === id ? null : id)
  }

  return (
    <div className="py-[40px] flex flex-col items-center gap-6 px-[0px]">
      <div className="w-[90%] md:w-[80%] mx-auto max-w-[1080px]">
        <div className="py-[24px]">
          <h1
            className="mt-[2px] mb-[12px] pb-[10px] text-[31px] font-[700] leading-[31px] text-[#0d7ff8] text-center"
            id="cantata-font"
          >
            FAQS
          </h1>
        </div>

        <div className="pt-[26px]">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Left Column */}
            <div>
              <AccordionItem
                title="How can you afford to give away free domain names?"
                isOpen={openLeft === 'left1'}
                onToggle={() => toggleLeft('left1')}
              >
                As a 501(c)3 charity ourselves we seek individual, business, and grant sources of
                funding. At current, free for charity has not received a grant specifically for
                domain names or hosting but uses individual and business contributions to fund this
                program.
              </AccordionItem>

              <AccordionItem
                title="Are you really a Charity?"
                isOpen={openLeft === 'left2'}
                onToggle={() => toggleLeft('left2')}
              >
                Yes, We have had IRS designation since 2014 and have been building our systems and
                testing or support for several years. While charities for charities are rare they do
                exist and in fact fill an important need in reducing overhead expenses for other
                nonprofits. Our IRS designation number (EIN) is 46-2471893. You can see our
                guidestar profile{' '}
                <a href="https://www.guidestar.org/profile/46-2471893" className="text-[#0d7ff8]">
                  here.
                </a>{' '}
                We are proud to also recommend other charities for charities that inspired us to{' '}
                <a href="https://www.techsoup.org/" className="text-[#0d7ff8]">
                  create this nonprofit.
                </a>
              </AccordionItem>
            </div>

            {/* Right Column */}
            <div>
              <AccordionItem
                title="Where do you get your domain name packages?"
                isOpen={openRight === 'right1'}
                onToggle={() => toggleRight('right1')}
              >
                We are a registered reseller of eNom domain names. eNom has graciously provided us
                with a Platinum account to support other non profits providing the lowest cost
                domain names for a charity of our size. As we get more and more charities into the
                domain system we expect the costs to freeforchariy.org to drop even further.
              </AccordionItem>

              <AccordionItem
                title="Why do I not see hosting as an option?"
                isOpen={openRight === 'right2'}
                onToggle={() => toggleRight('right2')}
              >
                We have a large backlog for new sites and support. We try to process at least 1 new
                charity into the full hosting system per week.
                <br />
                Ways to get in faster:
                <ul className="list-disc list-inside mt-1">
                  <li>
                    If you already have your 501(c)3 get your free domain from us{' '}
                    <a href="/domains" className="text-[#0d7ff8]">
                      (https://freeforcharity.org/domains)
                    </a>
                  </li>
                  <li>
                    If you can provide your own qualified WordPress webmaster you may be moved up in
                    the list.
                  </li>
                </ul>
              </AccordionItem>
            </div>
          </div>

          {/* Bottom Independent Accordion */}
          <div className="w-full max-w-md mx-auto">
            <AccordionItem
              title="If I am an individual or business and donate money for a domain package to Free for Charity is this tax-deductible?"
              isOpen={bottomOpen}
              onToggle={() => setBottomOpen(!bottomOpen)}
              small
            >
              While any official tax guidance should come from your accountant or other tax advisor
              Free For Charity is a registered 501(c)(3) organization and donations are
              tax-deductible. Our IRS designation number (EIN) is 46-2471893. Upon checkout you will
              receive a receipt to provide to your accountant. Specifically, if you represent a
              business you can elect to deduct this as an expense versus as a donation depending on
              the guidance of your tax advisor.
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionLayout
