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
        <div className='TOGGLE___toggle'>
            <div className={`TOGGLE___label-text ${checked ? '' : 'TOGGLE___active-text'}`}>{offState}</div>
            <div className={`TOGGLE___toggle-switch ${checked ? 'TOGGLE___active' : ''}`} onClick={handleButtonClick}>
                <div className="TOGGLE___slider"></div>
            </div>
            <div className={`TOGGLE___label-text ${checked ? 'TOGGLE___active-text' : ''}`}>{onState}</div>

        </div>

    );
};

export default ToggleButton;
