import React, { useRef, useState } from 'react';
import classes from './ContactUs.module.css';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {

    const [validated, setValidated] = useState(false);

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const phoneValid = phoneRef.current.value.length === 10
        if (form.checkValidity() === false || !phoneValid) {
            event.stopPropagation();
            setValidated(true);
        }
        else {
            setValidated(true);
            const details = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phoneRef: phoneRef.current.value
            }
            await fetch('https://ecommerce-website-6a403-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json', {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            nameRef.current.value = ''
            emailRef.current.value = ''
            phoneRef.current.value = ''
            setValidated(false)
            toast.success('Thanks! I\'ll contact you soon')

        }
    }

    return (
        <Container fluid className={classes.container}>
            <div><Toaster position="top-center" reverseOrder={false} /></div>
            <div className={classes.formWrapper}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Form.Group className={classes.formGroup} controlId='contact-name'>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter name' ref={nameRef} required />
                        <Form.Control.Feedback type="invalid">Don't be shy, what can I call you.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className={classes.formGroup} controlId='contact-email'>
                        <Form.Label>Email address</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                            <Form.Control type='email' placeholder='Enter email' ref={emailRef} required />
                            <Form.Control.Feedback type="invalid">I promise your email will remain a secret</Form.Control.Feedback>
                        </InputGroup>

                    </Form.Group>
                    <Form.Group className={classes.formGroup} controlId='contact-phone'>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type='tel' maxLength='10' pattern="\d{10}" placeholder='Enter phone number' ref={phoneRef} required />
                        <Form.Control.Feedback type="invalid">You trusted me with email, you can trust me with your number as well!</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>

                </Form>
            </div>
        </Container>
    );
}

export default ContactUs;
