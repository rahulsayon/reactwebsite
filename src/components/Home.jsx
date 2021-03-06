import React , { Component } from "react"
import { Link } from "react-router-dom"
import { Jubotron , Grid ,Image, Container , Row , Col , Jumbotron } from "react-bootstrap"
import './Home.css';
import {Button} from 'react-bootstrap';



export default class Home extends React.Component {
    render(){
        return(
           
            <Container>
             
             <Jumbotron>
          <h2>Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
                <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/p.jpeg" roundedCircle className="profile-pic"/>
            <h3>Frank</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/g2.jpg" roundedCircle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/g.jpg" roundedCircle className="profile-pic"/>
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>
            </Container>
        )
    }
}