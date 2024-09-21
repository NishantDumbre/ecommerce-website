import React from 'react'
import classes from './About.module.css'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container fluid className={classes.container}>
      <div className={classes.textDiv}>
      <h2>A little about me</h2>
      <p>Hey there! My name is Nishant and I am a MERN stack developer. I've built this website using React and Bootstrap. Hope you like it! You can reach out to me in the mentioned socials. I also am currently looking for fulltime opportunities and I'd be glad to discuss how I can contribute!
      </p>
      </div>
      
    </Container>
  )
}

export default About