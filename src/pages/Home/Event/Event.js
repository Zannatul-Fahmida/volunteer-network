import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css';

const Event = (props) => {
    const { title, img, color } = props.event;
    return (
        <Link to="/register">
            <div className="event-container">
                <img src={img} alt="" className="event-img" />
                <div style={{ backgroundColor: `${color}` }} className="event-text">
                    <h4 className="title-text">{title}</h4>
                </div>
            </div>
        </Link>
    );
};

export default Event;