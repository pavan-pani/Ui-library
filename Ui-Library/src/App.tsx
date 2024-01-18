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
import ToggleButton, { ToggleButtonProps } from './Ui_components/Forms/Toggle/Toggle'

function App() {

  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggleChange = (checked: boolean) => {
    setIsToggled(checked);
  };
  console.log(isToggled);
  const inputJson:ToggleButtonProps={
    offState: "OFF",
    onState: "ON",
    checked: isToggled,
    onChange: handleToggleChange
  }
  
  return (
    <div>
      <ToggleButton {...inputJson}/>

      <p>Toggle State: {isToggled ? 'On' : 'Off'}</p>
    </div>
  );
}
export default App
