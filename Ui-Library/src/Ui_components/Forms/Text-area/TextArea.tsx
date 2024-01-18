// Textarea.tsx

import React, { ChangeEvent } from 'react';
import './TextArea-styles.scss'

export interface TextareaProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    placeholder: string
}

const Textarea: React.FC<TextareaProps> = ({ ...props }) => {
    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value; // Limit to maxLength characters
        props.onChange(inputValue);
    };

    return (
        <div>
            {props.disabled ?
                <div className='container'>
                    {props.label && <label>{props.label}</label>}
                    <textarea
                    className='disabled'
                        value={props.value}
                        onChange={handleInputChange}
                        maxLength={1000}
                        placeholder={props.placeholder} disabled
                    />
                    <div className='text'>Maximum Characters is 1000</div>
                </div>
                : props.required ?
                    <div className='container'>
                        {props.label && <label>{props.label}<span>*</span></label>}
                        <textarea
                            value={props.value}
                            onChange={handleInputChange}
                            maxLength={1000}
                            placeholder={props.placeholder} required
                        />
                        <div className='text'>Maximum Characters is 1000</div>
                    </div>
                    : <div className='container'>
                        {props.label && <label>{props.label}</label>}
                        <textarea
                            value={props.value}
                            onChange={handleInputChange}
                            maxLength={1000}
                            placeholder={props.placeholder}
                        />
                        <div className='text'>Maximum Characters is 1000</div>
                    </div>}
        </div>

    );
};

export default Textarea;
