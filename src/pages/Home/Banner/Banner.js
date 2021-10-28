import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <h1>I grow by helping people in need.</h1>
            <div className="search-container">
                <input className="search-field" type="text" placeholder="Search..." />
                <button className="common-btn search-btn">Search</button>
            </div>
        </div>
    );
};

export default Banner;
// https://i.ibb.co/5nfvf57/extra-Volunteer.png