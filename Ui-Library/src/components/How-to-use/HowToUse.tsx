import './howToUse-syles.scss'
import filePath from "../../Assets/filePath.png"
import num1 from '../../Assets/num1.png'
import num2 from '../../Assets/num2.png'
import num3 from '../../Assets/num3.png'
import num4 from '../../Assets/num4.png'
import num5 from '../../Assets/num5.png'




const HowToUse = () => {
  return (
    <div className='howToUse'>
      <div className='step-main'>
        <img className='step-num' src={num1}></img>
        <div className='heading'>Download the zip file</div>
        <div className='subHeading'>Click <a href='https://github.com/pavan-pani/UI-Component'>here</a> to download the file and extract it in your local machine.</div>
      </div>
      <div className='step-main'>
        <img className='step-num' src={num2}></img>
        <div className='heading'>Insert into your project</div>
        <div className='subHeading'>insert the unziped folder into your project working directory as showing bellow.</div>
        <img className='file-path' src={filePath}></img>
      </div>
      <div className='step-main'>
        <img className='step-num' src={num3}></img>
        <div className='heading'>Refer Demo.txt file</div>
        <div className='subHeading'>Each component has a demo.txt file, which will help you to understand how use components</div>
      </div>
      <div className='step-main'>
        <img className='step-num' src={num4}></img>
        <div className='heading'>Add styles (Optional)</div>
        <div className='subHeading'>Each component has a .scss file, You change the components styles to match your design system</div>
      </div>
      <div className='step-main last-child'>
        <img className='step-num' src={num5}></img>
        <div className='heading'>Thats it. Call the components  </div>
        {/* <h5>Each compopont as a .scss file, You change the components styles to match your design system</h5> */}
      </div>
    </div>
  )
}

export default HowToUse