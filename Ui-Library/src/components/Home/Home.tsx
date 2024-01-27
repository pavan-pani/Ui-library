import './home-styles.scss'
import logo from "../../Assets/logo.png"
import Buttons, { ButtonProps } from '../../Ui_components/Button/Buttons'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/contact', { replace: true })
    }
    const handleClick1 = () => {
        navigateTo('/components', { replace: true })
    }

    const inputJson: ButtonProps = {
        text: "Feedback",
        variants: "primary",
        disabled: false,
        size: "large",
        onClick: handleClick,
    }
    const inputJson1: ButtonProps = {
        text: "Explore",
        variants: "primary",
        disabled: false,
        size: "large",
        onClick: handleClick1,
    }
    return (
        <div className='container'>
            <div className='left'>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='discreption'>Don't depend on any other, build your own-Ui </div>
                <div className='app-discreption'>This Ui library has a most commonly used components in any project, such as Forms, Buttons, Selectors, Tabs Etc. These will help you to build Appliction from scratch by giving you full freedom for customize to matching your design system.</div>
                <div className='home_buttons'>
                    <Buttons {...inputJson1} />
                    <Buttons {...inputJson} />
                </div>
            </div>
            <div className='right'>
                <div className='heading'>Key Features</div>
                <div className='points'>
                    <div className='point'>No worries on customizing</div>
                    <div className='point'>Match your design system</div>
                    <div className='point'>Freedom in styling</div>
                    <div className='point'>Easy in event handling</div>
                    <div className='point'>All in one place</div>
                    <div className='point'>Save you are work and time</div>
                </div>
            </div>
        </div>
    )
}

export default Home