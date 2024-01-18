import { ButtonHTMLAttributes, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Buttons, { ButtonProps } from './Ui_components/Button/Buttons'
import Input, { InputProps } from './Ui_components/Forms/input-field/Input'
import DatePicker, { DatePickerProps } from './Ui_components/date-pickers/DatePicker'
import Checkbox, { CheckboxProps } from './Ui_components/Forms/Check-box/CheckBox'
import RadioButton, { RadioButtonProps } from './Ui_components/Forms/Radio-button/RadioButton'
import Textarea, { TextareaProps } from './Ui_components/Forms/Text-area/TextArea'

function App() {

  const [inputValue, setInputValue] = useState<string>('');

  const handleTextareaChange = (value: string) => {
    setInputValue(()=>{
      return value
    });
  };
  console.log(inputValue);

  const inputJson:TextareaProps={
    value: inputValue,
    onChange: handleTextareaChange,
    label:"Text area",
    placeholder:"Enter Yout text here",
    disabled: false,
    required: false,
  }

  return (
    <div>
      <Textarea {...inputJson}/>
    </div>
  );
}
export default App
