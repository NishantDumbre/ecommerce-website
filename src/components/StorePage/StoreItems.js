import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import classes from './StoreItems.module.css';

const StoreItems = ({ title, price, imageUrls }) => {
    return (
        <Card className={classes.card}>
            <Carousel fade>
                {imageUrls.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img src={image} alt={`Slide ${index}`} className={classes.carousel} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button variant='primary'>Add to cart</Button>
            </Card.Body>
        </Card>
    );
};

export default StoreItems;
