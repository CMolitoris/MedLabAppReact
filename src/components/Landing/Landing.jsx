import React, { Component } from 'react';
import './Landing.css';
import {Image,Container, Row, Col, Card, Button} from 'react-bootstrap';
import micro from '../Landing/microscope.jpg'


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Container className='mx-auto  background-micro container-attributes container overflow-hidden shadow ' id="main-panel">
                    <Row></Row>
                    <Row >
                    <Col className=' align-items-center'></Col>
                    <Col className=' align-items-center'></Col>
                    <Col className=' align-items-center'></Col>
                        <Col >
                            <h2>
                                <strong>Technology Meets Healthcare</strong>
                            </h2>
                            <Button style={{background: "#1E2022",border: "#1E2022",color: "#F0F5F9"}}>Get an Opinion</Button>
                        </Col>
                    </Row>
                    
                   
                </Container>
                <Container className="mx-auto container-attributes" id="main-panel">
                    <Row className=" justify-content-center text-center">
                        <Col md="auto">
                            <Card style={{ width: '18rem', height: '18rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    <hr/>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '18rem', height: '18rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    <hr/>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="auto">
                            <Card style={{ width: '18rem', height: '18rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    <hr/>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

         );
    }
}
 
export default Landing;