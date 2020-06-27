import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../Styles/AboutMe.css'

export class AboutMe extends Component {
    render() {
        return (
            <Container className="container-about mt-5 bg-success" fluid>
                <h3 className="my-5 p-5">Ordinary Acehnese People, a Liverpudlians and Marvel Comic Fans</h3>
                <Row>
                    <Col md='2'></Col>
                    <Col>
                        <p>
                            Tempor voluptate non ex adipisicing anim duis est aute occaecat nostrud. Sit Lorem fugiat voluptate do ea mollit eiusmod eiusmod cillum tempor aute deserunt. Incididunt magna nisi deserunt et in cupidatat esse consectetur fugiat enim fugiat. Laborum irure ea et mollit ut quis duis tempor minim Lorem. Ex elit ad elit eiusmod ullamco esse elit ad in pariatur Lorem consectetur. Lorem aliqua pariatur aute aliquip magna incididunt tempor. Adipisicing incididunt officia nostrud nostrud.
                        </p>
                        <p>
                            Pariatur laboris nostrud pariatur cupidatat nisi velit Lorem qui ipsum. Minim minim aliquip commodo occaecat ex occaecat pariatur mollit irure nisi incididunt amet nostrud ut. Dolore veniam mollit velit cupidatat. Aliqua incididunt laborum aliqua quis nulla tempor incididunt ad esse non. Ea irure eu exercitation culpa non sunt eiusmod cillum enim reprehenderit commodo voluptate amet irure.
                        </p>
                    </Col>
                    <Col md='2'></Col>
                </Row>
            </Container>
        )
    }
}

export default AboutMe
