import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

import '../Styles/NavbarHeader.css';
import { Link } from 'react-router-dom';

export class NavbarHeader extends Component {
    render() {
        return (
            <Container className="container-navbar" fluid> 
                <Navbar className="navbar-header" bg="warning">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-header m-auto">
                            <Link to="/aboutme">
                                <Nav.Item className="mx-2">About Me</Nav.Item>
                            </Link>
                            <Link to="/research">
                                <Nav.Item className="mx-2">My Research</Nav.Item>
                            </Link>
                            <Link to="/experiences">
                                <Nav.Item className="mx-2">Project/Experiences</Nav.Item>
                            </Link>                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default NavbarHeader
