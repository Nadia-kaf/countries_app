import React from 'react'
import Navbar from '../../components/navbar/navbar';



export default function  Countries() {
      const url="https://restcountries.com/v3.1/all"
      console.log(url);


      /* function displayCountries(){
        let allCountries = fetch(url).then((response) => {
            console.log('country', response.json())
        })
      }

      displayCountries(); */


      async function displayAllCountries (){
         const countries= await fetch(url)
         console.log("countries", countries.json())
    
      }

      displayAllCountries();


      //Function to display 5 countries
  return (
    <>
    <Navbar/>
    <h1>Countries' Page</h1>

    </>
  );
}
