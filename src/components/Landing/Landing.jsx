import React, { Component, useContext } from 'react';
import './Landing.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { UserContext } from '../../UserContext';



const Landing = () => {

    const user = useContext(UserContext);
    console.log(user)

    const handleGetstarted = () => {
        
        if (!user) {
            alert("You must login or register to continue!")
        } else {
            alert("You are logged in!")
        }
    }

    return ( 
        <React.Fragment>
                <div className=' mx-auto  background-micro con-attributes overflow-hidden shadow ' id="main-panel">
                    <div className="opin-attributes ">
                        <div className="opin-attributes-inner">
                            <h2>
                                <strong>Technology Meets <i>Healthcare</i></strong>
                            </h2>
                        
                        </div>
                        <hr/>
                        <Button onClick={() => handleGetstarted()} style={{background: "#1E2022",border: "#1E2022",divor: "#F0F5F9"}}>Get Started <i class="bi bi-check-square"></i></Button>
                    </div>   
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
 
export default Landing;
