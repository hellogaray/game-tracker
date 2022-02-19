import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './contact.css';
  
function Contact() {
    return (
      <Container>
          <div><h1 className='center-title'>CONTACT</h1></div>
          <div>
            <h4 className='center-title'>Questions or Issues</h4>
            <br />
            <Form>
                <Row>
                    <Col>
                    <Form.Group className="mb-3" class="form-control-plaintext">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" class="form-control-plaintext">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" class="form-control-plaintext" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="phone" placeholder="Enter phone number" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" class="form-control-plaintext" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3 text-description form-control-plaintext">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Describe your Issue" />
                        </Form.Group>
                    </Col>
                </Row>
                < br/>
                <div className='submit-button-center'>
                    <Button variant="primary" type="clear">
                        CLEAR
                    </Button>
                    <Button variant="primary" type="submit">
                        SUBMIT
                    </Button>
                </div>

            </Form>
        </div>
      </Container>
    );
  }; 
  
  export default Contact;