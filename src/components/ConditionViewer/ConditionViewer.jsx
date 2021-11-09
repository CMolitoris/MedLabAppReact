import axios from 'axios';
import React, { Component, useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import './ConditionViewer.css';
import { Button, Card } from 'react-bootstrap';
import ConditionsOC from '../ConditionsOC/ConditionsOC';

class ConditionViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bmpTests: [],
            cbcTests: [],
            conditions: [],
            linkedConditions: []  
        }
    }    
        getBMPTests = async () => {
            let BMPURL = `https://localhost:44394/api/BMPList/all/${this.props.user.id}`;
            let response = await axios.get(BMPURL);
            // setBMPTests(response.data);
            // console.log(response.data);
            return response.data;
    
        }
    
        getCBCTests = async () => {
            let CBCURL = `https://localhost:44394/api/CBCList/all/${this.props.user.id}`;
            let response = await axios.get(CBCURL);
            // setCBCTests(response.data);
            // console.log(response.data);
            return response.data
        }
    
        getAllConditions = async () => {
            let conditionsURL = `https://localhost:44394/api/Condition`;
            let response = await axios.get(conditionsURL);
            // setConditions(response.data);
            // console.log(response.data); 
            return response.data
        }
    
        componentDidMount = () => {
            this.filterConditions()
            this.getConditionsUser()
        }
        
    
        filterConditions = async () => {
            await Promise.all([this.getBMPTests(),this.getCBCTests(),this.getAllConditions()])
                .then(([newBMPTests,newCBCTests,conditions]) => {
                    this.setState({
                        bmpTests: newBMPTests,
                        cbcTests: newCBCTests,
                        conditions: conditions
                    })
                })
       
            console.log(this.state.bmpTests)
            let newTestIds = [];
    
            for(let i=0;i<this.state.bmpTests.length;i++){
                if(this.state.bmpTests[i].bmp.sodium<135){
                    if (newTestIds.includes(2) === false) {
                        newTestIds.push(2);
                    }
                }
                if(this.state.bmpTests[i].bmp.potassium<3.5){
                    if (newTestIds.includes(1) === false) {
                        newTestIds.push(1);
                    }
                }
                if(this.state.bmpTests[i].bmp.glucose>100){
                    if (newTestIds.includes(3) === false) {
                        newTestIds.push(3);
                    }
                }
                if(this.state.bmpTests[i].bmp.creatinine>1.2){
                    if (newTestIds.includes(4) === false) {
                        newTestIds.push(4);
                    }
                }
                if(this.state.bmpTests[i].bmp.bicarbonate>29){
                    if (newTestIds.includes(5) === false) {
                        newTestIds.push(5);
                    }
                }
            }
    
            this.state.cbcTests.forEach((element) => {
                
                console.log(element)
                if(element.cbc.lym > 44 || element.cbc.wbc > 10.16 || element.cbc.neu > 70){
                    if (newTestIds.includes(6) === false) {
                        newTestIds.push(6);
                    }
                }
                if(element.cbc.mon > 11){
                    if (newTestIds.includes(7) === false) {
                        newTestIds.push(7);
                    }
                }
                if(element.cbc.rbc < 4.3 || element.cbc.RDW > 15.8) {
                    if (newTestIds.includes(8) === false) {
                        newTestIds.push(8);
                    }
                }
                if(element.cbc.plt < 150){ 
                    if (newTestIds.includes(9) === false) {
                        newTestIds.push(9);
                    }
                }
            });
    
            console.log(newTestIds);
    
            let filteredConditions = this.state.conditions.filter((element) => {
                return newTestIds.includes(element.id);
            })
            this.setState({
                conditions:filteredConditions
            });
            console.log(filteredConditions);
            
        }

        linkCondition = async (conditionId) => {
            let linkURL = `https://localhost:44394/api/ConditionList/create/`;
            try {
                await axios.post(linkURL,{
                    UserId: this.props.user.id,
                    ConditionId: conditionId
                });
            } catch (e) {
                console.log("Error in ConditionList POST", e);
            }
            this.getConditionsUser();
        }

        getConditionsUser = async () => {
            let conditionsURL = `https://localhost:44394/api/ConditionList/all/${this.props.user.id}`
            try {
                let response = await axios.get(conditionsURL);
                this.setState({
                    linkedConditions: response.data
                })
            } catch (e) {
                console.log("Error in get conditionsList user", e);
            }
        }
    
    render() { 
        return ( 
            <div className="cond-panel-main">
                <div className="row">
                <ConditionsOC linkedConditions={this.state.linkedConditions} user={this.props.user}/>
                    <div className="col mt-3" >
                            
                    
                            <div align="center">
                            <div className=' cont-scroll row'>
                                {this.state.conditions.map((element,i) => {
                                    return (
                                        <div className='col shadow card-panel'>
                                            <Card className='mt-2 ' key={i} style={{ width: '18rem' }}>
                                                <Card.Img className='card-image'  src={element.image} />
                                                <Card.Body>
                                                    <Card.Title>{element.name}</Card.Title>
                                                        <div>
                                                            <hr/>
                                                            <div className='card-scroll'>
                                                                {element.description}
                                                            </div>
                                                        </div>
                                                    <Button onClick={() => this.linkCondition(element.id)} variant="dark">Link</Button>
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
}
 
export default ConditionViewer;


// const ConditionViewer = (props) => {
//     const user = useContext(UserContext);
//     const [bmpTests,setBMPTests] = useState(props.bmpTests);
//     const [cbcTests,setCBCTests] = useState(props.cbcTests);
//     const [conditions, setConditions] = useState(props.conditions);
//     const [testIds, setTestIds] = useState([]);

//     useEffect(() => {
//         filterConditions();
//     },[]);

//     const getBMPTests = async () => {
//         let BMPURL = `https://localhost:44394/api/BMPList/all/${user.id}`;
//         let response = await axios.get(BMPURL);
//         // setBMPTests(response.data);
//         // console.log(response.data);
//         return response.data;

//     }

//     const getCBCTests = async () => {
//         let CBCURL = `https://localhost:44394/api/CBCList/all/${user.id}`;
//         let response = await axios.get(CBCURL);
//         // setCBCTests(response.data);
//         // console.log(response.data);
//         return response.data
//     }

//     const getAllConditions = async () => {
//         let conditionsURL = `https://localhost:44394/api/Condition`;
//         let response = await axios.get(conditionsURL);
//         // setConditions(response.data);
//         // console.log(response.data); 
//         return response.data
//     }


    

//     const filterConditions = async () => {
//         // getAllConditions();
//         // getBMPTests();
//         // getCBCTests();
//         await Promise.all([getBMPTests(),getCBCTests(),getAllConditions()])
//             .then(([newBMPTests,newCBCTests,conditions]) => {
//                 setBMPTests(newBMPTests)
//                 setCBCTests(newCBCTests)
//                 setConditions(conditions)
//             })
   
//         console.log(bmpTests)
//         let newTestIds = [];

//         bmpTests.forEach((element) => {
//             if(element.bmp.sodium<135){
//                 if (newTestIds.includes(2) === false) {
//                     newTestIds.push(2);
//                 }
//             } else if(element.bmp.potassium<3.5){
//                 if (newTestIds.includes(1) === false) {
//                     newTestIds.push(1);
//                 }
//             } else if(element.bmp.glucose>100){
//                 if (newTestIds.includes(3) === false) {
//                     newTestIds.push(3);
//                 }
//             } else if(element.bmp.creatinine>1.2){
//                 if (newTestIds.includes(4) === false) {
//                     newTestIds.push(4);
//                 }
//             } else if(element.bmp.bicarbonate>29){
//                 if (newTestIds.includes(5) === false) {
//                     newTestIds.push(5);
//                 }
//             }
//         });

//         cbcTests.forEach((element) => {
//             console.log(element)
//             if(element.cbc.lym > 44 || element.cbc.wbc > 10.16 || element.cbc.neu > 70){
//                 if (newTestIds.includes(6) === false) {
//                     newTestIds.push(6);
//                 }
//             } else if(element.cbc.mon > 11){
//                 if (newTestIds.includes(7) === false) {
//                     newTestIds.push(7);
//                 }
//             } else if(element.cbc.rbc < 4.3 || element.cbc.RDW > 15.8) {
//                 if (newTestIds.includes(8) === false) {
//                     newTestIds.push(8);
//                 }
//             } else if(element.cbc.plt < 150){ 
//                 if (newTestIds.includes(9) === false) {
//                     newTestIds.push(9);
//                 }
//             }
//         });

//         console.log(newTestIds);

//         let filteredConditions = conditions.filter((element) => {
//             return newTestIds.includes(element.id);
//         })
//         setConditions(filteredConditions);
//         console.log(filteredConditions);
        
//     }

//     return ( 
//         <div className="container">
//             <div className="row">
//                 <div className="col-3 cond-panel mt-3" >
//                         <div>
//                             <h3>Title Here</h3>
                            
//                         </div>  
//                 </div>
//                 <div className="col cond-panel-two mt-3" >
//                         <div align="center">
//                             <h3>Title Here</h3>
//                             <div className='cont-scroll row'>
//                                 {conditions.map((element,i) => {
//                                     return (
//                                         <div className='col '>
//                                             <Card className='mb-2' key={i} style={{ width: '14.7rem' }}>
//                                                 <Card.Img className='card-image'  src={element.image} />
//                                                 <Card.Body>
//                                                     <Card.Title>{element.name}</Card.Title>
//                                                     <div>
//                                                         <hr/>
//                                                         <div className='card-scroll'>
//                                                             {element.description}
//                                                         </div>
//                                                     </div>
//                                                     <Button variant="primary">Go somewhere</Button>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     )}
//                                 )}
//                             </div>
//                         </div>
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default ConditionViewer;