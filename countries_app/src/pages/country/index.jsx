import React, { useState } from 'react'
import Navbar from '../../components/navbar/navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function  Country() {

  const[country,setCountry]=useState(null)

 
  const Params= useParams()
  console.log('Params', Params);

  const url=`https://restcountries.com/v3.1/name/${Params.countryName}`

  useEffect(() => {
    async function displayOneCountry() {
      try {
        const countries = await axios.get(url);

        const countriesBox = countries.data;
        console.log('countriesBox', countriesBox[0]);
        setCountry(countriesBox[0]);
      } catch (error) {
        console.log(error);
      }
    }
    displayOneCountry();
  }, [Params.countryName]);


  if (!country){
    return <div>Loading..............</div>
  }

  
  return (
    <>
    <Navbar/>
    <div>
            <h2>{country.name.common}</h2>
            <h3>Capital: {country.capital}</h3>
            <h3>Continent: {country.continents}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Currencies:{country.currencies.ZMW.name} <span>{country.currencies.ZMW.symbol}</span></h3>
            <h3><a href="https://goo.gl/maps/mweBcqvW8TppZW6q9">Country's google Map</a></h3>
            <img className="flags" src={country.flags.png} alt={country.flag.alt} />
            <img className="coatOfArms" src={country.coatOfArms.png} alt={country.coatOfArms.alt} />

    </div>
    </>
  );
}
