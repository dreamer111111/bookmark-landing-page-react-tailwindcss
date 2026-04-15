import React from 'react'

const AccordionItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="border-b border-gray-200 w-full">
        <button
        className="flex items-center justify-between w-full py-5 text-left group focus:outline-none"
        onClick={onClick}
      >
        <span className="text-brand-dark group-hover:text-brand-red transition-colors duration-300 md:text-lg">
          {question}
        </span>
        
        <img 
          src="/images/icon-arrow.svg" 
          alt="" 
          className={`transition-transform duration-300 ${
            isActive ? 'rotate-180 brightness-0 sepia-[1] saturate-10000 hue-rotate-320' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? 'max-h-60 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-brand-gray leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default AccordionItem