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
    <div className="ACCORDION___accordion">
      {sections.map((section, index) => (
        <div key={index} className="ACCORDION___accordion-section">
          <div
            className={`ACCORDION___accordion-header ${activeIndex === index ? 'ACCORDION___active' : ''}`}
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span className="ACCORDION___arrow">{activeIndex === index ? <SlArrowDown /> : <SlArrowUp />}</span>
          </div>
          {activeIndex === index && (
            <div className="ACCORDION___accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
