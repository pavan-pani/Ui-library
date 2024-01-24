import React, { useState } from 'react'
import './docs-styles.scss'
import Buttons, { ButtonProps } from '../../Ui_components/Button/Buttons'
import Input, { InputProps } from '../../Ui_components/Forms/input-field/Input'
import Checkbox, { CheckboxProps } from '../../Ui_components/Forms/Check-box/CheckBox'
import RadioButton, { RadioButtonProps } from '../../Ui_components/Forms/Radio-button/RadioButton'
import Textarea, { TextareaProps } from '../../Ui_components/Forms/Text-area/TextArea'
import DatePicker, { DatePickerProps } from '../../Ui_components/date-pickers/DatePicker'
import ToggleButton, { ToggleButtonProps } from '../../Ui_components/Toggle/Toggle'
import Dropdown, { DropdownProps } from '../../Ui_components/Drop-down/Drop-down'
import MultiSelectDropdown, { MultiSelectDropdownProps } from '../../Ui_components/Mult-Select/MultSelect-Dropdown'
import Accordion from '../../Ui_components/Accordion/Accordion'
import Tabs from '../../Ui_components/Tabs/Tab'

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

/******************* Check-boxs **************************/
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const handleCheckboxChange = (newState: boolean) => {
    setIsChecked(() => {
      return newState; // Set the new value
    });
    
  };
  const handleCheckboxChange1 = (newState: boolean) => {
    setIsChecked1(() => {
      return newState; // Set the new value
    });
    
  };
  const checkboxJson:CheckboxProps={
    checked: isChecked,
    label: "Normal",
    disabled: false,
    onChange: handleCheckboxChange,
  }
  const checkboxJson1:CheckboxProps={
    checked: isChecked1,
    label: "Disabled",
    disabled: true,
    onChange: handleCheckboxChange1,
  }

  /************************** Radio **********************/
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  const radioJson: RadioButtonProps = {
    label: "option 1",
    value: "option1",
    onChange: handleRadioChange,
    name: "radioGroup"// Set the same name for each RadioButton in the group
  }
  const radioJson2: RadioButtonProps = {
    label: "option 2",
    value: "option2",
    checked: true,
    onChange: handleRadioChange,
    name: "radioGroup"// Set the same name for each RadioButton in the group
  }
  const radioJson3: RadioButtonProps = {
    label: "option 3",
    value: "option3",
    onChange: handleRadioChange,
    disabled:true,
    name: "radioGroup"// Set the same name for each RadioButton in the group
  }


  /************************** Text Area **********************/
  const [textinputValue, setTextInputValue] = useState<string>('');
  const [textinputValue1, setTextInputValue1] = useState<string>('');
  const [textinputValue2, setTextInputValue2] = useState<string>('');

  const handleTextareaChange = (value: string) => {
    setTextInputValue(()=>{
      return value
    });
  };
  const handleTextareaChange1 = (value: string) => {
    setTextInputValue1(()=>{
      return value
    });
  };
  const handleTextareaChange2 = (value: string) => {
    setTextInputValue2(()=>{
      return value
    });
  };
  const TextinputJson:TextareaProps={
    value: textinputValue,
    onChange: handleTextareaChange,
    label:"Required Text area",
    placeholder:"Enter Yout text here",
    disabled: false,
    required: true,
  }
  const TextinputJson1:TextareaProps={
    value: textinputValue1,
    onChange: handleTextareaChange1,
    label:"disabled Text area",
    placeholder:"Enter Yout text here",
    disabled: true,
    required: false,
  }
  const TextinputJson2:TextareaProps={
    value: textinputValue2,
    onChange: handleTextareaChange2,
    label:"Normal Text area",
    placeholder:"Enter Yout text here",
    disabled: false,
    required: false,
  }

  /************************** date picker **********************/
  const [dateinputValue, setdateInputValue] = useState<string>('');
  const [dateinputValue1, setdateInputValue1] = useState<string>('');
  const handledatechange = (value:any) => {
    setdateInputValue(() => {
      return value; // Set the new value
    });
  };
  const handledatechange1 = (value:any) => {
    setdateInputValue1(() => {
      return value; // Set the new value
    });
  };
  const dateJson:DatePickerProps={
    type: 'date',
    label: "Start Date",
    value: dateinputValue,
    disabled: false,
    onChange: handledatechange,
    required: false,
  }
  const dateJson1:DatePickerProps={
    type: 'date',
    label: "End Date",
    value: dateinputValue1,
    disabled: true,
    onChange: handledatechange1,
    required: false,
  }

  /************************** Toggle **********************/
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleToggleChange = (checked: boolean) => {
    setIsToggled(checked);
  };
  const toggleJson:ToggleButtonProps={
    offState: "OFF",
    onState: "ON",
    checked: isToggled,
    onChange: handleToggleChange
  }

  /************************** Drop-down **********************/
  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
    // Perform any other actions based on the selected option
  };
  const dropDownson:DropdownProps={
    options : ['Option 1', 'Option 2', 'Option 3','Option 4', 'Option 5', 'Option 6'],
    default:"Select an option",
    labal:"Drop Down",
    onSelect:handleSelect,
    disabled:false
  }
  const handleMultiSelect = (selectedOptions: string[]) => {
    console.log('Selected options:', selectedOptions);
    // Perform any other actions based on the selected options
  };
  const multiSelectJson:MultiSelectDropdownProps={
    options:['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
    disabled:false,
    label:"Select options",
    onSelect:handleMultiSelect
  }

  /************************** Accordions **********************/
  const accordionSections = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    // Add more sections as needed
  ];

  /************************** tabs **********************/
  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Disabled Tab', content: <div>Content for Tab 2</div>, disabled: true },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];
  const tabs1 = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div>, },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];
  return (
    <div className='doc-container'>
      <div className='btn-item'>
        <div className='doc-text'>Buttons</div>
        <div className='btn-components'>
          <div className='large-buttons'>
            <Buttons {...buttonJson1large}/>
            <Buttons {...buttonJson2large}/>
            <Buttons {...buttonJson3large}/>
          </div>
          <div className='medium-buttons'>
            <Buttons {...buttonJson1medium}/>
            <Buttons {...buttonJson2medium}/>
            <Buttons {...buttonJson3medium}/>
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
      <div className='CheckBox-item'>
        <div className='doc-text'>Check Boxs</div>
        <div className='CheckBox-components'>
          <div className='Check-Box'>
            <Checkbox {...checkboxJson}/>
            <Checkbox {...checkboxJson1}/>
          </div>
        </div>
      </div>
      <div className='radio-item'>
        <div className='doc-text'>Radio Buttons</div>
        <div className='radio-components'>
          <div className='radio-Box'>
          <RadioButton {...radioJson} checked={selectedValue === 'option1'}/>
          <RadioButton {...radioJson2} checked={selectedValue === 'option2'}/>
          <RadioButton {...radioJson3} checked={selectedValue === 'option3'}/>
          </div>
        </div>
      </div>
      <div className='textarea-item'>
        <div className='doc-text'>Text Area</div>
        <div className='textarea-components'>
          <div className='textarea-Box'>
            <Textarea {...TextinputJson}/>
            <Textarea {...TextinputJson1}/>
            <Textarea {...TextinputJson2}/>
          </div>
        </div>
      </div>
      <div className='date-item'>
        <div className='doc-text'>Date Picker</div>
        <div className='date-components'>
          <div className='date-Box'>
            <DatePicker {...dateJson}/> 
            <DatePicker {...dateJson1}/>
          </div>
        </div>
      </div>
      <div className='dropDown-item'>
        <div className='doc-text'>Selcteros</div>
        <div className='dropDown-components'>
          <div className='dropDown-Box'>
            <Dropdown {...dropDownson} />
            <MultiSelectDropdown {...multiSelectJson}/>
          </div>
        </div>
      </div>
      <div className='toggle-item'>
        <div className='doc-text'>Toggle</div>
        <div className='toggle-components'>
          <div className='toggle-Box'>
            <ToggleButton {...toggleJson}/>
          </div>
        </div>
      </div>
      <div className='Accordions-item'>
        <div className='doc-text'>Accordions</div>
        <div className='Accordions-components'>
          <div className='Accordions-Box'>
          <Accordion sections={accordionSections} />
          </div>
        </div>
      </div>
      <div className='tabs-item'>
        <div className='doc-text'>Tabs</div>
        <div className='tabs-components'>
          <div className='tabs-Box'>
            <Tabs tabs={tabs1} />
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs