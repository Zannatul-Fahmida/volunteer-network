import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png';

const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links">
                <Link to="/home" className="nav-margin nav-item">Home</Link>
                <Link to="/home" className="nav-margin nav-item">Donation</Link>
                <Link to="/home" className="nav-margin nav-item">Events</Link>
                <Link to="/home" className="nav-margin nav-item">Blog</Link>
                <Link to="/home" className="nav-margin"><button className="register-btn">Register</button></Link>
                <Link to="/home"><button className="admin-btn">Admin</button></Link>
            </div>
        </div>
    );
};

export default Header;