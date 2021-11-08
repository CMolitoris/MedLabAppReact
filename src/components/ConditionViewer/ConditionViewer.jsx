import axios from 'axios';
import React, { Component, useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import './ConditionViewer.css'

const ConditionViewer = () => {
    const user = useContext(UserContext);
    const [bmpTests,setBMPTests] = useState('');
    const [cbcTests,setCBCTests] = useState('');

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

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-3 cond-panel mt-3" >
                        <div>
                            <h3>Title Here</h3>
                            
                        </div>  
                </div>
                <div className="col-8 cond-panel-two mt-3" >
                        <div>
                            <h3>Title Here</h3>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default ConditionViewer;