import React, { useState } from 'react';
import './drop-down-styles.scss'

export interface DropdownProps {
  options: string[];
  default: string;
  disabled?: boolean
  labal: string;
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ ...props }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    props.onSelect(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-container ${props.disabled ? 'disabled' : ''}`}>
      <div className='labal'>{props.labal}</div>
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption || props.default}
      </div>
      {isOpen && (
        <ul className="options-list">
          {props.options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

};

export default Dropdown;
