import React, { useState, useRef, useContext } from 'react';
import classes from './ProductItem.module.css';
import { Button, Carousel, Container, Form, Row, Col, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { AuthContext, CartContext } from '../../store/context-store';
import Reviews from './Reviews';


const ProductItem = () => {
    const [validated, setValidated] = useState(false);
    const reviewRef = useRef();
    const quantityRef = useRef();
    const location = useLocation();
    const { title, price, imageUrls } = location.state;

    const cartCtx = useContext(CartContext)
    const authCtx = useContext(AuthContext)


    const addToCartHandler = (e) => {
        e.preventDefault()
        const selectQuantity = parseInt(quantityRef.current.value)
        const item = { ...location.state, quantity: selectQuantity }
        cartCtx.addItem(item)
    }

    const submitReview = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false || reviewRef.current.value.length < 20) {
            e.stopPropagation();
            setValidated(true);
        }
    };

    const reviews = [
        {
            name: 'Nishant',
            review: 'This is an amazing product.',
        },
        {
            name: 'Alice',
            review: 'I love the quality of this item.',
        },
        {
            name: 'Bob',
            review: 'Great value for the price!',
        },
        {
            name: 'Charlie',
            review: 'Highly recommend this product.',
        },
        {
            name: 'David',
            review: 'The design is beautiful.',
        },
        {
            name: 'Emily',
            review: 'It exceeded my expectations.',
        },
        {
            name: 'Frank',
            review: 'I\'ll definitely buy this again.',
        },
        {
            name: 'Grace',
            review: 'Customer service was excellent.',
        },
    ];

    const loadReviews = reviews.map((item, index) => (
        <Reviews name={item.name} review={item.review} key={index} />
    ))

    const reviewForm = <Row className={classes.form}>
        <Form noValidate validated={validated} onSubmit={submitReview}>
            <Form.Group controlId='review-area'>
                <h4>Your name</h4>
                <Form.Label>Add your review!</Form.Label>
                <Form.Control as='textarea' placeholder='Add your review' ref={reviewRef} required />
            </Form.Group>
            <Button type='submit' className={classes.button}>Submit your review!</Button>
        </Form>
    </Row>


    return (
        <Container fluid className={classes.container}>
            <Row>
                <Col md={4} sm={12} className={classes.left}>
                    <Carousel className={classes.carousel}>
                        {imageUrls.map((image, index) => (
                            <Carousel.Item key={index} className={classes.carouselItem}>
                                <img src={image} alt={`Slide ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col md={8} sm={12} className={classes.right}>
                    <h2>{title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                    </p>
                    <h5>Price: ${price}</h5>
                    <Form onSubmit={addToCartHandler}>
                        <div className={classes.cartForm} >
                            <Form.Select className={classes.selQuantity} ref={quantityRef}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Form.Select>
                            <Button type='submit' className={classes.button}>Add to cart</Button>
                        </div>
                    </Form>

                    {authCtx.user && reviewForm}
                    <ListGroup className={classes.allReviewsSection}>
                        {loadReviews}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductItem;
