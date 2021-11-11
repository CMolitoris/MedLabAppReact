import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Col, Row, Form } from 'react-bootstrap';
import './RegisterUser.css'

const RegisterUser = (props) => {
    
    const [registerValues, setRegisterValues] = useState({
        firstname: "", 
        lastname: "", 
        username: "", 
        password: "", 
        email: "", 
        phonenumber: ""
    })

    const [demog, setDemog] = useState({
        age: '',
        height: '',
        weight: '',
        gender: ''
    })

    const handleChangeRegister = (event) => {
        setRegisterValues(prevstate => ({
            ...prevstate,
            [event.target.name]: event.target.value
        }));
    }

    const handleChangeDemog = (event) => {
        if(event.target.name==='gender') {
            setDemog(prevstate => ({
                ...prevstate,
                [event.target.name]: event.target.value
            }));
            
        } else if(event.target.name==='age') {
            setDemog(prevstate => ({
                ...prevstate,
                [event.target.name]: parseInt(event.target.value)
            }));
        } else {
            setDemog(prevstate => ({
                ...prevstate,
                [event.target.name]: parseFloat(event.target.value)
            }));
        }
        
    }

    const registerUser = (event) => {
        event.preventDefault();
        props.toggleModal();
        props.register(registerValues, demog)
    }


    const hideModal = () => {
        props.toggleModal();
    }

    return (
        <div>
            <Offcanvas placement="end" show = {props.modalShow} onHide = {hideModal}>
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle className = "offCanvasTitle" align = "center">Register</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <form className = "my-auto container-scroll" onSubmit={registerUser}>
                        <Form.Group className='my-1' controlId='registerUser'>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="firstname">First Name</label>
                                    <Form.Control placeholder="John" name="firstname" onChange={handleChangeRegister} value={registerValues.firstname}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="lastname">Last Name</label>
                                    <Form.Control placeholder="Doe" name="lastname" onChange={handleChangeRegister} value={registerValues.lastname}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="username">Username</label>
                                    <Form.Control placeholder="JohnDoe123" name="username" onChange={handleChangeRegister} value={registerValues.username}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="password">Password</label>
                                    <Form.Control placeholder="password1234" type = "password" name="password" onChange={handleChangeRegister} value={registerValues.password}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="email">Email</label>
                                    <Form.Control placeholder="Johndoe@example.com" name="email" onChange={handleChangeRegister} value={registerValues.email}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <Form.Control placeholder="555-555-555" name="phonenumber" onChange={handleChangeRegister} value={registerValues.phonenumber}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="age">Age</label>
                                    <Form.Control placeholder="Years" name="age" onChange={handleChangeDemog} value={demog.age}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="height">Height</label>
                                    <Form.Control placeholder="Inches" name="height" onChange={handleChangeDemog} value={demog.height}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="weight">Weight</label>
                                    <Form.Control placeholder="lbs" name="weight" onChange={handleChangeDemog} value={demog.weight}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className = "registerInput">
                                    <label htmlFor="gender">Gender</label>
                                    <Form.Select value={demog.gender} placeholder="Male/Female" name="gender" onChange={handleChangeDemog}>
                                        <option value='Prefers not to disclose'>Prefer not to say</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row className = "buttonRow">
                                <Col className = "submitButton" align= "center">
                                    <Button className='btn btn-md shadow' id = "form-button-style" type="submit">Register</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </form>
            </OffcanvasBody>
            </Offcanvas>
       </div>
    );
    
}
 
export default RegisterUser;