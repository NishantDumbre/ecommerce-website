import React from 'react';
import StoreItems from './StoreItems';
import { images } from '../ImagePaths';  

const productsArr = [
  {
    title: 'Metallica',
    price: 20.99,
    imageUrls: images.metallica,
  },
  {
    title: 'Guns n\' Roses',
    price: 20.99,
    imageUrls: images.gunsNroses,
  },
  {
    title: 'Gojira',
    price: 18.99,
    imageUrls: images.gojira,
  },
  {
    title: 'Iron Maiden',
    price: 22.99,
    imageUrls: images.ironMaiden,
  },
  {
    title: 'Queen',
    price: 22.99,
    imageUrls: images.queen,
  },
  {
    title: 'Linkin Park',
    price: 19.99,
    imageUrls: images.linkinPark,
  },
];

const StorePage = () => {
  return (
    <div>
      {productsArr.map((item, index) => (
        <StoreItems key={index} title={item.title} price={item.price} imageUrls={item.imageUrls} />
      ))}
    </div>
  );
};

export default StorePage;
