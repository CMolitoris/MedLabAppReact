import React, { useState, useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import Button from 'react-bootstrap/Button'


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
            
                <Form.Group className="mb-1" controlId='Sodium'>
                    <Form.Label>Sodium:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Sodium..."/>
                </Form.Group>
            
            
                <Form.Group className="mb-1" controlId='Potassium'>
                    <Form.Label>Potassium:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Potassium..."/>
                </Form.Group>
            
            
                <Form.Group className="mb-1" controlId='Glucose'>
                    <Form.Label>Glucose:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Glucose..."/>
                </Form.Group>
            
            
                <Form.Group className="mb-1" controlId='Calcium'>
                    <Form.Label>Calcium:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Calcium..."/>
                </Form.Group>
            
            
                <Form.Group className="mb-1" controlId='Chloride'>
                    <Form.Label>Chloride:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Chloride..."/>
                </Form.Group>
            
            
                <Form.Group className="mb-1" controlId='Bicarbonate'>
                    <Form.Label>Bicarbonate:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Bicarbonate..."/>
                </Form.Group>
            
            
                <Form.Group className="mb-1" controlId='Creatinine'>
                    <Form.Label>Creatinine:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Creatinine..."/>
                </Form.Group>
            
            
                <Form.Group className="mb-4" controlId='BUN'>
                    <Form.Label>BUN:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="BUN..."/>
                </Form.Group>
                <Button className="submit-button" style={{background: "#1E2022",border: "#1E2022",color: "#F0F5F9"}} type="submit">Submit</Button>
        </Form>
     );
}
 
export default BMP;