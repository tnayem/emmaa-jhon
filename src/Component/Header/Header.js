import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='container'>
                <img src={logo} alt="" />
                <div>
                    <ul>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/orderreview">Order Review</a></li>
                        <li><a href="/manageinventory">Manage Inventory</a></li>
                        <li><a href="/login">Log In</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;