import React, { useState } from 'react';
import './multSelect-styles.scss'

export interface MultiSelectDropdownProps {
  options: string[];
  disabled?:boolean;
  label:string
  onSelect: (selectedOptions: string[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({...props}) => {
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
    props.onSelect(selectedOptions);
    closeDropdown();
  };

  return (
    <div className={`MULTISELECT___dropdown-container ${ props.disabled ? 'MULTISELECT___disabled' : ''}`}>
      <div className='MULTISELECT___labal'>{ props.label}</div>
      <div className="MULTISELECT___selected-options" onClick={toggleDropdown}>
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Select options'}
      </div>
      {isOpen && (
        <div className="MULTISELECT___options-container">
          <ul className="MULTISELECT___options-list">
            { props.options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={selectedOptions.includes(option) ? 'MULTISELECT___selected' : ''}
              >
                {option}
              </li>
            ))}
          </ul>
          <button className="MULTISELECT___confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
