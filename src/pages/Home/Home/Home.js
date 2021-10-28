import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <Banner></Banner>
            <Events></Events>
        </div>
    );
};

export default Home;