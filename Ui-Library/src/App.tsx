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

function App() {

  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    console.log(value);

  };
  const inputJson: RadioButtonProps = {
    label: "option 1",
    value: "option1",
    onChange: handleRadioChange,
    name: "radioGroup"// Set the same name for each RadioButton in the group
  }
  const inputJson2: RadioButtonProps = {
    label: "option 2",
    value: "option2",
    checked: true,
    onChange: handleRadioChange,
    name: "radioGroup"// Set the same name for each RadioButton in the group
  }
  const inputJson3: RadioButtonProps = {
    label: "option 3",
    value: "option3",
    onChange: handleRadioChange,
    disabled:true,
    name: "radioGroup"// Set the same name for each RadioButton in the group
  }

  return (
    <div>
      <RadioButton {...inputJson}
        checked={selectedValue === 'option1'}
      />
      <RadioButton
        {...inputJson2}
        checked={selectedValue === 'option2'}
      />
      <RadioButton
        {...inputJson3}
        checked={selectedValue === 'option3'}
      />
    </div>
  );
}
export default App
