import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country-card'>
            <div className='country-info'>
                <h2>{props.name}</h2>
                <p>Population: {props.population}</p>
                <p>Capital: {props.capital}</p>
                <p>Region: {props.region}</p>
            </div>
            <div className='country-info'>
                <img src={props.flag} alt="" />
            </div>
        </div>
    );
};

export default Country;