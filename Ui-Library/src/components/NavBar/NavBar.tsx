import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../Assets/logo.png"
import './navbar-styles.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation()
    console.log(pathname);

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
                <Link className={`NavItem ${pathname === '/' ? 'active-link' : ''}`} to="/" onClick={toggleMobileMenu}>Home</Link>
                <Link className={`NavItem ${pathname === '/components' ? 'active-link' : ''}`} to="/components" onClick={toggleMobileMenu}>Components</Link>
                <Link className={`NavItem ${pathname === '/how-to-use' ? 'active-link' : ''}`} to="/how-to-use" onClick={toggleMobileMenu}>How to Use</Link>
                <Link className={`NavItem ${pathname === '/contact' ? 'active-link' : ''}`} to="/contact" onClick={toggleMobileMenu}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
