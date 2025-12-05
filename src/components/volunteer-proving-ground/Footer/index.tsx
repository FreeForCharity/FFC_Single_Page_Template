// components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center border-t border-gray-300 py-10 px-6 font-sans text-gray-700 max-w-[950px] mx-auto mt-4">
      {/* Title */}
      <h2 className="text-center text-[25px] md:text-[1.875rem] font-[600] text-[#111827] mb-[1rem]">
        You have Mastered the Basics - What is Next?
      </h2>

      {/* Congrats Paragraph */}
      <p className="text-center text-[#374151] text-[14px] mb-[1.5rem] pb-[1em] leading-relaxed">
        Congratulations on completing the Core Competencies training. Upon successful completion,
        you will receive a <strong>certificate of completion</strong> and will be credited with up
        to <strong>40 hours of volunteer work</strong> for your time and dedication.
      </p>

      {/* Subtitle */}
      <h3 className="text-center text-[1.25rem] font-[600] text-[#111827] mb-[1rem] pb-[10px]">
        Final Proficiency Demonstration
      </h3>

      {/* Instruction */}
      <p className="text-center text-[#374151] text-[14px] mb-[1.5rem] pb-[1em] leading-relaxed">
        To receive your certificate and move on to the next step of formal onboarding, you must
        schedule a final review meeting.
      </p>

      {/* Steps List */}
      <ol className="list-decimal list-inside text-[#374151] text-[14px] mb-[1.5rem] pb-[1em] leading-relaxed max-w-[600px] mx-auto">
        <li className="leading-[2]">
          Create a calendar invite for a <strong>30-minute Teams meeting</strong> for any time or
          day <strong>after 6:00 PM EST</strong>.
        </li>
        <li className="leading-[2]">
          Send the invitation to <strong>clarkemoyer@freeforcharity.org.</strong>
        </li>
        <li className="leading-[2]">
          Text Clarke Moyer at <strong>520-222-8104</strong> to confirm the appointment has been
          received.
        </li>
      </ol>

      {/* Final Note */}
      <p className="text-center text-[#374151] text-[14px] mb-[1.5rem] pb-[1em] leading-relaxed">
        During this meeting, you will be asked to screen-share and demonstrate your skills and
        access to the tools covered in this training. After a successful demonstration, you will be
        issued your certificate and will be moved into in-processing as a formal Free For Charity
        volunteer.
      </p>
    </footer>
  )
}

export default Footer
