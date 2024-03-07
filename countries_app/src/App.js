import React from "react";
import Home from "./pages/home/index.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countriespage/index.jsx";
import AboutUs from "./pages/AboutUs/about.jsx";
import Country from "./pages/country/index.jsx";

export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/Countriespage' element={<Countries/>}></Route>
          <Route path='/country/:countryName' element={<Country/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}
