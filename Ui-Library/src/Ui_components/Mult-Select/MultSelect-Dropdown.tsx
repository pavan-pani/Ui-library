import React, { useState } from 'react';
import './multSelect-styles.scss'

export interface MultiSelectDropdownProps {
  options: string[];
  disabled?:boolean;
  onSelect: (selectedOptions: string[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, onSelect, disabled}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    const updatedOptions = isSelected
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onSelect(selectedOptions);
    closeDropdown();
  };

  return (
    <div className={`dropdown-container ${disabled ? 'disabled' : ''}`}>
      <div className="selected-options" onClick={toggleDropdown}>
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Select options'}
      </div>
      {isOpen && (
        <div className="options-container">
          <ul className="options-list">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={selectedOptions.includes(option) ? 'selected' : ''}
              >
                {option}
              </li>
            ))}
          </ul>
          <button className="confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
