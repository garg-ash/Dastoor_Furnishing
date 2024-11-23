import React from 'react'
import './Footer.css'
import logo1 from '../Assets/logo-1.png'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="first-colom">
        <div className="logo-image">
          <img src={logo1} alt="" />
        </div>
        <p>Transform Your Space, Redefine Your Comfort – Dastoor Lifestyle Furnishings.</p>
      </div>

      <div className="second-colom">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Gallary</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>

      <div className="third-colom">
        <h3>Products</h3>
        <ul>
          <li><a href="">Living Room Furniture</a></li>
          <li><a href="">Bed Room Furniture</a></li>
          <li><a href="">Kitchen Furniture</a></li>
          <li><a href="">Dinning Room Furniture</a></li>
        </ul>
      </div>

      <div className="fourth-colom">
        <h3>Contact Us</h3>
      </div>
    </footer>
    </>
  )
}

export default Footer