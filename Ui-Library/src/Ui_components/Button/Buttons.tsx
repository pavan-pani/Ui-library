import { FC, MouseEvent } from 'react';
import "./button-style.scss";

//defineing button types and sizes
type ButtonType = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

//interface for props. use this as templete to craete button
export interface ButtonProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    variants?: ButtonType;
    text: string;
    disabled?: boolean;
    size?: ButtonSize
}

//react button
const Buttons: FC<ButtonProps> = ({ ...props }) => {
    const buttonClass = `${props.variants} ${props.size} ${props.disabled}`
    return (
        <button className={buttonClass} type="button" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Buttons;