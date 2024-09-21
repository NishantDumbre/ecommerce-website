import React, { useContext } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import classes from './StoreItems.module.css';

import { CartContext } from '../../store/context-store';

const StoreItems = (props) => {
    const { title, price, imageUrls, id } = props

    const cartCtx = useContext(CartContext)

    const addToCart = () => {
        cartCtx.addItem({ ...props, quantity: 1 })
    }

    return (
        <Card className={classes.card} id={id}>
            <Carousel interval={null}>
                {imageUrls.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img src={image} alt={`Slide ${index}`} className={classes.carousel} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button variant='primary' onClick={addToCart}>Add to cart</Button>
            </Card.Body>
        </Card>
    );
};

export default StoreItems;
