import React from 'react'
import classes from './Banner.module.css'
import { bannerImages } from '../ImagePaths'
import { Carousel } from 'react-bootstrap'


const loadBanners = bannerImages.map((image, index) => {
    return <Carousel.Item key={index} fade interval={3000}>
        <img src={image} alt={`Slide ${index}`} className={classes.banner} />
    </Carousel.Item>
})

const Banner = () => {
    return (
        <Carousel>
            {loadBanners}
        </Carousel>
    )
}

export default Banner