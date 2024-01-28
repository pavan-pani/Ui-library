import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../Assets/logo.png"
import './navbar-styles.scss';
import {useLocation} from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation()
    
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
                <a className={`NavItem ${pathname === '/' ? 'active-link' : ''}`} href="/">Home</a>
                <a className={`NavItem ${pathname === '/components' ? 'active-link' : ''}`} href="/components" >Components</a>
                <a className={`NavItem ${pathname === '/how-to-use' ? 'active-link' : ''}`} href="/how-to-use" >How to Use</a>
                <a className={`NavItem ${pathname === '/contact' ? 'active-link' : ''}`} href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
