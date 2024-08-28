import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='bg-dark text-white py-4'>
            <Container fluid >
                <Row>
                    <Col md={4}>
                        <h5>About me</h5>
                        <p>Hey there! My name is Nishant and I am a MERN stack developer. I've built this website using React and Bootstrap. Hope you like it! You can reach out to me in the mentioned socials. I also am currently looking for fulltime opportunities and I'd be glad to discuss how I can contribute! </p>
                    </Col>
                    <Col md={4}>
                        <h5>My Skills</h5>
                        <ul className="list-unstyled">
                            <li>Node.js, React.js, Express.js, Redux</li>
                            <li>SQL, MongoDB</li>
                            <li>Javascript, Typescript</li>
                            <li>AWS(ECW, RDS, S3), Jenkins, Git</li>
                            <li>A knack for communication skills and being a team player!</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>I love to talk, lets connect!</h5>
                        <p>Linkedin</p>
                        <p>Github</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center pt-4'>
                        <p>&copy; {new Date().getFullYear()} A website by Nishant</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer