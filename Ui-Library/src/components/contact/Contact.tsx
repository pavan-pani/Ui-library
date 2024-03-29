import './contact-styles.scss'
import email from "../../Assets/mail.png"
import github from "../../Assets/github.png"
import linkedin from "../../Assets/linkedin.png"
import dev3 from "../../Assets/dev3.png"



const Contact = () => {
  const handleContactButtonClick = () => {
    const email = 'pavanpk1012@gmail.com';
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='contact-container'>
      <div className='dev-image'>
        <img className='dev' src={dev3}></img>
      </div>
      <div className='contact-list'>
        <div className='icon-card' title='E-mail'>
          <img className='email' src={email} onClick={handleContactButtonClick}></img>
        </div>
        <div className='icon-card' title='LinkedIn'>
          <a href='https://www.linkedin.com/in/g-pavan-kumar-2957181b5/'>
            <img className='linkedin' src={linkedin} ></img>
          </a>
        </div>
        <div className='icon-card' title='Git Hub'>
          <a href='https://github.com/pavan-pani'>
            <img className='github' src={github} ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact