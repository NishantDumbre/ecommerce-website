import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';


const HeaderNavbar = () => {
  return (
    <Navbar expand='sm' className="bg-body-secondary justify-content-between" sticky="top">
      <Navbar.Toggle />
        <Navbar.Collapse id="navbar" >
          <Nav className="mx-auto justify-content-between" >
            <Nav.Link as={NavLink} to='home' className='mx-5' >Home</Nav.Link>
            <Nav.Link as={NavLink} to='store' className='mx-5' >Store</Nav.Link>
            <NavDropdown title='About' id='about-dropdown' className='mx-5' >
              <NavDropdown.Item as={NavLink} to='about/2.1' >About us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='about/2.2' >Contact us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Cart />
        {console.log(true)}
    </Navbar>
  )
}

export default HeaderNavbar