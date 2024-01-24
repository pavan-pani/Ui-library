import { FC } from 'react';
import './datePicker-styles.scss'

//defineing Input types
type DatePickerType = "date" ;

//interface for props. use this as templete to craete DatePicker 
export type DatePickerProps ={
    onChange: (value: string | number) => void;
    type?: DatePickerType;
    label: string;
    value: string | number;
    disabled?: boolean;
    required?: boolean;
}

//react DatePicker
const DatePicker: FC<DatePickerProps> = ({ ...props }) => {
    const inputClass = `DATEPICKER___input`
    return (
        <div className='DATEPICKER___input-box'>
            {props.label &&  <label className='DATEPICKER___lable'>{props.label} {props.required && <span className='DATEPICKER___required'>*</span>}</label>}
            {props.disabled ? 
                <input
                    className={inputClass}
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    disabled
                /> 
            :props.required? 
                <input
                    className={inputClass}
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    required
                />
            : 
                <input
                    className={inputClass}
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                />
            }
        </div>
       
    );
};

export default DatePicker;