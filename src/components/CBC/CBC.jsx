import React, { useState, useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../../UserContext';


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
        <Form onSubmit={handleSubmit}> 
            <Row>
                <Form.Group as={Col} controlId='Rbc'>
                    <Form.Label>Rbc:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Red Blood Cells..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Hb'>
                    <Form.Label>Hb:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Hemoglobin..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Hct'>
                    <Form.Label>Hct:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Hematocrit..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='MCV'>
                    <Form.Label>MCV:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Mean Corpuscular Volume..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='MCH'>
                    <Form.Label>MCH:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Mean Corpuscular Hemoglobin..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='MCHC'>
                    <Form.Label>MCHC:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Mean Corpuscular Hemoglobin Concentration..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='RDW'>
                    <Form.Label>RDW:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Red Cell Distribution Width..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='WBC'>
                    <Form.Label>WBC:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="White Blood Cell..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Neu'>
                    <Form.Label>Neu:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Neutrophil..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Lym'>
                    <Form.Label>Lym:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Lymphocyte..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Mon'>
                    <Form.Label>Mon:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Monocyte..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Eos'>
                    <Form.Label>Eos:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Eosinophil..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Bas'>
                    <Form.Label>Bas:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Basophil..."/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId='Plt'>
                    <Form.Label>Plt:</Form.Label>
                    <Form.Control className="shadow" onChange={handleChange} placeholder="Platelet..."/>
                </Form.Group>
            </Row>
        </Form>

    );
}
 
export default CBC;