import React, { useState, useContext } from 'react';
import { Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import Button from 'react-bootstrap/Button'


const BMP = () => {
    const user = useContext(UserContext);

    const [bmpValues, setBMPValues] = useState({
        Sodium: '',
        Potassium: '',
        Glucose: '',
        Calcium: '',
        Chloride: '',
        Bicarbonate: '',
        Creatinine: '',
        BUN: '',
        DateTime: ''
    })

    const handleChange = (event) => {
        event.persist();
        if(event.target.name=='DateTime') {
            setBMPValues(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }))
        } else {
            setBMPValues(prevState => ({
                ...prevState,
                [event.target.name]: parseFloat(event.target.value)
            }))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const URL = `https://localhost:44394/api/BMP/${user.id}`
        try {
            console.log(bmpValues)
            let response = await axios.post(URL,bmpValues);
            console.log(response.data);
        } catch (e) {
            console.log("Error BMP POST: ", e);
        }
    }
    
    return (
        <div className="form-scroll">
            <Form onSubmit={handleSubmit}> 
                    <Form.Group className="mb-1" controlId='Sodium'>
                        <FloatingLabel label="Sodium">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Sodium..." name="Sodium" value={bmpValues.Sodium}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Potassium'>
                        <FloatingLabel label="Potassium">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Potassium..." name="Potassium" value={bmpValues.Potassium}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Glucose'>
                        <FloatingLabel label="Glucose">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Glucose..." name="Glucose" value={bmpValues.Glucose}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Calcium'>
                        <FloatingLabel label="Calcium">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Calcium..." name="Calcium" value={bmpValues.Calcium}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Chloride'>
                        <FloatingLabel label="Chloride">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Chloride..." name="Chloride" value={bmpValues.Chloride}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Bicarbonate'>
                        <FloatingLabel label="Bicarbonate">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Bicarbonate..." name="Bicarbonate" value={bmpValues.Bicarbonate}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Creatinine'>
                        <FloatingLabel label="Creatinine">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Creatinine..." name="Creatinine" value={bmpValues.Creatinine}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='BUN'>
                        <FloatingLabel label="BUN">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="BUN..." name="BUN" value={bmpValues.BUN}/>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId='DateTime'>
                     <FloatingLabel label="Date of Test">
                            <Form.Control type='date' className="shadow" onChange={handleChange} name="DateTime" value={bmpValues.DateTime}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Button className="submit-button" style={{background: "#1E2022",border: "#1E2022",color: "#F0F5F9"}} type="submit">Submit</Button>
            </Form>
        </div>
     );
}
 
export default BMP;