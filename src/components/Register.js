import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Register({show, onHide, setLoginShow, setRegisterShow}) {
    
        const [state, setState] = useState({
            fullname: "",
            email: "",
            password: "",
        })

        const handleOnSubmit = (e) => {
            e.preventDefault()
            console.log(state)
        }
    
    return (
        <Modal show={show} onHide={onHide}  centered>
            <Container className="px-5 py-5">
                <Form onSubmit={handleOnSubmit}>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs-1 mb-3 fw-bold" style={{color:'#bd0707'}}>Register</Form.Label>
                        <Form.Control className="mb-3 py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="email" placeholder="Email" value={state.email} onChange={(e) => setState({...state, email: e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="password" placeholder="Password" value={state.password} onChange={(e) => setState({...state, password: e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="text" placeholder="Full Name" value={state.fullname} onChange={(e) => setState({...state, fullname: e.target.value})} />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{backgroundColor:'#bd0707', borderColor: '#bd0707'}} className="py-2 fw-bold fs-5 mb-4 w-100">
                    Register
                    </Button>
                    <Form.Label className="fs-5 d-flex justify-content-center">Don't have an account ? Klik <span className="ms-1 fw-bold" onClick={() => {setLoginShow(true); setRegisterShow(false)}}>Here</span></Form.Label>
                </Form>
            </Container>
        </Modal>
      );
}

export default Register