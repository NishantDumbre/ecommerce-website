import React from 'react'
import classes from './Home.module.css'
import { Button, ListGroup, Col, Container, Row } from 'react-bootstrap'

const Home = () => {

    const ticketDetails = [
        { date: '16th July 25', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
        { date: '28th July 25', location: 'TORONTO,ON', venue: 'BUDWEISER STAGE' },
        { date: '10th August 25', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
        { date: '18th August 25', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
        { date: '27th August 25', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA' },
        { date: '7th Sept 25', location: 'CONCORD, CA', venue: 'CONCORD PAVILION' }
    ]

    const listItemDetails = ticketDetails.map((item, index) => {
        return <ListGroup.Item className={classes.listGroupItem}>
            <Row className='d-flex justify-content-around align-items-center'>
                <Col xs={12} sm={3}><p className='h6'>{item.date}</p></Col>
                <Col xs={12} sm={3}><p>{item.location}</p></Col>
                <Col xs={12} sm={4}><p>{item.venue}</p></Col>
                <Col xs={12} sm={2}><Button>Buy</Button></Col>
            </Row>
        </ListGroup.Item>
    })

    return (
        <Container fluid className={classes.homeLayout}>
            <h3 className={classes.heading}>Buy Tour tickets</h3>
            <ListGroup className={classes.listGroup}>
                {listItemDetails}
            </ListGroup>
        </Container>
    )
}

export default Home