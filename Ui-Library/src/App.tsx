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
import Accordion from './Ui_components/Accordion/Accordion'

function App() {
  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div>, disabled: true },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];
  const accordionSections = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: <Tabs tabs={tabs}/> },
    // Add more sections as needed
  ];

  return (
    <div className="app-container">
      <h1>Accordion Example</h1>
      <Accordion sections={accordionSections} />
    </div>
  );
}
export default App
