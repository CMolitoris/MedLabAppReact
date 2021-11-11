import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './Account.css';
import './Account.scss';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            linkedConditions: [],
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            streetaddress: '',
            city: '',
            state: '',
            zip: '',

            age: 0,
            gender: '',
            height: 0,
            weight: 0

         }
    }


    componentDidMount = () => {
        this.getConditionsUser()
        this.getUserInformation()
        this.createListeners()
    }

    createListeners = () => {
        document.addEventListener('DOMContentLoaded', function () {
            var btn = document.querySelector('.button'),
                loader = document.querySelector('.loader'),
                check = document.querySelector('.check');
                
            if(btn){
                btn.addEventListener('click', function () {
                  loader.classList.add('active');    
                });
               
                loader.addEventListener('animationend', function() {
                  check.classList.add('active'); 
                });
        
            }
        
          });
        
          document.addEventListener('DOMContentLoaded', function () {
            var btn = document.querySelector('.buttona'),
                loader = document.querySelector('.loadera'),
                check = document.querySelector('.checka');
                
            if(btn){
                btn.addEventListener('click', function () {
                  loader.classList.add('active');    
                });
               
                loader.addEventListener('animationend', function() {
                  check.classList.add('active'); 
                });
        
            }
        
          });
    
    }

    

    getUserInformation = async () => {
        let profileURL = `https://localhost:44394/api/profile/${this.props.user.id}`;
        let userURL = `https://localhost:44394/api/users/${this.props.user.id}`;
        try {
            let response = await axios.get(userURL);
            let resData = response.data;
            console.log(resData)
            this.setState({
                firstname: resData.firstName,
                lastname: resData.lastName,
                phonenumber: resData.phoneNumber,
                email: resData.email,
                streetaddress: resData.streetAddress,
                city: resData.city,
                state: resData.state,
                zip: resData.zip
            })
            response = await axios.get(profileURL);
            resData = response.data;
            this.setState({
                age: resData.age,
                gender: resData.gender,
                height: resData.height,
                weight: resData.weight
            })
        } catch(e) {
            console.log("Error in getUserInfo: ",e);
        }
        
    }

    getConditionsUser = async () => {
        let conditionsURL = `https://localhost:44394/api/ConditionList/all/${this.props.user.id}`;
        try {
            let response = await axios.get(conditionsURL);
            this.setState({
                linkedConditions: response.data
            })
        } catch (e) {
            console.log("Error in get conditionsList user: ", e);
        }
    }

    getUserTests = () => {

    }

    updateUser = async () => {
        let URL = `https://localhost:44394/api/users/edit/${this.props.user.id}`;
        console.log(this.state)
        try {
            let response = await axios.put(URL,{
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                phonenumber: this.state.phonenumber,
                email: this.state.email,
                streetaddress: this.state.streetaddress,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            })
        } catch (e) {
            console.log("Error in update profile: ", e);
        }
    }

    updateProfile = async () => {
        let URL = `https://localhost:44394/api/profile/edit/${this.props.user.id}`;
        try {
            let response = await axios.put(URL,{
                age: this.state.age,
                gender: this.state.gender,
                height: this.state.height,
                weight: this.state.weight
            })
        } catch (e) {
            console.log("Error in update profile: ", e);
        }
    }

    handleChange = (event) => {
        if(event.target.name==='height' || event.target.name==='weight'){
            this.setState({
                [event.target.name]: parseFloat(event.target.value) 
            })
        } else if(event.target.name==='age'){
            this.setState({
                [event.target.name]: parseInt(event.target.value) 
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        
    }


    render() { 
        return ( 
            <div className="container mt-3">
                <div className="row">
                    <div className=" col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        
                        <div align='center' className="card-acc-one shadow ">
                            <div className='header-side-panel pt-1'>Linked Conditions</div>
                            <div className='contain-scroll' align='center'>
                                {this.state.linkedConditions.map((element,i) => {
                                    return (
                                        <Card className='mt-2 card shadow' key={i} style={{ width: '90%' }}>
                                            <Card.Body>
                                                <Card.Title>{element.condition.name}</Card.Title>
                                                    <div>
                                                        <hr/>
                                                        <div className='card-scroll'>
                                                            {element.condition.description}
                                                        </div>
                                                    </div>
                                                <Button variant='dark' id='button-color' className='w-100' onClick={() => this.linkCondition(element.condition.id)} >Learn More <i class="bi bi-info-square"></i></Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div align='center' className=" col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card-acc shadow ">
                            <div className="mb-3 shadow cont-inner">
                                <div className="row gutters ">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-3 text-primary">Personal Details</h6>
                                        
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group ">
                                            <label for="firstname">First Name</label>
                                            <input onChange={this.handleChange} type="text" className="shadow form-control form-control-acc" id="firstname" placeholder='Enter First Name' name='firstname' value={this.state.firstname}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="lastname">Last Name</label>
                                            <input onChange={this.handleChange} type="text" className="shadow form-control form-control-acc" id="lastname" placeholder="Enter Last Name" name='lastname' value={this.state.lastname}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="phonenumber">Phone</label>
                                            <input onChange={this.handleChange} type="text" className="form-control form-control-acc shadow" id="phonenumber" placeholder="Enter phone number" name='phonenumber' value={this.state.phonenumber}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input onChange={this.handleChange} type="email" className="form-control form-control-acc shadow" id="email" placeholder="Email" name='email' value={this.state.email}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-3 mt-3 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="streetaddress">Street</label>
                                            <input onChange={this.handleChange} type="name" className="form-control form-control-acc shadow" id="streetaddress" placeholder="Enter Street" name='streetaddress' value={this.state.streetaddress}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="city">City</label>
                                            <input onChange={this.handleChange} type="name" className="form-control form-control-acc shadow" id="city" placeholder="Enter City" name='city' value={this.state.city}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="state">State</label>
                                            <input onChange={this.handleChange} type="text" className="form-control form-control-acc shadow" id="state" placeholder="Enter State" name='state' value={this.state.state}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="zip">Zip Code</label>
                                            <input onChange={this.handleChange} type="text" className="form-control form-control-acc shadow" id="zip" placeholder="Zip Code" name='zip' value={this.state.zip}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className='pt-3' align='center'>

                                            <div className="main">
                                                <button onClick={this.updateUser} class="button">Update Details</button>                                           
                                                <div className="loader">
                                                    <div className="check">
                                                    <span className="check-one"></span>
                                                    <span className="check-two"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            

                                            {/* <Button onClick={this.updateUser} variant='dark' type="button" id="submit" name="submit" className="btn btn-primary bg-dark">Update Details</Button> */}
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
                                            <label for="age">Age</label>
                                            <input onChange={this.handleChange} type="text" className="form-control form-control-acc shadow" id="age" name='age' value={this.state.age}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="gender">Gender</label>
                                            <input onChange={this.handleChange} type="text" className="form-control form-control-acc shadow" id="gender" name='gender' value={this.state.gender}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="height">Height</label>
                                            <input onChange={this.handleChange} type="text" className="form-control form-control-acc shadow" id="height" name='height' value={this.state.height}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label for="weight">Weight</label>
                                            <input onChange={this.handleChange} type="url" className="form-control form-control-acc shadow" id="weight" name='weight' value={this.state.weight}/>
                                        </div>
                                    </div>
                                   
                                   
                                </div>
                                
                                <div className="row ">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div  className="pt-3"> 

                                            <div className="main">
                                                <button onClick={this.updateProfile} className="buttona">Update Demographics</button>                                           
                                                <div className="loadera">
                                                    <div className="checka">
                                                    <span className="check-onea"></span>
                                                    <span className="check-twoa"></span>
                                                    </div>
                                                </div>
                                            </div>                                          
                                            {/* <Button onClick={this.updateProfile} variant='dark' type="button" id="submit" name="submit" className="btn btn-primary">Update Demographics</Button> */}
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



  
  
  
  