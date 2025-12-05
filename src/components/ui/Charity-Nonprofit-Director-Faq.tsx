import React from 'react'
import Link from 'next/link'
import AccordionItem from '@/components/ui/Accordion'

const CharityFAQ: React.FC = () => {
  return (
    <div className="bg-white py-10 w-full">
      <div className="w-full max-w-[90%] mx-auto flex flex-wrap gap-[5.5%]">
        {/* Left Column */}
        <div className="w-full md:w-[47.25%]">
          <h1 className="font-bold text-[28px] text-[#f27022] mb-4">
            We are here to provide help for charities while testing people in real world skills.
          </h1>
          <h1 className="font-bold text-[28px] text-[#f27022] mb-4">
            We can’t test them without helping your charity or non profit.
          </h1>
          <p className="text-[18px] font-medium text-black" id="lato-font">
            Our main goal is to train people in the skills of effective business and technology
            management. We accomplish this goal of providing help for charities by producing
            in-house projects like:
          </p>
          <ul className="list-disc pl-5 text-[18px] font-medium text-black mt-4" id="lato-font">
            <li>
              Research papers, case studies, and use cases from other industries and nonprofits.
            </li>
            <li>Guides for the charity or nonprofit manager in many best business practices.</li>
            <li>
              Unbiased technology directory focused on helping you find the software and tools you
              need.
            </li>
            <li>Unbiased service and consultant directory, free of overt marketing or gimmicks.</li>
            <li>
              Free charity website hosting with tons of for-profit paid products included free for
              charities.
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[47.25%] mt-8 md:mt-0">
          <h1 className="font-bold text-[28px] text-[#f27022] mb-4">
            Charity / Nonprofit Director FAQ
          </h1>

          <AccordionItem
            number="1"
            title="Is there a need for a charity to provide help for charities?"
          >
            Yes, there is a need to provide help for charities in many{' '}
            <strong>
              ways! Free for Charity is not the only ‘charity for charities’ helping to lower your
              costs.
            </strong>{' '}
            Another great charity showing all the big name things you can get for free or at heavy
            discounts is{' '}
            <Link href="https://www.techsoup.org/" className="text-[#2ea3f2]">
              TechSoup.org
            </Link>
            .{' '}
            <strong>
              Even with these other sites many charities and non profits still pay for profit
              companies to do work every day or buy products at full cost.
            </strong>{' '}
            Some do so without knowing that as a charity they qualify for lower rates or even free
            services from major companies. Others because{' '}
            <strong>
              it is hard to find the free products needed through the massive amount of paid
              marketing by well-funded for profit companies.
            </strong>
            <br /> <br />
            The Free for Charity services, consultant, and technology products directories seek to
            fix this problem with our motto:{' '}
            <strong>“Decisions should be made by metrics, not marketing.”</strong>
          </AccordionItem>

          <AccordionItem number="2" title="Where did the idea come from?">
            Free for Charity was started when the founder first became a board member on the local
            children’s museum’s board of directors. In just a few short weeks he uncovered{' '}
            <strong>
              many items the museum was paying for that were free to charities but the museum was
              paying for anyways.
            </strong>
            <br />
            <br />
            In addition, for big projects the museum was{' '}
            <strong>not following any procurement management procedures at all.</strong> Items such
            as quoting from multiple vendors before a bid or cross-leveling the bids for price and
            quality were not being done.
            <br />
            <br />
            Other issues found were the{' '}
            <strong>
              reliance on outdated technology because better alternatives were not known to the non
              IT-trained staff.
            </strong>
          </AccordionItem>

          <AccordionItem number="3" title="Why do charities pay for items they can get for free?">
            The first reaction to uncovering these issues with the board was anger.{' '}
            <strong>The museum was losing or wasting thousands each year;</strong> money that could
            be used to keep admission prices lower and serve more children! After a deeper look{' '}
            <strong>it all came back to training and experience.</strong> Most charity founders and
            directors of small and medium charities are trained in the specialty of the charity’s
            mission, in this case child education and development.{' '}
            <strong>
              It is unreasonable to expect every charity director to be up to date on all
              procurement management methods and the technology that supports business while still
              running day-to-day operations.
            </strong>{' '}
            This is where Free for Charity helps charities’ projects to thrive.
          </AccordionItem>

          <AccordionItem
            number="4"
            title="Where does Free for Charity come in to help our charity or nonprofit?"
          >
            Free for Charity will fill these vital roles for non profits and charities saving money
            for real program expenses.{' '}
            <strong>
              Most small to medium charities do not have the budget for full-time IT staff or
              business analysts like for profit companies and large charities.
            </strong>{' '}
            This is because grant managers and large{' '}
            <strong>donors want to see the lowest cost to “overhead”</strong> and don’t always look
            closely at the results that fall under program expenses.
            <br /> <br />
            Because of this common practice by large donors and grant institutions it is{' '}
            <strong>
              actually better for a small charity to waste money due to mismanagement
            </strong>{' '}
            such as by <strong>paying for something they could get for free</strong> because the
            item is put on the books as a ‘program expense’ and not questioned. Program expenses do
            not count against the charity like “overhead” does.
            <br /> <br />
            Paying someone on the non-program admin staff or the director of the charity to research
            and call companies for discounts is a labor cost that counts as “overhead” because it
            helps more than one program.{' '}
            <strong>
              With Free for Charity doing the work the target charity does not have to claim costs
              for overhead.
            </strong>{' '}
            Your nonprofit or charity group will gain access to professionals that have more
            expertise with the common business tasks like researching products to meet the charities
            needs.{' '}
            <strong>
              Free for Charity will also show you recommended technology and business practices that
              can save thousands each year.
            </strong>
          </AccordionItem>

          <AccordionItem
            number="5"
            title="How can I tell if we have high overhead? / My charity does not have high overhead!"
          >
            Free for Charity is all about efficiency.{' '}
            <strong>
              Many charities ‘fix’ this overhead problem by treating all staff as working on / in
              the programs or pro-rating between them all and hoping they will not get audited.
            </strong>{' '}
            While on paper you show very low overhead the functional effect is still the same.{' '}
            <strong>
              You have high paid staff like a director doing work that should be done by skilled
              volunteers or technology.
            </strong>{' '}
            Items such as your nonprofit or charity group bookkeeping data entry, or a full-time
            employee who updates the charity website or nonprofit Facebook page occasionally between
            front desk tasks. <br /> <br />
            If you have ever seen a charity with lower than 5% overhead, this is mostly what is
            going on. If you have low recorded overhead then{' '}
            <strong>
              your charity is most likely not using experts for tasks and all staff are wearing many
              hats; most of which they were never trained in.
            </strong>
          </AccordionItem>

          <AccordionItem number="6" title="How do you provide your program services?">
            We provide help for charities with efficiency. One element of efficiency is getting the{' '}
            <strong>best product at the lowest price.</strong> For charities and non profits{' '}
            <strong>much more labor can be provided for free by volunteers.</strong> Free for
            Charity does not make your full-time staff take on more and more roles{' '}
            <strong>we can fully take over many of these tasks with expert volunteer labor.</strong>{' '}
            Business and IT professionals are always seeking to advance their skills while helping
            out charities. We capture this labor pool (or create it with training programs) and then
            manage the volunteers for your charities tasks and projects.{' '}
            <strong>
              We can do this at extremely low if not zero cost because of economies of scale, and
              because most of this work is process or research based and does not have ‘hard’ costs
              like equipment.
            </strong>
          </AccordionItem>

          <AccordionItem
            number="7"
            title="Are you like volunteermatch.org or other matching agencies?"
          >
            Not exactly. That type of charity matches workers with charities but then{' '}
            <strong>leaves the management of the work to the individual</strong> nonprofit or
            charity group.{' '}
            <strong>
              Many small and medium charities do not have the time to manage a volunteer or group of
              volunteers.
            </strong>{' '}
            Even charities with a volunteer coordinator who works with entry level volunteers may
            not have the skills to manage highly technical or high level business volunteers such as
            those with MBAs or decades in high level information technology.{' '}
            <strong>
              This can result in your best volunteers leaving before a project is completed.
            </strong>
            <br /> <br />
            <strong>
              Free for Charity will manage both the work and the results of the projects in-house.
              All you have to do as a charity is to work with your project manager to set
              expectations and define results at each stage of the project.
            </strong>
            <br /> <br />
            We also provide many physical services like{' '}
            <strong>nonprofit websites and hosting</strong> that are functionally like a product to
            your charity.{' '}
            <strong>We manage all the functions in the background with volunteers.</strong> With
            these other sites you get one person assigned to work your web project and you have no
            management support once it is done unless that one person stays on as a volunteer
            permanently.{' '}
            <strong>
              With Free for Charity if your initial volunteer leaves another from the web team still
              works on your project
            </strong>{' '}
            and keeps your websites running and maintained. This is just one example.
          </AccordionItem>

          <AccordionItem number="8" title="What do I need to get started?">
            All you need to do to get Free for Charity to provide help for your charity’s mission
            today is to contact us with some basic information about your charity. We need to know
            what type of projects you would like us to look at or undertake. Please fill out the
            form below and we will be in touch shortly.
          </AccordionItem>
        </div>
      </div>
    </div>
  )
}

export default CharityFAQ
