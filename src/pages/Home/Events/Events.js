import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
    const [events, setEvents]= useState([]);
    useEffect(()=>{
        fetch('https://immense-temple-25182.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    }, [])
    return (
        <div className="events-container">
            {
                events.map(event=><Event key={event._id} event={event}></Event>)
            }
        </div>
    );
};

export default Events;