import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flags, name, population, capital, subregion } = props.country;

    return (
        <div className='country-card'>
            <div className='country-info'>
                <h2>{name.common}</h2>
                <p>Population: {population}</p>
                <p>Capital: {capital}</p>
                <p>Region: {subregion}</p>
            </div>
            <div className='country-info'>
                <img src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;