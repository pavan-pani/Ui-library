import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../Assets/logo.png"
// import { NavLink } from 'react-router-dom';
import './navbar-styles.scss';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isMobileMenuOpen ? 'navbarMob' : 'navbarBig'}`}>
            <div className='header'>
                <div className="navbar-brand">
                    <img src={logo} alt="Logo" />
                </div>
                <div className='menu' onClick={toggleMobileMenu}>{isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}</div>
            </div>
            <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
                <a className='NavItem' href="/">Home</a>
                <a className='NavItem' href="/components">Components</a>
                <a className='NavItem' href="/how-to-use">How to Use</a>
                <a className='NavItem' href="/contact">Dev Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
