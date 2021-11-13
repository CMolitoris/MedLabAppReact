import axios from 'axios';
import React, { Component } from 'react';
import { Offcanvas, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ConditionsOC.css';

class ConditionsOC extends Component {
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
        return (
            <>
                <Button className='mb-1' id='button-color' variant="dark" onClick={this.handleShow}>
                    View Linked Conditions
                </Button>
            
                <Offcanvas  id="pane" show={this.state.show} onHide={this.handleClose}>
                    <div   id='header-canvas'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title >Linked Conditions</Offcanvas.Title>
                        </Offcanvas.Header>
                    </div>
               
                    <Offcanvas.Body align='center'>
                        {this.props.linkedConditions.map((element,i) => {
                            return (
                                <Card className='mt-2 card shadow' key={i} style={{ width: '18rem' }}>
                            
                                    <Card.Body>
                                        <Card.Title>{element.condition.name}</Card.Title>
                                            <div>
                                                <hr/>
                                                <div className='card-scroll'>
                                                    {element.condition.description}
                                                </div>
                                            </div>
                                        <Link to={{pathname: '/learn', state: {condition: element.condition}}} onClick={() => this.props.selectCondition(element.condition)}>
                                            <Button onClick={() => this.props.selectCondition(element.condition)} className='w-100' id="button-color">Learn More <i class="bi bi-info-square"></i></Button>
                                        </Link>
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
 
export default ConditionsOC;

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