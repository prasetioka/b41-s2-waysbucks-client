import React, { useState, useContext } from 'react'
import { UserContext } from '../context/userContext';
// import { useNavigate } from 'react-router-dom'

import { useMutation } from 'react-query'
import { API } from '../config/api'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login({show, onHide, setLoginShow, setRegisterShow}) {

    // const [user, setUser] = useState({
    //     email: "",
    //     pasword: "",
    // })

    // const handleOnSubmit = (e) => {
    //     // e.preventDefault()
    //     LoginUser(user)
    // }

    // let navigate = useNavigate();

    const [state, dispatch] = useContext(UserContext);

    // const [message, setMessage] = useState(null);

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const { email, password } = form;

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
    
          // Configuration
          const config = {
            headers: {
              'Content-type': 'application/json',
            },
          };
    
          // Data body
          const body = JSON.stringify(form);
    
          // Insert data for login process
          const response = await API.post('/login', body, config);
          
          // Checking process
          if (response?.status === 200) {
            // Send data to useContext
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: response.data.data,
            });
            // console.log("ini data response", response.data.data)
            // console.log("ini login", state)
            // Status check
            // if (response.data.data.role === 'admin') {
            //   navigate('/');
            // } else {
            //   navigate('/');
            // }
            // const alert = (
            //   <Alert variant="success" className="py-1">
            //     Login success
            //   </Alert>
            // );
            // setMessage(alert);
          }
        } catch (error) {
          // const alert = (
          //   <Alert variant="danger" className="py-1">
          //     Login failed
          //   </Alert>
          // );
          // setMessage(alert);
          console.log(error);
        }
    });

    return (
        <Modal show={show} onHide={onHide} centered>
            <Container className="px-5 py-5">
                {/* {message && message} */}
                <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                    {/* Form email start */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs-1 mb-3 fw-bold" style={{color:'#bd0707'}}>Login</Form.Label>
                        <Form.Control className="mb-3 py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="email" placeholder="Email" name="email" onChange={handleChange} value={email}/>
                    </Form.Group>
                    {/* Form email end */}

                    {/* Form password start */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="password" placeholder="Password" name="password" onChange={handleChange} value={password}/>
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