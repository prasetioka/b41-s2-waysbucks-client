import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login({show, onHide, setLoginShow, setRegisterShow, LoginUser}) {

    const [user, setUser] = useState({
        email: "",
        pasword: "",
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        LoginUser(user)
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Container className="px-5 py-5">
                <Form onSubmit={handleOnSubmit}>
                    {/* Form email start */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs-1 mb-3 fw-bold" style={{color:'#bd0707'}}>Login</Form.Label>
                        <Form.Control className="mb-3 py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="email" placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})} value={user.email}/>
                    </Form.Group>
                    {/* Form email end */}

                    {/* Form password start */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})} value={user.password}/>
                    </Form.Group>
                    {/* Form password end */}

                    {/* Tombol login start */}
                    <Button  type="submit" onClick={() => {setLoginShow(false)}} className="py-2 fw-bold fs-5 mb-4 w-100" style={{backgroundColor:'#bd0707', border:'none'}} >
                        Login
                    </Button>
                    {/* Tombol login end */}

                    <Form.Label className="fs-5 d-flex justify-content-center">Already have an account? Klik <span className="ms-1 fw-bold" style={{color:'#bd0707', cursor:'pointer'}} onClick={() => {setLoginShow(false); setRegisterShow(true)}}>Here</span></Form.Label>
                </Form>
            </Container>
        </Modal>
      );
}

export default Login