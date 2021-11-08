import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import './ConditionViewer.css';
import { Button, Card } from 'react-bootstrap';

const ConditionViewer = () => {
    const user = useContext(UserContext);
    const [bmpTests,setBMPTests] = useState([]);
    const [cbcTests,setCBCTests] = useState([]);
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        filterConditions();
    },[]);

    const getAllTests = async () => {
        let BMPURL = `https://localhost:44394/api/BMPList/all/${user.id}`;
        let CBCURL = `https://localhost:44394/api/CBCList/all/${user.id}`;

        let response = await axios.get(BMPURL);
        setBMPTests(response.data);
        console.log(bmpTests);

        response = await axios.get(CBCURL);
        setCBCTests(response.data);
        console.log(cbcTests);
    }

    const getAllConditions = async () => {
        let conditionsURL = `https://localhost:44394/api/Condition`;
        let response = await axios.get(conditionsURL);
        setConditions(response.data);
        console.log(conditions); 
    }

    const filterConditions = async () => {
        getAllConditions();
        getAllTests();

        // let BMPURL = `https://localhost:44394/api/BMPList/all/${user.id}`;
        // let CBCURL = `https://localhost:44394/api/CBCList/all/${user.id}`;

        // let response = await axios.get(BMPURL);
        // setBMPTests(response.data);
        // console.log(bmpTests);
    
        // response = await axios.get(CBCURL);
        // setCBCTests(response.data);
        // console.log(cbcTests);

        // let conditionsURL = `https://localhost:44394/api/Condition`;
        // response = await axios.get(conditionsURL);
        // setConditions(response.data);
        // console.log(conditions); 

        let testIds = [];
        bmpTests.forEach((element) => {
            if(element.bmp.sodium<135){
                if (testIds.includes(2) === false) {
                    testIds.push(2);
                }
            } else if(element.bmp.potassium<3.5){
                if (testIds.includes(1) === false) {
                    testIds.push(1);
                }
            } else if(element.bmp.glucose>100){
                if (testIds.includes(3) === false) {
                    testIds.push(3);
                }
            } else if(element.bmp.creatinine>1.2){
                if (testIds.includes(4) === false) {
                    testIds.push(4);
                }
            } else if(element.bmp.bicarbonate>29){
                if (testIds.includes(5) === false) {
                    testIds.push(5);
                }
            }
        });

        console.log(testIds);

        cbcTests.forEach((element) => {
            if(element.cbc.lym > 44 || element.cbc.wbc > 10.16 || element.cbc.neu > 70){
                if (testIds.includes(6) === false) {
                    testIds.push(6);
                }
            } else if(element.cbc.mon > 11){
                if (testIds.includes(7) === false) {
                    testIds.push(7);
                }
            } else if(element.cbc.rbc < 4.3 || element.cbc.RDW > 15.8) {
                if (testIds.includes(8) === false) {
                    testIds.push(8);
                }
            } else if(element.cbc.plt < 150){
                if (testIds.includes(9) === false) {
                    testIds.push(9);
                }
            }
        });

        let filteredConditions = conditions.filter((element) => {
            return testIds.includes(element.id);
        })
        setConditions(filteredConditions);
        console.log(filteredConditions);
        
        
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-3 cond-panel mt-3" >
                        <div>
                            <h3>Title Here</h3>
                            
                        </div>  
                </div>
                <div className="col cond-panel-two mt-3" >
                        <div align="center">
                            <h3>Title Here</h3>
                            <div className='cont-scroll row'>
                                {conditions.map((element,i) => {
                                    return (
                                        <div className='col '>
                                            <Card key={i} style={{ width: '14rem', }}>
                                                <Card.Img className='card-image'  src={element.image} />
                                                <Card.Body>
                                                    <Card.Title>{element.name}</Card.Title>
                                                    <div>
                                                        <hr/>
                                                        <div className='card-scroll'>
                                                            {element.description}
                                                        </div>
                                                    </div>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )}
                                )}
                            </div>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default ConditionViewer;