import React from 'react'
import './NavBar.css'
import logo from '../../assets/plant-ar.jpg'
import backgroundImage from '../../assets/vertical2.jpg'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      <div>
        <img src={backgroundImage} alt="Vertical garden"/>
      </div>
      <nav className="navbar">
        <a href=""><img src={logo} alt="Home"/></a>
        <ul>
          <li><a href="">PRODUCTOS</a></li>
          <li><a href="">SERVICIOS</a></li>
          <li><a href="">CONTACTO</a></li>
          <li><a href=""><CartWidget/></a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar