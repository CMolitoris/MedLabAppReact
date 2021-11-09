import axios from 'axios';
import React, { Component } from 'react';
import { Offcanvas, Button, Card } from 'react-bootstrap';

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
              <Button variant="dark" onClick={this.handleShow}>
                View Linked Entries
              </Button>
        
              <Offcanvas show={this.state.show} onHide={this.handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>All Linked Conditions</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {this.props.linkedConditions.map((element,i) => {
                      return (
                        <Card className='mt-2 ' key={i} style={{ width: '18rem' }}>
                       
                        <Card.Body>
                            <Card.Title>{element.condition.name}</Card.Title>
                                <div>
                                    <hr/>
                                    <div className='card-scroll'>
                                        {element.condition.description}
                                    </div>
                                </div>
                            <Button onClick={() => this.linkCondition(element.condition.id)} variant="dark">Link</Button>
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