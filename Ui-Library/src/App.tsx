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
import Dropdown, { DropdownProps } from './Ui_components/Drop-down/Drop-down'

function App() {
  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
    // Perform any other actions based on the selected option
  };
 
  const inputJson:DropdownProps={
    options : ['Option 1', 'Option 2', 'Option 3','Option 4', 'Option 5', 'Option 6'],
    default:"Select an option",
    onSelect:handleSelect
  }
  
  return (
    <div>
      <Dropdown {...inputJson} />
    </div>
  );
}
export default App
