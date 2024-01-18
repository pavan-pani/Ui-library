import { ButtonHTMLAttributes, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Buttons, { ButtonProps } from './Ui_components/Button/Buttons'
import Input, { InputProps } from './Ui_components/Forms/input-field/Input'
import DatePicker, { DatePickerProps } from './Ui_components/date-pickers/DatePicker'

function App() {
  const [inputValue, setInputValue] = useState<string>('');
 
  const handlechange = (value:any) => {
    // Implement your resubmit logic here
    setInputValue(() => {
      console.log(value); // Log the current value
      return value; // Set the new value
    });
    // setInputValue(value);
    // console.log(inputValue);
    // return "done"
  };



  const inputJson1:DatePickerProps={
    type: 'date',
    label: "Start Date",
    value: inputValue,
    disabled: true,
    onChange: handlechange,
    required: false,
  }
 
  return (
    <>
      <p className='text'>My name is Pavan..!</p>
      <div className='card'>
        <DatePicker {...inputJson1}/>
      </div>
  
      
      

    </>
  )
  }

export default App
