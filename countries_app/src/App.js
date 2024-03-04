import React from "react";
import Home from "./pages/home/index.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countriespage/index.jsx";
import AboutUs from "./pages/AboutUs/about.jsx";

export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/Countriespage' element={<Countries/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
