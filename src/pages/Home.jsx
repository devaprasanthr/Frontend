import React from 'react'
import "../styles/Home.css"
import { Container,Button } from 'react-bootstrap'

const Home = () => {
  return (
   <Container>
    <h1>Welcome to our Website Page.</h1>
    <p>This is a simple website built with react bootstrap and deployed on netlify</p>
    <Button variant="primary" type="submit">Get Started</Button>
   </Container>
  )
}

export default Home