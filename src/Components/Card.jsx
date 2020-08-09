import React from 'react';
import './card.css';
import Time from '../Assets/Icons/Icon feather-clock.png';
import Heart from '../Assets/Icons/Icon feather-heart.png';

function Card({name,image,category,label,price,description}) {
    return (

        <div className='card' style={{backgroundImage: `url(${image})`}}>
            <div className='data'></div>
            <div className='name'>{name}</div> 
            <img src={Heart} alt="Heart" className='heart'/>
            <div className='price'>
                <img src={Time} alt="Time" className='time'/>
                {Math.floor(price*10+1)} mins
            </div>
            <div className='desc'>{description}</div>   
        </div>
    )
}

export default Card;
