import React, { Component } from 'react';
import './Landing.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';



class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className=' mx-auto  background-micro con-attributes overflow-hidden shadow ' id="main-panel">
                    <Row></Row>
                    <Row >
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                        <Col className="pad-top ">
                            
                                <h2>
                                    <strong>Technology Meets <i>Healthcare</i></strong>
                                </h2>
                                <Button style={{background: "#1E2022",border: "#1E2022",Color: "#F0F5F9"}}>Get an Opinion</Button>
                            
                        </Col>
                    </Row>
                    
                   
                </div>
                <div className=" mx-auto con-attributes" id="main-panel">
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
                </div>
            </React.Fragment>

         );
    }
}
 
export default Landing;