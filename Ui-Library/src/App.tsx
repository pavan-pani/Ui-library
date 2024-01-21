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
import MultiSelectDropdown, { MultiSelectDropdownProps } from './Ui_components/Mult-Select/MultSelect-Dropdown'
import Tabs from './Ui_components/Tabs/Tab'
import Toast from './Ui_components/Toaster-Message/Toaster'

function App() {
  return (
    <div>
      {/* <Toast type="success" message="Success message here" /> */}
      <Toast type="warning" message="Success message here" />
      {/* <Toast type="danger" message="Success message here" /> */}
    </div>
  );
}
export default App
