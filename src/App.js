import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div>
      <RESTCountries></RESTCountries>
      <Countries></Countries>
    </div>
  );
}

function RESTCountries() {
  const [Countries, setCountries] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])

  return (
    <div>
      <h1>React REST Countries</h1>
      {
        Countries.map(country => <Countries name={country.name.common}></Countries>)
      }

      {/* console.log(country.name.common) */}

    </div>
  )
}

function Countries(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h5>Population: </h5>
    </div>
  )
}


export default App;
