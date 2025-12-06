'use client'

import React, { useState } from 'react'

interface ApplicationFormButtonProps {
  text?: string
  className?: string
}

const ApplicationFormButton: React.FC<ApplicationFormButtonProps> = ({
  text = 'Apply to Become a Supported Charity',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Microsoft Form URL - replace with actual URL when provided
  const microsoftFormUrl = 'https://forms.office.com/pages/responsepage.aspx?id=YOUR_FORM_ID'

  const openPopup = () => {
    setIsOpen(true)
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden'
  }

  const closePopup = () => {
    setIsOpen(false)
    // Restore body scroll
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <button
        onClick={openPopup}
        className={`
          rounded-[20px] border-[5px] border-[#2A6682] flex items-center justify-center 
          text-black font-[400] text-[25px] px-[28px] py-[16px] 
          hover:bg-[#2A6682] hover:text-white transition-all duration-300
          ${className}
        `}
        id="lato-font"
      >
        {text}
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] mx-4 bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Microsoft Form iframe */}
            <iframe
              src={microsoftFormUrl}
              className="w-full h-full rounded-lg"
              title="Application Form"
              frameBorder="0"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ApplicationFormButton
