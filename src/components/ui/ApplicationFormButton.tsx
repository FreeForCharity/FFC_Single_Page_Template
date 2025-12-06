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
  const [isLoading, setIsLoading] = useState(true)

  // Microsoft Form URL - hardcoded as requested
  // TODO: Replace YOUR_FORM_ID with actual Microsoft Form ID from https://forms.office.com
  // Example: https://forms.office.com/pages/responsepage.aspx?id=dHQyc2FwbGUtaWQtZXhhbXBsZQ
  const microsoftFormUrl =
    formUrl || 'https://forms.office.com/pages/responsepage.aspx?id=YOUR_FORM_ID'

  const openPopup = () => {
    setIsOpen(true)
    setIsLoading(true)
  }

  const closePopup = () => {
    setIsOpen(false)
    setIsLoading(true) // Reset loading state for next open
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Handle body scroll lock with cleanup
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden'

      // Handle Escape key to close modal
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closePopup()
        }
      }

      document.addEventListener('keydown', handleEscape)

      // Cleanup function to restore original overflow and remove event listener
      return () => {
        document.body.style.overflow = originalOverflow
        document.removeEventListener('keydown', handleEscape)
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
          role="dialog"
          aria-modal="true"
          aria-labelledby="application-form-title"
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] mx-4 bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close application form"
              type="button"
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

            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg z-20">
                <div className="relative">
                  {/* Animated spinner */}
                  <div className="w-16 h-16 border-4 border-[#2A6682] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="mt-4 text-lg text-gray-600 font-medium">
                  Loading application form...
                </p>
                <p className="mt-2 text-sm text-gray-500">This may take a few seconds</p>
              </div>
            )}

            {/* Microsoft Form iframe */}
            <iframe
              id="application-form-title"
              src={microsoftFormUrl}
              className="w-full h-full rounded-lg border-0"
              title="Charity Application Form"
              sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
              allow="geolocation; microphone; camera"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ApplicationFormButton
