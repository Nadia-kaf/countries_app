import React from "react";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Countries() {
  const [ country, setCountry ] = useState([]);
  const url = "https://restcountries.com/v3.1/all";
  console.log(url);

  useEffect(() => {
    async function displayAllCountries() {
      try {
        const countries = await axios.get(url);

        const countriesBox = countries.data;
        setCountry(countriesBox);
      } catch (error) {
        console.log(error);
      }
    }
    displayAllCountries();
  }, []);

  console.log("country", country);


  return (
    <>
      <div>
        <Navbar />
        <h1>Countries' Page</h1>
      </div>

      <div className="outer-div">
        {country.slice(5, 15).map((item) => (
          <div className="inner-div">
            <img className="flags" src={item.flags.png} alt={item.flag.alt} />
            <h2>{item.name.common}</h2>
            <h3>{item.name.official}</h3>
            <button className="btn"> <Link to={`/country/${item.name.common}`} >View more</Link></button>
          </div>
          
        ))}
      </div>
    </>
  );
}
