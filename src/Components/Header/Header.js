import React from 'react';
import logo from '../../images/logo.png'; 
import './Header.css';

const Header = () => {
    return (
        <div className="header-area">
            <img src={logo} alt=""/>
            <nav className="menu-bar">
                <ul >
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/Pricing">Pricing</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;