import React from 'react';
import logo from '../../logos/Group 1329.png';
import './Register.css';

const Register = () => {
    return (
        <div className="info-bg">
            <div className="info-logo">
                <img src={logo} alt="" />
            </div>
            <div className="register-form">
                <h2>Register as a Volunteer</h2>
                <input className="register-input" type="text" placeholder="Full Name" />
                <input className="register-input" type="email" placeholder="Username or Email" />
                <input className="register-input" type="date" name="" id="" />
                <input className="register-input" type="text" placeholder="Description" />
                <input className="register-input" type="text" placeholder="Event Name" />
                <button className="common-btn registration-btn">Registration</button>
            </div>
        </div>
    );
};

export default Register;