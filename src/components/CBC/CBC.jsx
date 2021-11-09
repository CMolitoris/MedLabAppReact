import React, { useState, useContext } from 'react';
import { Form, Modal, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import Button from 'react-bootstrap/Button';
import './CBC.css';
import { Link } from 'react-router-dom';


const CBC = () => {
    const user = useContext(UserContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
        Plt: '',
        DateTime: ''
    })


    const handleChange = (event) => {
        event.persist();
        if(event.target.name=='DateTime') {
            setCBCValues(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }))
        } else {
            setCBCValues(prevState => ({
                ...prevState,
                [event.target.name]: parseFloat(event.target.value)
            }))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const URL = `https://localhost:44394/api/CBC/${user.id}`
        try {
            let response = await axios.post(URL,cbcValues);
            console.log(response.data);
            handleShow();
            setCBCValues({
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
                Plt: '',
                DateTime: ''
            })
        } catch (e) {
            console.log("Error CBC POST: ", e);
        }
    }

    const routeConditions = () => {
        window.location='http://localhost:3000/conditions';
    }

    
    return ( 
        <div className="form-scroll">
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i className="bi bi-folder-plus"></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Would you like to submit another form?
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{background: "#52616B",border: "#1E2022",color: "#F0F5F9"}} onClick={handleClose}>
                        Yes <i class="bi bi-check-square"></i>
                    </Button>
                    <Link to='/conditions'>
                        <Button style={{background: "#C9D6DF",border: "#1E2022",color: "#1E2022"}} variant="primary">
                            No <i class="bi bi-x-square"></i>
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>

            <Form  onSubmit={handleSubmit}> 
                    <Form.Group className="mb-1" controlId='Rbc'>
                        <FloatingLabel label="Red Blood Cell">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Rbc..." name="Rbc" value={cbcValues.Rbc}/>
                        </FloatingLabel>
                    </Form.Group>
              
                    <Form.Group className="mb-1" controlId='Hb'>
                        <FloatingLabel label="Hemoglobin">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Hb..." name="Hb" value={cbcValues.Hb}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Hct'>
                        <FloatingLabel label="Hematocrit">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Hct..." name="Hct" value={cbcValues.Hct}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='MCV'>
                        <FloatingLabel label="Mean Corpuscular Volume">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="MCV..." name="MCV" value={cbcValues.MCV}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='MCH'>
                        <FloatingLabel label="Mean Corpuscular Hemoglobin">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="MCH..." name="MCH" value={cbcValues.MCH}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='MCHC'>
                        <FloatingLabel label="Mean Corpuscular Hemoglobin Concentration">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="MCHC..." name="MCHC" value={cbcValues.MCHC}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='RDW'>
                        <FloatingLabel label="Red Cell Distribution Width">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="RDW..." name="RDW" value={cbcValues.RDW}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='WBC'>
                        <FloatingLabel label="White Blood Cell">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="WBC..." name="WBC" value={cbcValues.WBC}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Neu'>
                        <FloatingLabel label="Neutrophil">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Neu..." name="Neu" value={cbcValues.Neu}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Lym'>
                        <FloatingLabel label="Lymphocyte">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Lym..." name="Lym" value={cbcValues.Lym}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Mon'>
                        <FloatingLabel label="Monocyte">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Mon..." name="Mon" value={cbcValues.Mon}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Eos'>
                        <FloatingLabel label="Eosinophil">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Eos..." name="Eos" value={cbcValues.Eos}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Bas'>
                        <FloatingLabel label="Basophil">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Bas..." name="Bas" value={cbcValues.Bas}/>
                        </FloatingLabel>
                    </Form.Group>
                
                
                    <Form.Group className="mb-1" controlId='Plt'>
                        <FloatingLabel label="Platelet">
                            <Form.Control step="0.1" type='number' className="shadow" onChange={handleChange} placeholder="Plt..." name="Plt" value={cbcValues.Plt}/>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId='Date'>
                        <FloatingLabel label="Date of Test">
                            <Form.Control type='date' className="shadow" onChange={handleChange} name="DateTime" value={cbcValues.DateTime}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant='dark' className="submit-button" style={{background: "#1E2022",border: "#1E2022",color: "#F0F5F9"}} type="submit">Submit <i class="bi bi-lock"></i></Button>
            </Form>
        </div>
    );
}
 
export default CBC;