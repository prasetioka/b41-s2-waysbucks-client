import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login(props) {
    return (
        <Modal {...props} centered>
            <Container className="px-5 py-5">
                <Form>
                    {/* Form email start */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs-1 mb-3 fw-bold" style={{color:'#bd0707'}}>Login</Form.Label>
                        <Form.Control className="mb-3 py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="email" placeholder="Email"  />
                    </Form.Group>
                    {/* Form email end */}

                    {/* Form password start */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="password" placeholder="Password" />
                    </Form.Group>
                    {/* Form password end */}

                    {/* Tombol login start */}
                    <Button  type="submit" className="py-2 fw-bold fs-5 mb-4 w-100" style={{backgroundColor:'#bd0707', border:'none'}} >
                        Login
                    </Button>
                    {/* Tombol login end */}

                    <Form.Label className="fs-5 d-flex justify-content-center">Already have an account? Klik Here</Form.Label>
                </Form>
            </Container>
        </Modal>
      );
}

export default Login