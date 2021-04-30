import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import logo from '../../assets/plant-ar.jpg'
import backgroundImage from '../../assets/vertical2.jpg'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div>
        <img src={backgroundImage} alt="Vertical garden" className="top-image"/>
      </div>
      <Navbar sticky="top" bg="white" expand="lg">
        <Navbar.Brand href="/"><img src={logo} alt="Home"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mr-sm-2">
          <NavLink to={`/productos`}>PRODUCTOS</NavLink>
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item><Link to={`/productos`}>PRODUCTOS</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><Link to={`/productos/suculenta`}>SUCULENTA</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={`/productos/flor`}>FLORES</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={`/productos/verde`}>VERDES</Link></NavDropdown.Item>
          </NavDropdown>
          <NavLink to={`/servicios`}>SERVICIOS</NavLink>
          <NavLink to={`/contacto`}>CONTACTO</NavLink>
          <NavLink to={`/carrito`}><CartWidget/></NavLink>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar

