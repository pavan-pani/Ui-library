// Accordion.tsx

import React, { useState, FC } from 'react';
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import './accordion-styles.scss';

interface AccordionSection {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  sections: AccordionSection[];
}

const Accordion: FC<AccordionProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span className="arrow">{activeIndex === index ? <SlArrowDown /> : <SlArrowUp />}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
