import React, { useState } from 'react';

const FaqItems = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium ">{question}</p>
          <svg
            className={`w-6 h-6 transition-transform transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
            />
          </svg>
        </button>
        {isOpen && <p className="mt-2 ">{answer}</p>}
      </div>






    );
};

export default FaqItems;