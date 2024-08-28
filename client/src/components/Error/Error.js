import React from 'react'
import classes from './Error.module.css'
import { Container } from 'react-bootstrap'

const Error = () => {
  return (
    <Container fluid className={classes.container}>
      <h2>Could you check the URL again? I can't seem to find the page</h2>
    </Container>
  )
}

export default Error