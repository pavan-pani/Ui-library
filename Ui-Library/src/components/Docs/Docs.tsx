import React, { useState } from 'react'
import './docs-styles.scss'
import Buttons, { ButtonProps } from '../../Ui_components/Button/Buttons'
import Input, { InputProps } from '../../Ui_components/Forms/input-field/Input'

const Docs = () => {

  /******************** Buttons *************************/
  const handleClick = () => {}
  const buttonJson1large: ButtonProps = {
      text: "Primary",
      variants: "primary",
      disabled: false,
      size: "large",
      onClick: handleClick,
  } 
  const buttonJson2large: ButtonProps = {
      text: "Secondary",
      variants: "secondary",
      disabled: false,
      size: "large",
      onClick: handleClick,
  }
  const buttonJson3large: ButtonProps = {
    text: "Outline",
    variants: "outline",
    disabled: false,
    size: "large",
    onClick: handleClick,
  }
  const buttonJson4large: ButtonProps = {
    text: "Text",
    variants: "text",
    disabled: false,
    size: "large",
    onClick: handleClick,
  }
  const buttonJson1medium: ButtonProps = {
    text: "Primary",
    variants: "primary",
    disabled: false,
    size: "medium",
    onClick: handleClick,
} 
const buttonJson2medium: ButtonProps = {
    text: "Secondary",
    variants: "secondary",
    disabled: false,
    size: "medium",
    onClick: handleClick,
}
const buttonJson3medium: ButtonProps = {
  text: "Outline",
  variants: "outline",
  disabled: false,
  size: "medium",
  onClick: handleClick,
}
const buttonJson4medium: ButtonProps = {
  text: "Text",
  variants: "text",
  disabled: false,
  size: "medium",
  onClick: handleClick,
}

/******************* Input fields *******************/
const [inputValue, setInputValue] = useState<string>('');
const [inputValue1, setInputValue1] = useState<string>('');
const [inputValue2, setInputValue2] = useState<string>('');
const handlechange = (value:any) => {
  setInputValue(() => {
    return value;
  });
};
const handlechange1 = (value:any) => {
  setInputValue1(() => {
    return value;
  });
};
const handlechange2 = (value:any) => {
  setInputValue2(() => {
    return value;
  });
};
const inputJson1:InputProps={
  type: 'text',
  label: "Required input",
  value: inputValue,
  disabled: false,
  onChange: handlechange,
  required: true,
  placeholder: 'Enter your input'
}
const inputJson2:InputProps={
  type: 'text',
  label: "Disabled input",
  value: inputValue1,
  disabled: true,
  onChange: handlechange1,
  required: true,
  placeholder: 'Enter your input'
}
const inputJson3:InputProps={
  type: 'text',
  label: "Normal input",
  value: inputValue2,
  disabled: false,
  onChange: handlechange2,
  required: false,
  placeholder: 'Enter your input'
}
  return (
    <div className='doc-container'>
      <div className='btn-item'>
        <div className='doc-text'>Buttons</div>
        <div className='btn-components'>
          <div className='large-buttons'>
            <Buttons {...buttonJson1large}/>
            <Buttons {...buttonJson2large}/>
            <Buttons {...buttonJson3large}/>
            <Buttons {...buttonJson4large}/>
          </div>
          <div className='medium-buttons'>
            <Buttons {...buttonJson1medium}/>
            <Buttons {...buttonJson2medium}/>
            <Buttons {...buttonJson3medium}/>
            <Buttons {...buttonJson4medium}/>
          </div>
        </div>
      </div>
      <div className='input-item'>
        <div className='doc-text'>Text Inputs</div>
        <div className='input-components'>
          <div className='input-boxs'>
            <Input {...inputJson1}/>
            <Input {...inputJson2}/>
            <Input {...inputJson3}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs