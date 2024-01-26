import React from 'react'
import './contact-styles.scss'
import dev1 from "../../Assets/dev1.jpg"
import dev2 from "../../Assets/dev2.jpg"
import email from "../../Assets/mail.png"
import github from "../../Assets/github.png"
import linkedin from "../../Assets/linkedin.png"
import dev3 from "../../Assets/dev3.png"



const Contact = () => {
  const handleContactButtonClick = () => {
    const email = 'pavanpk1012@gmail.com'; 
    const subject = ''; 
    const body = ''; 
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
};

return (
    <div className='contact-container'>
      <div className='dev-image'>
        <img className='dev' src={dev3}></img>
      </div>
      <div className='contact-list'>
        <div className='icon-card'>
          <img className='email' src={email} onClick={handleContactButtonClick}></img>
        </div>
        <div className='icon-card'>
          <a href='https://www.linkedin.com/in/g-pavan-kumar-2957181b5/'> 
            <img className='linkedin' src={linkedin}></img>
          </a>
        </div>
        <div className='icon-card'>
          <a href='https://github.com/pavan-pani'>
          <img className='github' src={github}></img>
          </a>
        </div>
      </div>
    </div>
);
}

export default Contact