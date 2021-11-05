import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import BMP from '../BMP/BMP';
import CBC from '../CBC/CBC';

const Forms = () => {
   const [testType, setTestType] = useState('');

    return ( 
        <Container className='mx-auto container-attributes overflow-hidden shadow '>
            <Dropdown>
                <Dropdown.Toggle>
                    Select Test Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as="button" onClick={() => setTestType("BMP")}>BMP</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => setTestType("CBC")}>CBC</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {testType==="BMP" && <BMP />}
            {testType==="CBC" && <CBC />}
        </Container>
     );
}
 
export default Forms;