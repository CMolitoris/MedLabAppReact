import axios from 'axios';
import React, { Component } from 'react';
import { Offcanvas, Button, Card } from 'react-bootstrap';
import './FlaggedOC.css';
import moment from 'moment';

class FlaggedOC extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
            linkedConditions: []
         }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() { 
        moment.locale('en');

        return (
            <>
                <Button id='button-color' variant="dark" onClick={this.handleShow}>
                    View Flagged Results
                </Button>
            
                <Offcanvas placement={'end'}  id="pane" show={this.state.show} onHide={this.handleClose}>
                    <div   id='header-canvas'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title >Flagged Results</Offcanvas.Title>
                        </Offcanvas.Header>
                    </div>
               
                    <Offcanvas.Body align='center'>
                        {this.props.flaggedValues.map((element,i) => {
                            return (
                                <Card className='mt-2 card shadow' key={i} style={{ width: '18rem' }}>
                            
                                <Card.Body>
                                    <Card.Title>
                                        {element.type}<br/>
                                        
                                    </Card.Title>
                                    <div>
                                        <hr/>
                                        <div >
                                            <span className='flagged-text'>{element.analyte}: {element.value} ({element.difference.toFixed(2)}{element.high===true? <i class="bi bi-arrow-up-short"></i>:<i class="bi bi-arrow-down-short"></i>})</span><br/>       
                                            <span>{moment(element.dateTime).format('LLL')}</span>
                                        </div>
                                    </div>
                                    <Button className='w-100 mt-3' onClick={() => this.linkCondition(element.condition.id)} id="button-color">{element.analyte} <i class="bi bi-info-square"></i></Button>
                                </Card.Body>
                            </Card>
                            )
                        })}
                    </Offcanvas.Body>
              </Offcanvas>
            </>
          );
    }
}
 
export default FlaggedOC;

// const ConditionsOC = () => {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="dark" onClick={handleShow}>
//         View Linked Entries
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
 
// export default ConditionsOC;