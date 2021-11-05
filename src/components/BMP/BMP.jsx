import React, { useState, useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../../UserContext';


const BMP = () => {

    const { user } = useContext(UserContext);

    const [bmpValues, setBMPValues] = useState({
        Sodium: '',
        Potassium: '',
        Glucose: '',
        Calcium: '',
        Chloride: '',
        Bicarbonate: '',
        Creatinine: '',
        BUN: ''
    })

    const handleChange = (event) => {
        event.persist();
        setBMPValues(prevState => ({
            ...prevState,
            [event.target.name]: parseFloat(event.target.value)
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const URL = `https://localhost:44394/api/BMP/${user.id}`
        try {
            let response = await axios.post(URL,bmpValues);
            console.log(response.data);
        } catch (e) {
            console.log("Error BMP POST: ", e);
        }
    }
    
    return (
        <Form onSubmit={handleSubmit}> 
            <Row>
                <Form.Group as={Col} controlId='Sodium'>
                    <Form.Label>Sodium:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Sodium..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Potassium'>
                    <Form.Label>Potassium:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Potassium..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Glucose'>
                    <Form.Label>Glucose:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Glucose..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Calcium'>
                    <Form.Label>Calcium:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Calcium..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Chloride'>
                    <Form.Label>Chloride:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Chloride..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Bicarbonate'>
                    <Form.Label>Bicarbonate:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Bicarbonate..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Creatinine'>
                    <Form.Label>Creatinine:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Creatinine..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='BUN'>
                    <Form.Label>BUN:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="BUN..."/>
                </Form.Group>
            </Row>
        </Form>
     );
}
 
export default BMP;