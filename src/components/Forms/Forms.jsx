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
            <div className=" ">
                
                {testType==='' && <h2 className="shadow post-title-font cent-style">Select Test</h2>}
                {testType!=='' && <h2 className="shadow post-title-font cent-style-two">Enter {testType} Results</h2>}
            </div>    
                
                
            <div className="">
                <Dropdown className=' cent-style-drop mb-3' >
                    <Dropdown.Toggle bsPrefix="p-0" style={{background: "#1E2022",border: "#1E2022",color: "#F0F5F9"}}>
                    <i className="bi bi-chevron-double-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item as="button" onClick={() => setTestType("BMP")}>BMP</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => setTestType("CBC")}>CBC</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>    
           
            
            <div>
                {testType==="BMP" && <BMP />}
                {testType==="CBC" && <CBC />}
            </div>

        </div>
     );
}
 
export default Forms;