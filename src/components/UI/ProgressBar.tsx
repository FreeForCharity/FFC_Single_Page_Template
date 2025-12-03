'use client'
import React, { useEffect, useState } from 'react'

interface ProgressBarProps {
  title: string
  percentage: number // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage }) => {
  const [progress, setProgress] = useState(0)

  // Animate on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100) // small delay for smooth start
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="w-full">
      {/* Title */}
      <p className="text-[14px] font-[700] text-[#111111] mb-1" id="fauna-font">
        {title}
      </p>

      {/* Progress Bar Container */}
      <div className="relative h-8 mb-[10px] bg-[#EBEBEB] rounded-[6px] overflow-hidden shadow-sm">
        {/* Animated Fill */}
        <div
          className="absolute top-0 left-0 h-full bg-[#003566] transition-all duration-1000 ease-out flex items-center justify-end pr-3"
          style={{ width: `${progress}%` }}
        >
          <span className="text-white text-sm font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
