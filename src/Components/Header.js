import React, { Component } from 'react';
import { Container, Jumbotron, Image } from 'react-bootstrap';
import foto from '../images/foto-pj.jpg';

import '../Styles/Header.css';

export class Header extends Component {
    render() {
        return (
            <Container className="container-header" fluid>
                <Jumbotron className="jumbotron-header"> 
                    <Image className="fluid-image" src={foto} roundedCircle fluid></Image>
                    <h1>Hi, My Name is Rizqiya</h1>
                    <p>This is my personal profile I created for testing using react-bootstrap.</p>
                </Jumbotron>
            </Container>
        )
    }
}

export default Header
