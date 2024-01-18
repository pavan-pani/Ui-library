import { ButtonHTMLAttributes, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Buttons, { ButtonProps } from './Ui_components/Button/Buttons'
import Input, { InputProps } from './Ui_components/Forms/input-field/Input'
import DatePicker, { DatePickerProps } from './Ui_components/date-pickers/DatePicker'
import Checkbox, { CheckboxProps } from './Ui_components/Forms/Check-box/CheckBox'

function App() {
 
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newState: boolean) => {
    setIsChecked(() => {
      console.log(newState); // Log the current value
      return newState; // Set the new value
    });
    
  };
  const inputJson1:CheckboxProps={
    checked: isChecked,
    label: "test check-box",
    disabled: false,
    onChange: handleCheckboxChange,
  }

  return (
    <div>
      <Checkbox {...inputJson1}/>
    </div>
  );
  }

export default App
