import React from 'react';
import classes from './StorePage.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import StoreItems from './StoreItems';
import { images } from '../ImagePaths';

const productsArr = [
  {
    id: 1,
    title: 'Metallica',
    price: 20.99,
    imageUrls: images.metallica,
  },
  {
    id: 2,
    title: 'Guns n\' Roses',
    price: 20.99,
    imageUrls: images.gunsNroses,
  },
  {
    id: 3,
    title: 'Gojira',
    price: 18.99,
    imageUrls: images.gojira,
  },
  {
    id: 4,
    title: 'Iron Maiden',
    price: 22.99,
    imageUrls: images.ironMaiden,
  },
  {
    id: 5,
    title: 'Queen',
    price: 22.99,
    imageUrls: images.queen,
  },
  {
    id: 6,
    title: 'Linkin Park',
    price: 19.99,
    imageUrls: images.linkinPark,
  },
];



const StorePage = () => {
  return (
    <Container fluid className={` ${classes.background}`}>
      <Row className="justify-content-center">
        {productsArr.map((item, index) => (
          <Col xs={12} sm={6} md={6} lg={4} className="my-5 d-flex justify-content-center" key={index}  >
            <StoreItems id={item.id} title={item.title} price={item.price} imageUrls={item.imageUrls}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StorePage;
