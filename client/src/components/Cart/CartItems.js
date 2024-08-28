import React, { useContext } from 'react';
import classes from './CartItems.module.css';
import { Row, Col, Button, ListGroup, Badge } from 'react-bootstrap';
import { CartContext } from '../../store/context-store';

const CartItems = (props) => {
    const item = props.allProps;
    const cartCtx = useContext(CartContext)

    const removeItemHandler = () =>{
        cartCtx.removeItem(item)
    }

    return (
        <ListGroup.Item>
            <Row className='d-flex align-items-center'>
                <Col className='col-8'>
                    <p className='fs-4'>{item.title}</p>
                    <Badge className={classes.badge}>x{item.quantity}</Badge>
                </Col>
                <Col className='col-4'>
                    <Button onClick={removeItemHandler} >Delete</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default CartItems;
