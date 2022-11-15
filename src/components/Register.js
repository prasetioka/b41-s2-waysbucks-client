import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Register(props) {
    return (
        <Modal {...props} centered>
            <Container className="px-5 py-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label className="fs-1 mb-3 fw-bold" style={{color:'#bd0707'}}>Register</Form.Label>
                    <Form.Control className="mb-3 py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="email" placeholder="Email"  />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicName">
                    <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{backgroundColor:'#bd0707', borderColor: '#bd0707'}} className="py-2 fw-bold fs-5 mb-4 w-100">
                    Register
                    </Button>
                    <Form.Label className="fs-6 d-flex justify-content-center">Already have an account? Klik Here</Form.Label>
                </Form>
            </Container>
        </Modal>
      );
}

export default Register