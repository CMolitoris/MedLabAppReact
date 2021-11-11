import React, { Component, useContext } from 'react';
import './Landing.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { UserContext } from '../../UserContext';




const Landing = () => {

    const user = useContext(UserContext);

    const handleGetstarted = () => {
        
        if (!user) {
            alert("You must login or register to continue!")
        } else {
            alert("You are logged in!")
        }
    }

    return ( 
        <React.Fragment>
            
                <div className=' mx-auto  background-micro con-attributes overflow-hidden shadow ' >
                    <div className="opin-attributes ">
                        <div align='center' className="opin-attributes-inner">
                            <h2>
                                <strong>Technology Meets <i>Healthcare</i></strong>
                            </h2>
                        
                        </div>
                        <hr/>
                        <Button className='w-100' variant='dark' onClick={() => handleGetstarted()} >Get Started <i class="bi bi-check-square"></i></Button>
                    </div>   
                </div>
                <div className=" mx-auto con-attributes" >
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
