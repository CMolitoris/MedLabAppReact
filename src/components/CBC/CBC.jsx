import React, { useState, useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import Button from 'react-bootstrap/Button';
import './CBC.css';


const CBC = () => {
    const { user } = useContext(UserContext);
    
    const [cbcValues, setCBCValues] = useState({
        Rbc: '',
        Hb: '',
        Hct: '',
        MCV: '',
        MCH: '',
        MCHC: '',
        RDW: '',
        WBC: '',
        Neu: '',
        Lym: '',
        Mon: '',
        Eos: '',
        Bas: '',
        Plt: ''
    })


    const handleChange = (event) => {
        event.persist();
        setCBCValues(prevState => ({
            ...prevState,
            [event.target.name]: parseFloat(event.target.value) 
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const URL = `https://localhost:44394/api/CBC/${user.id}`
        try {
            let response = await axios.post(URL,cbcValues);
            console.log(response.data);
        } catch (e) {
            console.log("Error CBC POST: ", e);
        }
    }


    
    return ( 
        <div className="form-scroll">
            <Form  onSubmit={handleSubmit}> 
                    <Form.Group className="mb-1" controlId='Rbc'>
                        <Form.Label>Rbc:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Red Blood Cells..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Hb'>
                        <Form.Label>Hb:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Hemoglobin..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Hct'>
                        <Form.Label>Hct:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Hematocrit..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='MCV'>
                        <Form.Label>MCV:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Mean Corpuscular Volume..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='MCH'>
                        <Form.Label>MCH:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Mean Corpuscular Hemoglobin..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='MCHC'>
                        <Form.Label>MCHC:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Mean Corpuscular Hemoglobin Concentration..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='RDW'>
                        <Form.Label>RDW:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Red Cell Distribution Width..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='WBC'>
                        <Form.Label>WBC:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="White Blood Cell..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Neu'>
                        <Form.Label>Neu:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Neutrophil..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Lym'>
                        <Form.Label>Lym:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Lymphocyte..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Mon'>
                        <Form.Label>Mon:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Monocyte..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Eos'>
                        <Form.Label>Eos:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Eosinophil..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Bas'>
                        <Form.Label>Bas:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Basophil..."/>
                    </Form.Group>
                
                
                    <Form.Group className="mb-4" controlId='Plt'>
                        <Form.Label>Plt:</Form.Label>
                        <Form.Control className="shadow" onChange={handleChange} placeholder="Platelet..."/>
                    </Form.Group>
                    <Button className="submit-button" style={{background: "#1E2022",border: "#1E2022",color: "#F0F5F9"}} type="submit">Submit</Button>
            </Form>
        </div>
    );
}
 
export default CBC;