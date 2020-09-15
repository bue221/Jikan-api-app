import React from 'react';

import './App.css';

const Card = ({title, url, type})=>{
        return(
                <div className='card' >
                        <img src={url} alt={title} />
                        <h1 className='card-title'>{title}</h1>
                        <p>{type}</p>
                </div>
        );
}

export default Card;
