import React from 'react'
import Navbar from '../../components/navbar/navbar';
import axios from "axios"



export default function  Countries() {
      const url="https://restcountries.com/v3.1/all"
      console.log(url);


      /* function displayCountries(){
        let allCountries = fetch(url).then((response) => {
            console.log('country', response.json())
        })
      }

      displayCountries(); */

      //Getting the Box

      let countriesBox

      //fetching all the arrays
      async function displayAllCountries (){
         const countries= await axios.get(url)

         const countriesBox =countries.data
         const slicedData = countriesBox.slice(0,5)
       // console.log('Item',slicedData)

      slicedData.map((country)=> {
          console.log(country.name.common)
        })
        
  
        
         //console.log('countries', countriesBox)
         //returning what we have fetched

         return  countriesBox
        
      }

      
      //console.log("countries", countriesBox.json())
      displayAllCountries()
 
      function displayFiveCountries(){
       // let fiveItems= countriesBox.slice(0,4)
        //console.log('five', fiveItems)
      } 
      
     displayFiveCountries()
      


      //Function to display 5 countries


      

        



  return (
    <>
    <Navbar/>
    <h1>Countries' Page</h1>

    </>
  );
}
