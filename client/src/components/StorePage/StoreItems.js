import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import classes from './StoreItems.module.css';
import { useNavigate } from 'react-router-dom';

const StoreItems = (props) => {
    const navigate = useNavigate()

    const checkProduct = (props) =>{
        console.log('navigate', props.id)
        navigate(`/store/${props.id}`, {
            state: props
        })
    }

    return (
        <Card className={classes.card} id={props.id}>
            <Carousel interval={null}>
                {props.imageUrls.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img src={image} alt={`Slide ${index}`} className={classes.carousel} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>${props.price}</Card.Text>
                <Button variant='primary' onClick={()=>checkProduct(props)}>Check it out</Button>
            </Card.Body>
        </Card>
    );
};

export default StoreItems;
