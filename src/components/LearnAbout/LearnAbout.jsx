import axios from 'axios';
import React, { Component } from 'react';
import './LearnAbout.css';
import { Card, Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LearnAbout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            conditions: [],
            chemistry: [],
            hematology: []
        }
    }

    componentDidMount = () => {
        this.getAllConditions();
    }

    getAllConditions = async () => {
        let URL = `https://localhost:44394/api/Condition`;
        try {
            let response = await axios.get(URL);
            this.setState({
                conditions: response.data
            })
            this.filterChemistry(response.data)
            this.filterHematology(response.data)
        } catch(e) {
            console.log("LearnAbout.jsx, Error in get all conditions: ",e)
        }
    }

    filterChemistry = (conditions) => {
        let chem = conditions.filter((element) => {
            return element.id < 6
        })
        this.setState({
            chemistry: chem
        })
    }

    filterHematology = (conditions) => {
        let hema = conditions.filter((element) => {
            return element.id > 5
        })
        this.setState({
            hematology: hema
        })
    }

    render() { 
        return ( 
            <div className='main-panel-about'>
                <div className='sub-panel-learnabout-outer'>
                    <div className='sub-panel-learnabout'>
                        <h3 className='header-learnabout'>Welcome to the Learning Section!</h3>
                        <hr/>
                        <p className='blocktext'>
                            We want our users to have the knowledge to make the best health-based decisions. Explore this section and simply click on the condition that you would like to learn more about. Simply toggle between the available subject areas and click to learn more.
                        </p>
                        <p className='blocktext'>
                            Stay tuned for future releases with even more of a selection to learn from!
                        </p>
                    </div>
                </div>
                <div className='sub-panel-accordion'>
                    
                <Accordion >
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Chemistry</Accordion.Header>
                        <Accordion.Body>
                            {this.state.chemistry.map((element,i) => {
                                return (
                                    <Card className='mt-2 card shadow' key={i} style={{ width: 'auto' }}>
                                
                                        <Card.Body>
                                            <Card.Title className='header-learnabout'>{element.name}</Card.Title>
                                               
                                                    <hr/>
                                                    <div className='card-scroll blocktext p-3'>
                                                        {element.description}
                                                    </div>
                                                
                                            <Link to={{pathname: '/learn', state: {condition: element}}} onClick={() => this.props.selectCondition(element)}>
                                                <Button onClick={() => this.props.selectCondition(element)} className='w-100' id="button-color">Learn More <i class="bi bi-info-square"></i></Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Hematology</Accordion.Header>
                        <Accordion.Body>
                            {this.state.hematology.map((element,i) => {
                                console.log(element)
                                return (
                                    <Card className='mt-2 card shadow' key={i} style={{ width: 'auto' }}>
                                
                                        <Card.Body>
                                            <Card.Title>{element.name}</Card.Title>
                                                <div>
                                                    <hr/>
                                                    <div className='card-scroll'>
                                                        {element.description}
                                                    </div>
                                                </div>
                                            <Link to={{pathname: '/learn', state: {condition: element}}} onClick={() => this.props.selectCondition(element)}>
                                                <Button onClick={() => this.props.selectCondition(element)} className='w-100' id="button-color">Learn More <i class="bi bi-info-square"></i></Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
           
            </div>
        );
    }
}
 
export default LearnAbout;