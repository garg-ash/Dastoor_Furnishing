import React from 'react'
import './Navbar.css'
import logo1 from '../Assets/logo-1.png'


const Navbar = () => {
  return (
    <>
    <nav>
        <div className='nav-logo'>
            <img src={logo1} alt="" />
        </div>
        <div className="nav-menu">
            <ul className='nav-list'>
                <li className='nav-item'>
                    <a href="#">Home</a>
                </li>
                <li className='nav-item'>
                    <a href="#">Gallary</a>
                </li><li className='nav-item'>
                    <a href="#">About Us</a>
                </li><li className='nav-item'>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar