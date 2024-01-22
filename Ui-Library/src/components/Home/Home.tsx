import React from 'react'
import './home-styles.scss'
import logo from "../../Assets/logo.png"
import Buttons, { ButtonProps } from '../../Ui_components/Button/Buttons'


const Home = () => {

    const handleClick = () => {

    }

    const inputJson: ButtonProps = {
        text: "Feedback",
        variants: "primary",
        disabled: false,
        size:"large",
        onClick: handleClick,
    }
    const inputJson1: ButtonProps = {
        text: "Docs",
        variants: "primary",
        disabled: false,
        size:"large",
        onClick: handleClick,
    }
    return (
        <div className='container'>
            <div className='left'>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='discreption'>Don't depend on any other, build you own-Ui </div>
                <div className='home_buttons'>
                    <Buttons {...inputJson1} />
                    <Buttons {...inputJson} />
                </div>
            </div>
            <div className='right'>
                <div className='heading'>Key Features</div>
                <div className='points'>
                    <div className='point'>No worries on customissing</div>
                    <div className='point'>Match your design system</div>
                    <div className='point'>Freedom in styling</div>
                    <div className='point'>Easy event handling</div>
                    <div className='point'>All in one pull</div>
                    <div className='point'>Save you are work and time</div>
                </div>
            </div>
        </div>
    )
}

export default Home