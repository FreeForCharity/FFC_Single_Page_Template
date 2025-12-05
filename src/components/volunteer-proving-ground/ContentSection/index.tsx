// import ProvingGroundSection from '@/components/ProvingGroundSection';
import ProvingGroundSection from '@/components/ui/ProvingGroundSection'

export default function Home() {
  return (
    <div>
      <ProvingGroundSection title="Welcome to the Proving Ground: Our Commitment to Excellence">
        <p>
          First and foremost, thank you. We are incredibly grateful that you are considering
          dedicating your valuable time and skills to the mission of Free For Charity. Our
          organization is powered by the generosity of volunteers like you, and every contribution
          makes a tangible difference.
        </p>
        <p>
          You will notice that our training process is rigorous and presents significant hurdles.
          This is by design. Because we are entrusted with the sensitive data and digital
          infrastructure of the non-profits we serve, we have a profound responsibility to ensure
          the highest standards of security, professionalism, and competence. This upfront
          investment in training is our first line of defense; it ensures that only the most
          dedicated and capable individuals are granted access to our internal systems.
        </p>
        <p>
          Successfully completing this proving ground demonstrates your commitment to our values and
          prepares you for real-world impact. For those who excel, there will be opportunities to
          gain access to our supported charities’ systems—a privilege reserved for the best of the
          best. We believe in empowering our volunteers with real responsibility, and that begins
          with a shared commitment to excellence.
        </p>
      </ProvingGroundSection>

      <ProvingGroundSection title="A Note on Time Estimates: Focus on Mastery, Not Speed">
        <p>
          The time estimates provided for each module are not deadlines; they are guides for deep
          and meaningful learning. The goal of this training is not to finish as quickly as
          possible, but to achieve a genuine understanding of the concepts and tools.
        </p>
        <p>
          We strongly encourage you to use the full time allotted for each section. This is your
          opportunity to explore the provided resources, experiment with the tools, and use your AI
          assistants to clarify any terms or concepts you are unfamiliar with. Rushing through the
          material will only create knowledge gaps that will hinder your effectiveness later on.
          View this as a dedicated investment in your skills—the more thoroughly you learn now, the
          more impactful your contribution to our mission will be.
        </p>
      </ProvingGroundSection>

      <ProvingGroundSection
        title="Training Plan Summary
"
      >
        <p>
          This Core Competencies training is comprised of 7 modules. The total estimated time for
          completion is between 33 and 46 hours. Please use the links below to navigate to each
          section.
        </p>
        <ul className="text-[#444] list-none p-0 m-0">
          <li>
            <a href="#module1" className="text-blue-600 leading-[28px] hover:underline">
              <span className="font-[700]">Module 1:</span> LastPass - Our Security Standard
            </a>{' '}
            (1 - 2 Hours)
          </li>
          <li>
            <a href="#module2" className="text-blue-600 leading-[28px] hover:underline">
              <span className="font-[700]">Module 2:</span> Introduction to AI Assistants
            </a>{' '}
            (2 - 4 Hours)
          </li>
          <li>
            <a href="#module3" className="text-blue-600 leading-[28px] hover:underline">
              <span className="font-[700]">Module 3:</span> MS-900 Microsoft 365 Fundamentals
            </a>{' '}
            (12 - 16 Hours)
          </li>
          <li>
            <a href="#module4" className="text-blue-600 leading-[28px] hover:underline">
              <span className="font-[700]">Module 4:</span> MS-700 Teams Administration Fundamentals
            </a>{' '}
            (8 - 12 Hours)
          </li>
          <li>
            <a href="#module5" className="text-blue-600 leading-[28px] hover:underline">
              <span className="font-[700]">Module 5:</span> Microsoft OneDrive - Our Shared File
              System
            </a>{' '}
            (2 Hours)
          </li>
          <li>
            <a href="#module6" className="text-blue-600 leading-[28px] hover:underline">
              <span className="font-[700]">Module 6:</span> Microsoft Planner - Task Management in
              Teams
            </a>{' '}
            (2 Hours)
          </li>
          <li>
            <a href="#module7" className="text-blue-600 leading-[28px] hover:underline">
              <span className="font-[700]">Module 7:</span> Microsoft 365 Apps Quick Start
            </a>{' '}
            (6 - 8 Hours)
          </li>
        </ul>
      </ProvingGroundSection>
    </div>
  )
}
