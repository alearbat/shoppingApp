import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../css/NavBar.css'
import logo from '../../assets/plant-ar.jpg'
import backgroundImage from '../../assets/vertical2.jpg'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <>
      <div>
        <img src={backgroundImage} alt="Vertical garden" className="top-image"/>
      </div>
      <Navbar sticky="top" bg="white" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand><img src={logo} alt="Home"/></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mr-sm-2">
          <NavLink to={`/productos`}>PRODUCTOS</NavLink>
          <NavDropdown id="basic-nav-dropdown">
            <LinkContainer to="/productos">
              <NavDropdown.Item>PRODUCTOS</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/productos/suculenta">
              <NavDropdown.Item>SUCULENTA</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/productos/flor">
              <NavDropdown.Item>FLORES</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/productos/verde">
              <NavDropdown.Item>VERDES</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavLink to={`/servicios`}>SERVICIOS</NavLink>
          <NavLink to={`/contacto`}>CONTACTO</NavLink>
          <NavLink className="cart-button" to={`/carrito`}>MI CARRITO<CartWidget/></NavLink>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar

