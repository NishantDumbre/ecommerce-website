import React, { useState } from 'react'
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap'
import classes from './Login.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {

  const [pageType, setpageType] = useState('login')
  const loginToggeler = (condition) => {
    setpageType(condition)
  }

  return (
    <Container fluid className={classes.container}>
      <div><Toaster position="top-center" reverseOrder={false} /></div>
      <div className={classes.containerBox}>
        {pageType === 'login' && <h1 className={classes.heading}>Login</h1>}
        {pageType === 'signup' && <h1 className={classes.heading}>Signup</h1>}
        {pageType === 'reset-form' && <h1 className={classes.heading}>Enter email</h1>}
        <Form>
          <Row className={classes.formContainer}>
            {pageType === 'signup' && <Form.Group className={classes.formGroup} controlId='user-name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>}
            <Form.Group className={classes.formGroup} controlId='user-email'>
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text id='basic-addon2' >@</InputGroup.Text>
                <Form.Control type='email' />
              </InputGroup>
            </Form.Group>
            {(pageType === 'signup' || pageType === 'login') && <Form.Group className={classes.formGroup} controlId='user-password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' />
            </Form.Group>}
            <div className={classes.toggleContainer}>
              {pageType === 'login' && <Link onClick={() => loginToggeler('signup')}>Create an account</Link>}
              {pageType === 'login' && <Link onClick={() => loginToggeler('reset-form')}>Forgot Password?</Link>}
              {pageType === 'signup' && <Link onClick={() => loginToggeler('login')}>Already have an account?</Link>}
            </div>
            {pageType === 'login' && <Button type='submit' className={classes.submitButton}>Login</Button>}
            {pageType === 'signup' && <Button type='submit' className={classes.submitButton}>Signup</Button>}
            {pageType === 'reset-form' && <Button type='submit' className={classes.submitButton}>Send email</Button>}
          </Row>
        </Form>
      </div>

    </Container>
  )
}

export default Login