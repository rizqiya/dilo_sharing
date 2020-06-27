import React, { Component } from 'react'
import { Container, Accordion, Card, Button } from 'react-bootstrap'

//Custom css
import '../Styles/MyResearch.css'

export class MyResearch extends Component {
    render() {
        return (
            <Container className="container-research mt-15" fluid>
                <h3>Some of My Research Published Since 2012</h3>
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            2012 - Seminar Nasional Teknik dan Expo Teknik Elektro
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Pengembangan Aplikasi Untuk Simulasi Evakuasi Bencana Tsunami Berbasis Agent Based Modeling
                            <p>
                            dolor quis et dolore. Nulla nostrud cupidatat et in ipsum veniam cupidatat elit id ex. Proident anim sunt labore ullamco officia dolor irure et dolore amet sit exercitation et fugiat. Esse officia exercitation duis laborum commodo quis pariatur.Pariatur dolor quis et dolore. Nulla nostrud cupidatat et in ipsum veniam cupidatat elit id ex. Proident anim sunt labore ullamco officia dolor irure et dolore amet sit exercitation et fugiat. Esse officia exercitation duis laborum commodo quis pariatur. dolor quis et dolore. Nulla nostrud cupidatat et in ipsum veniam cupidatat elit id ex. Proident anim sunt labore ullamco officia dolor irure et dolore amet sit exercitation et fugiat. Esse officia exercitation duis laborum commodo quis pariatur.Pariatur dolor quis et dolore. Nulla nostrud cupidatat et in ipsum veniam cupidatat elit id ex. Proident anim sunt labore ullamco officia dolor irure et dolore amet sit exercitation et fugiat. Esse officia exercitation duis laborum commodo quis pariatur.
                            </p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2013 - International Conference on ICT and Smart Society
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Agent-based tsunami evacuation simulation for disaster education
                        <p>
                        Pariatur dolor quis et dolore. Nulla nostrud cupidatat et in ipsum veniam cupidatat elit id ex. Proident anim sunt labore ullamco officia dolor irure et dolore amet sit exercitation et fugiat. Esse officia exercitation duis laborum commodo quis pariatur. Pariatur dolor quis et dolore. Nulla nostrud cupidatat et in ipsum veniam cupidatat elit id ex. Proident anim sunt labore ullamco officia dolor irure et dolore amet sit exercitation et fugiat. Esse officia exercitation duis laborum commodo quis pariatur.
                        </p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2014 - International Conference on ICT and Smart Society
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Intelligent Disaster Management System based on Service Engineering</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2013 - International Conference on ICT and Smart Society
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Quick Disaster Emergency Responses pada Pengembangan Kota Cerdas</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        )
    }
}

export default MyResearch
