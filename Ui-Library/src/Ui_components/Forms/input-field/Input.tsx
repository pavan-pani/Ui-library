import { FC } from 'react';
import './input-styles.scss';

//defineing Input types and sizes
type InputType = "text" | "email" | "number" | "password"  | "file" | "range" | "search";

//interface for props. use this as templete to craete Input 
export type InputProps ={
    onChange: (value: string | number) => void;
    type?: InputType;
    label: string;
    value: string | number;
    disabled?: boolean;
    required?: boolean;
    placeholder:string
}

//react Input
const Input: FC<InputProps> = ({ ...props }) => {
    const inputClass = `${props.type}`
    return (
        <div className='input-box'>
            {props.label &&  <label className='lable'>{props.label} {props.required&&<span className='required'>*</span>}</label>}
            {props.disabled ? 
                <input
                    className={inputClass}
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    placeholder={props.placeholder}
                    disabled
                /> 
            :props.required? 
                <input
                    className={inputClass}
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    placeholder={props.placeholder}
                    required
                />
            : 
                <input
                    className={inputClass}
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    placeholder={props.placeholder}
                />
            }
        </div>
       
    );
};

export default Input;