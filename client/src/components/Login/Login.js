import React from 'react'
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap'
import classes from './Login.module.css'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {



  return (
    <Container fluid className={classes.container}>
      <div><Toaster position="top-center" reverseOrder={false} /></div>
      <div className={classes.containerBox}>
        <h1 className={classes.heading}>Login</h1>
        <Form>
          <Row className={classes.formContainer}>
            <Form.Group className={classes.formGroup} controlId='user-name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className={classes.formGroup} controlId='user-email'>
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text id='basic-addon2' >@</InputGroup.Text>
                <Form.Control type='email' />
              </InputGroup>
            </Form.Group>
            <Form.Group className={classes.formGroup} controlId='user-password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' />
            </Form.Group>
            <Button type='submit' className={classes.submitButton}>Login</Button>
          </Row>
        </Form>
      </div>

    </Container>
  )
}

export default Login