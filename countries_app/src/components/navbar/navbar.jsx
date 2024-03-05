import React from 'react'
import {Link} from "react-router-dom"


export default function  Navbar() {
  return (
    <div className='Nav'>
      <h2>Logo</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Countriespage">Countries</Link></li>
          <li><Link to="/">Gallery</Link></li>
          <li><Link to="/country">Country</Link></li>

           
        </ul>
        <button>Sign In</button>
    </div>
  );
}
