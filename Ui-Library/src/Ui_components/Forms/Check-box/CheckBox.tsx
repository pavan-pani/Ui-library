// Checkbox.tsx

import React from 'react';
import './checkBox-style.scss'

export interface CheckboxProps {
    label: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.checked);
    };

    return (
        <div>
            {props.disabled ?
                <label className="CHECKBOX___container CHECKBOX___disabled">{props.label}
                    <input type="checkbox" checked={props.checked} onChange={handleCheckboxChange} disabled />
                    <span className="CHECKBOX___checkmark CHECKBOX___disabled"></span>
                </label>

                :
                <label className="CHECKBOX___container">{props.label}
                    <input type="checkbox" checked={props.checked} onChange={handleCheckboxChange} />
                    <span className="CHECKBOX___checkmark"></span>
                </label>
                }
        </div>
    );
};

export default Checkbox;
