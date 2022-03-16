import React, { // Importing React
    useState
} from 'react';
import {
    Modal,
    Container,
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import './contact.css';
import Message from '../message/Message.jsx'

function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <div >
               <div className='features-header'>
                  <h1 className="gradient__text center-title">Contact</h1>
                  <h4 className='gradient__text center-title'>Get the answers to life</h4>
               </div>
               < br/>
               <Form className='contact-form card-results'>
                  <Row>
                     <Col>
                     <Form.Group className="mb-3 form-control__plaintext">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                     </Form.Group>
                     </Col>
                     <Col>
                     <Form.Group className="mb-3 form-control__plaintext">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                     </Form.Group>
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                     <Form.Group className="mb-3 form-control__plaintext" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phone" placeholder="Phone number" />
                     </Form.Group>
                     </Col>
                     <Col>
                     <Form.Group className="mb-3 form-control__plaintext" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                     </Form.Group>
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                     <Form.Group className="mb-3 text-description form-control__plaintext">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Describe your Issue" />
                     </Form.Group>
                     </Col>
                  </Row>
                  < br/>
                  <div className='contact-form__submit-button'>
                     <Button className='button-contact' type="clear">
                     CLEAR
                     </Button>
                     <Button className='button-contact'  onClick={handleShow}>
                     SUBMIT
                     </Button>
                     <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body> 
                           < Message />
                        </Modal.Body>
                        <Modal.Footer>
                           <Button variant="secondary" onClick={handleClose}>
                           Close
                           </Button>
                        </Modal.Footer>
                     </Modal>
                  </div>
               </Form>
            </div>
     </Container>
    );
  }; 
  
export default Contact;