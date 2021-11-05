import Dropdown from 'react-bootstrap/Dropdown';
import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import BMP from '../BMP/BMP';

const Forms = () => {
   const [testType, setTestType] = useState('');



    
    return ( 
        <Container className='mx-auto container-attributes overflow-hidden shadow '>
            <Dropdown>
                <Dropdown.Toggle>
                    Select Test Type
                </Dropdown.Toggle>
                <DropdownItem href={setTestType("BMP")}>BMP</DropdownItem>
                <DropdownItem href={setTestType("CBC")}>CBC</DropdownItem>
            </Dropdown>
            {testType==="BMP" && <BMP />}
            {testType==="CBC" && <CBC />}
        </Container>
     );
}
 
export default Forms;