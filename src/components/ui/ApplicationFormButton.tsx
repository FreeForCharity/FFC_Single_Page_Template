'use client'

import React, { useState, useEffect } from 'react'

interface ApplicationFormButtonProps {
  text?: string
  className?: string
  formUrl?: string
}

const ApplicationFormButton: React.FC<ApplicationFormButtonProps> = ({
  text = 'Apply to Become a Supported Charity',
  className = '',
  formUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Microsoft Form URL - can be passed as prop or use environment variable
  const microsoftFormUrl =
    formUrl ||
    process.env.NEXT_PUBLIC_APPLICATION_FORM_URL ||
    'https://forms.office.com/pages/responsepage.aspx?id=YOUR_FORM_ID'

  const openPopup = () => {
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  // Handle body scroll lock with cleanup
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden'

      // Cleanup function to restore original overflow
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

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
              className="w-full h-full rounded-lg border-0"
              title="Application Form"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ApplicationFormButton
