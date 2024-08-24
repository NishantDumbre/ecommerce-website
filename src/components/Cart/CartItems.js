import React from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'

const CartItems = (props) => {

    const item = props.allProps


    return (
        <ListGroup.Item >
            <Row>
                <Col className='col-8' >
                    <p>{item.title}</p>
                </Col>
                <Col className='col-4' >
                    <Button>Delete</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default CartItems