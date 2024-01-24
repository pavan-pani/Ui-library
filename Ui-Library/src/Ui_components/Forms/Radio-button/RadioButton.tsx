// RadioButton.tsx

import React, { ChangeEvent } from 'react';
import './RadioButton-styles.scss'

export interface RadioButtonProps {
    label: string;
    value: string;
    checked?: boolean;
    onChange: (value: string) => void;
    disabled?: boolean;
    name: string; // Set the same name for each RadioButton in the group
}

const RadioButton: React.FC<RadioButtonProps> = ({ ...props }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <div>
            {props.disabled ?
                <label className="RADIOBUTTON___container RADIOBUTTON___disabled">{props.label}
                    <input
                        type="radio"
                        value={props.value}
                        checked={props.checked}
                        onChange={handleInputChange}
                        name={props.name} disabled />
                    <span className="RADIOBUTTON___checkmark"></span>
                </label> 
                :
                <label className="RADIOBUTTON___container">{props.label}
                    <input
                        type="radio"
                        value={props.value}
                        checked={props.checked}
                        onChange={handleInputChange}
                        name={props.name} />
                    <span className="RADIOBUTTON___checkmark"></span>
                </label>
            }
        </div>
    );
};

export default RadioButton;
