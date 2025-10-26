import React from 'react'
import Image from 'next/image'

interface IPhoneMockupProps {
  children?: React.ReactNode
  logoSrc?: string
  logoAlt?: string
  className?: string
  backgroundColor?: string
}

export function IPhoneMockup({ children, logoSrc, logoAlt, className = '', backgroundColor = 'bg-white' }: IPhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame */}
      <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto">
        {/* iPhone outer frame with shadow */}
        <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
          {/* iPhone inner screen */}
          <div className={`relative ${backgroundColor} rounded-[2.5rem] overflow-hidden aspect-[9/19.5]`}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>
            
            {/* Screen content */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={logoAlt || 'App Logo'}
                  width={200}
                  height={200}
                  className="w-3/4 h-auto object-contain"
                />
              ) : (
                children
              )}
            </div>
          </div>
          
          {/* Side buttons */}
          <div className="absolute -left-1 top-20 w-1 h-8 bg-black rounded-l-lg"></div>
          <div className="absolute -left-1 top-32 w-1 h-12 bg-black rounded-l-lg"></div>
          <div className="absolute -left-1 top-48 w-1 h-12 bg-black rounded-l-lg"></div>
          <div className="absolute -right-1 top-32 w-1 h-16 bg-black rounded-r-lg"></div>
        </div>
      </div>
    </div>
  )
}

