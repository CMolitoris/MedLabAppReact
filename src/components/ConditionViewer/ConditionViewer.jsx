import React, { Component, useContext } from 'react';
import { UserContext } from '../../UserContext';
import './ConditionViewer.css'

const ConditionViewer = () => {
    const user = useContext(UserContext);

    const getAllTest = async () => {
        
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