// ToggleButton.tsx

import React from 'react';
import './toggle-styles.scss'; // Import the CSS file for styling

export interface ToggleButtonProps {
    offState: string;
    onState: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ offState, onState, checked, onChange }) => {
    const handleButtonClick = () => {
        onChange(!checked);
    };

    return (
        <div className='toggle'>
            <div className={`label-text ${checked ? '' : 'active-text'}`}>{offState}</div>
            <div className={`toggle-switch ${checked ? 'active' : ''}`} onClick={handleButtonClick}>
                <div className="slider"></div>
            </div>
            <div className={`label-text ${checked ? 'active-text' : ''}`}>{onState}</div>

        </div>

    );
};

export default ToggleButton;
