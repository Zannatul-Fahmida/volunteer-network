import React from 'react';
import './Login.css';
import logo from '../../../logos/Group 1329.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="info-bg">
            <div className="info-logo">
                <img src={logo} alt="" />
            </div>
            <div className="login-form">
                <h1>Login With</h1>
                <button className="google-btn" onClick={handleGoogleLogin}><FontAwesomeIcon className="icon-color" icon={faGoogle} /> Continue with Google</button>
                <p>Don't have any account? <Link to="/signup">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;