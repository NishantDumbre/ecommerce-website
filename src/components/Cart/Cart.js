import React, { useState, useContext } from 'react'
import { Button, Nav, Offcanvas, ListGroup, Badge } from 'react-bootstrap';

import { CartContext } from '../../store/context-store'
import CartItems from './CartItems';

const Cart = () => {

    const [show, setShow] = useState(false)
    const cartCtx = useContext(CartContext)

    const toggleShowCart = () => {
        console.log(cartCtx.items)
        setShow((prevState) => !prevState)
    }

    const cartItems = cartCtx.items.map((item) => {
        return <CartItems key={item.id} allProps={item} />
    })

    const totalItems = cartCtx.items.reduce((curr, item) =>{
        return curr+item.quantity
    }, 0)


    return (
        <React.Fragment>
            <Nav.Link onClick={toggleShowCart} className='me-2'>
                <span>Cart</span> <Badge bg="secondary" className='me-4'>{totalItems}</Badge>
            </Nav.Link>
            <Offcanvas show={show} onHide={toggleShowCart} id='cart' placement='end' >
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup className='list-unstyled'>{cartItems}</ListGroup>
                    <hr />
                    <h4>Total Amount: ${cartCtx.totalAmount}</h4>
                    <Button variant='primary' disabled>Place order</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    )
}

export default Cart