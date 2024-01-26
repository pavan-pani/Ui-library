import React from 'react'
import howToUse from '../../Assets/howToUse.jpg'
import './howToUse-syles.scss'

const HowToUse = () => {
  return (
    <div className='howToUse'>
      <div className='useimage'>
        <img className="img" src={howToUse}></img>
      </div>
      <div className='info-text'>Team is working on this feature, meanwhile you can checkout the code <a href='https://github.com/pavan-pani/Ui-library/tree/master/Ui-Library/src/Ui_components'>here</a></div>

    </div>
  )
}

export default HowToUse