import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './Account.css';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            linkedConditions: []
         }
    }

    componentDidMount = () => {
        this.getConditionsUser()
    }

    getConditionsUser = async () => {
        let conditionsURL = `https://localhost:44394/api/ConditionList/all/${this.props.user.id}`;
        try {
            let response = await axios.get(conditionsURL);
            this.setState({
                linkedConditions: response.data
            })
        } catch (e) {
            console.log("Error in get conditionsList user", e);
        }
    }


    render() { 
        return ( 
            <div className="container mt-3">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card-acc shadow card-body">
                            <h3 className='header-side-panel'>Linked Conditions</h3>
                            <div className='contain-scroll'>
                                {this.state.linkedConditions.map((element,i) => {
                                    return (
                                        <Card className='mt-2 card shadow' key={i} style={{ width: '100%' }}>
                                            <Card.Body>
                                                <Card.Title>{element.condition.name}</Card.Title>
                                                    <div>
                                                        <hr/>
                                                        <div className='card-scroll'>
                                                            {element.condition.description}
                                                        </div>
                                                    </div>
                                                <Button className='w-100' onClick={() => this.linkCondition(element.condition.id)} variant="dark">Learn More <i class="bi bi-info-square"></i></Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card-acc shadow ">
                            <div className="shadow cont-inner">
                                <div className="row gutters ">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-3 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" className="form-control form-control-acc" id="fullName" placeholder="Enter full name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="eMail">Email</label>
                                            <input type="email" className="form-control form-control-acc" id="eMail" placeholder="Enter email ID"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" className="form-control form-control-acc" id="phone" placeholder="Enter phone number"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="website">Website URL</label>
                                            <input type="url" className="form-control form-control-acc" id="website" placeholder="Website url"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-3 mt-3 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="Street">Street</label>
                                            <input type="name" className="form-control form-control-acc" id="Street" placeholder="Enter Street"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="ciTy">City</label>
                                            <input type="name" className="form-control form-control-acc" id="ciTy" placeholder="Enter City"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="sTate">State</label>
                                            <input type="text" className="form-control form-control-acc" id="sTate" placeholder="Enter State"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="zIp">Zip Code</label>
                                            <input type="text" className="form-control form-control-acc" id="zIp" placeholder="Zip Code"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className='pt-3' align='center'>
                                            <Button variant='dark' type="button" id="submit" name="submit" className="btn btn-primary bg-dark">Update Details</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            {/* DEMOGRAPHICS */}
                            <div className="shadow cont-inner">
                                <div className="row gutters ">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-3 text-primary">Demographics</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" className="form-control form-control-acc" id="fullName" placeholder="Enter full name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="eMail">Email</label>
                                            <input type="email" className="form-control form-control-acc" id="eMail" placeholder="Enter email ID"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" className="form-control form-control-acc" id="phone" placeholder="Enter phone number"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="website">Website URL</label>
                                            <input type="url" className="form-control form-control-acc" id="website" placeholder="Website url"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" className="form-control form-control-acc" id="phone" placeholder="Enter phone number"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="website">Website URL</label>
                                            <input type="url" className="form-control form-control-acc" id="website" placeholder="Website url"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div align='center' className="pt-3">                                           
                                            <Button variant='dark' type="button" id="submit" name="submit" className="btn btn-primary">Update Demographics</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Account;
