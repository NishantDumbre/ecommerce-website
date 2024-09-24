import React, { useState, useRef } from 'react';
import classes from './ProductItem.module.css';
import { Button, Carousel, Container, Form, Row, Col, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ProductItem = () => {
    const [validated, setValidated] = useState(false);
    const reviewRef = useRef();
    const selectQuantity = useRef()
    const location = useLocation();
    const { title, price, imageUrls } = location.state;

    const submitReview = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false || reviewRef.current.value.length < 20) {
            e.stopPropagation();
            setValidated(true);
        }
    };

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

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.

                    </p>
                    <h5>Price: ${price}</h5>
                    <Form className='d-flex mt-3'>
                        <Form.Select className={classes.quantity} ref={selectQuantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                        <Button type='submit'>Add to cart</Button>
                    </Form>

                    <Row className={classes.form}>
                        <Form noValidate validated={validated} onSubmit={submitReview}>
                            <Form.Group controlId='review-area'>
                                <h4>Your name</h4>
                                <Form.Label>Add your review!</Form.Label>
                                <Form.Control as='textarea' placeholder='Add your review' ref={reviewRef} required />
                            </Form.Group>
                            <Button type='submit' className={classes.button}>Submit your review!</Button>
                        </Form>
                    </Row>
                    <ListGroup className={classes.allReviewsSection}>
                        <ListGroup.Item className={classes.reviews}>
                            <h5>Buyer name</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item className={classes.reviews}>
                            <h5>Buyer name</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item className={classes.reviews}>
                            <h5>Buyer name</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                imperdiet lacus at mauris lacinia, vel placerat purus ullamcorper.
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductItem;
