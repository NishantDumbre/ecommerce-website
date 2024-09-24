import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const Reviews = (props) => {
    return (
        <ListGroupItem className='my-1'>
            <h5>{props.name}</h5>
            <p>{props.review}</p>
        </ListGroupItem>
    )
}

export default Reviews