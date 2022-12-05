import React, { useState } from 'react'
import { Button, Modal, Form, Container } from 'react-bootstrap';
// import { UserContext } from '../context/userContext';
import { useMutation } from 'react-query';
import { API } from '../config/api';

function Register({show, onHide, setLoginShow, setRegisterShow}) {
        // const user = []
        // const DataUser = localStorage.getItem("USER_DATA")
        // const UserData = JSON.parse(DataUser)

        // const [message, setMessage] = useState(null);
        const [form, setForm] = useState({
            fullname: "",
            email: "",
            password: "",
            role: "user"
        })

        const { fullname, email, password } = form;

        const handleChange = (e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });
          };

        const handleSubmit = useMutation(async (e) => {
            try {
              e.preventDefault();
          
              // Configuration Content-type
              const config = {
                headers: {
                  'Content-type': 'application/json',
                },
              };
          
              // Data body
              const body = JSON.stringify(form);
          
              // Insert data user to database
              const response = await API.post('/register', body, config);
          
              // Handling response here
              if (response.data.status === 'success') {
                // const alert = (
                //   <Alert variant="success" className="py-1">
                //     Success
                //   </Alert>
                // );
                // setMessage(alert);
                setForm({
                    fullname: "",
                    email: "",
                    password: "",
                });
                setLoginShow(true)
                setRegisterShow(false)
              } else {
                console.log(form)
                // const alert = (
                //   <Alert variant="danger" className="py-1">
                //     Failed
                //   </Alert>
                // );
                // setMessage(alert);
              }
            } catch (error) {
              // const alert = (
              //   <Alert variant="danger" className="py-1">
              //     Failed
              //   </Alert>
              // );
              // setMessage(alert);
              console.log(error);
            }
          });

        // const handleOnSubmit = (e) => {
        //     e.preventDefault()
        //     if (UserData == null) {
        //         user.push(state)
        //         localStorage.setItem("USER_DATA", JSON.stringify(user))
        //     } else {
        //         UserData.forEach((element) => {
        //             user.push(element)
        //         })
        //         user.push(state)
        //         localStorage.setItem("USER_DATA", JSON.stringify(user))
        //     }
        //     setLoginShow(true)
        //     setRegisterShow(false)
        // }
    
    return (
        <Modal show={show} onHide={onHide}  centered>
            <Container className="px-5 py-5">
                {/* {message && message} */}
                <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs-1 mb-3 fw-bold" style={{color:'#bd0707'}}>Register</Form.Label>
                        <Form.Control className="mb-3 py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Control className="py-3 fs-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} type="text" placeholder="Full Name" name="fullname" value={fullname} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{backgroundColor:'#bd0707', borderColor: '#bd0707'}} className="py-2 fw-bold fs-5 mb-4 w-100">
                    Register
                    </Button>
                    <Form.Label className="fs-5 d-flex justify-content-center">Don't have an account ? Klik <span className="ms-1 fw-bold" style={{color:'#bd0707', cursor:'pointer'}} onClick={() => {setLoginShow(true); setRegisterShow(false)}}>Here</span></Form.Label>
                </Form>
            </Container>
        </Modal>
      );
}

export default Register