import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class FooterInfo extends Component {
    render() {
        return (
            <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#rizqiya"> Saputra, RW </a>
            </Container>
        )
    }
}

export default FooterInfo
