import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import classes from './Reviews.module.css'

const Reviews = (props) => {
    return (
        <ListGroupItem className={classes.listItem}>
            <h5>{props.name}</h5>
            <p>{props.review}</p>
        </ListGroupItem>
    )
}

export default Reviews