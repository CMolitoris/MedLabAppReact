import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import BMP from '../BMP/BMP';
import CBC from '../CBC/CBC';
import './Forms.css'

const Forms = () => {
   const [testType, setTestType] = useState('');

    return ( 
        <div className='mx-auto con-attributes-form shadow '>
            <div className=" shadow">
                
                {testType==='' && <h2 className="post-title-font cent-style">Select Test</h2>}
                {testType!=='' && <h2 className="post-title-font cent-style-two">Enter {testType} Results</h2>}
            </div>    
                
                
            <div className="pad-left">
                <Dropdown className=' mb-3' >
                    <Dropdown.Toggle style={{background: "#1E2022",border: "#1E2022",color: "#F0F5F9"}}>
                        Select Test Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item as="button" onClick={() => setTestType("BMP")}>BMP</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => setTestType("CBC")}>CBC</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>    
           
            
        
            {testType==="BMP" && <BMP />}
            {testType==="CBC" && <CBC />}
           
        </div>
     );
}
 
export default Forms;