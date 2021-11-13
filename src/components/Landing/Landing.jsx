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
                <div  className=" mx-auto con-attributes-sec" >
                    
                    {/* <Row className="card-background shadow justify-content-center text-center">
                        
                        <Col md="auto">
                            <Card className='shadow' style={{ width: '18rem', height: '18rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>
                                        Gain Awareness
                                    </Card.Title>
                                    <Card.Text>
                                    <hr/>
                                    <p>
                                        <i>"Doctors are suprisingly bad at reading lab results. It's putting us all at risk."</i>
                                    </p>
                                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                                        Professor of Epidemiology, Daniel Morgan 
                                        <cite> Washington Post</cite>
                                    </footer>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="auto">
                            <Card className='shadow' style={{ width: '18rem', height: '18rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Stop Waiting</Card.Title>
                                    <Card.Text>
                                    <hr/>
                                    <p>
                                        Tired of waiting weeks to hear about your lab test findings? We are too.
                                    </p>
                                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                                        Choose Us!
                                        
                                    </footer>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="auto">
                            <Card className='shadow' style={{ width: '18rem', height: '18rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Leave the math to us</Card.Title>
                                    <Card.Text>
                                    <hr/>
                                        <p>
                                            Don't know what each word, phrase or number means? 
                                        </p>
                                        <footer className="blockquote-footer pt-4 mt-4 border-top">
                                            That's okay, we do!
                                        </footer>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}
                    
        <div id='Workflow' className="">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="section-title">
                        <h2 id='font-thicken' className="text-center">We Make It Simple.</h2>
                        <p className="text-center"><i>We are founded on the principle of empowering those seeking information about their health. </i></p>
                    </div>
                    <hr className="border-white mb-4 mt-4"/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="work-process">
                        <i className="fas fa-file-alt"></i>
                        <h3><a href="#">Enter Your Lab Results</a></h3>
                        <p>Our interface allows for friendly forms. All you need to do is enter what you see.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-process">
                        <i className="fas fa-envelope-open-text"></i>
                        <h3><a href="#">See Affiliated Conditions</a></h3>
                        <p>After entering your labs, you'll be able to confidently see what you could be facing.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-process">
                        <i className="fas fa-copy"></i>
                        <h3><a href="#">Track Your Forms</a></h3>
                        <p>Store and track your results with our easy-to-navigate interface. We built it with simplicity in mind.</p>
                    </div>
                </div>
            </div>
        </div>
    
                </div>
            </React.Fragment>
     );
}
 
export default Landing;
