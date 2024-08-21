import React, { useState } from 'react'
import { Button, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const Cart = () => {

    const [show, setShow] = useState(false)

    const toggleShowCart = () => {
        setShow((prevState) => !prevState)
    }

    return (
        <React.Fragment>
            <Nav.Link onClick={toggleShowCart} className='me-5'>Cart</Nav.Link>
            
            <Offcanvas show={show} onHide={toggleShowCart}  id='cart' placement='end' >
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}

export default Cart