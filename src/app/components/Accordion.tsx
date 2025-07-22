'use client';

import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-semibold text-blue-900 pr-4">
              {item.question}
            </h3>
            <div className="text-blue-600 text-xl">
              {openIndex === index ? '−' : '+'}
            </div>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}