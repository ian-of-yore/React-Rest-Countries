import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1 className='countries-header'>Wecome to React REST Countries API</h1>
            {
                countries.map(country => <Country
                    name={country.name.common}
                    population={country.population}
                    flag={country.flags.png}
                    capital={country.capital}
                    region={country.subregion}></Country>)
            }
        </div>
    );
};

export default Countries;