import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class FooterInfo extends Component {
    render() {
        return (
            <Container className="container-footer my-5 p-5 bg-secondary" fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#rizqiya"> Saputra, RW </a>
            </Container>
        )
    }
}

export default FooterInfo
