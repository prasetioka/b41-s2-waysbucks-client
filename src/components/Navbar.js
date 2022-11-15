import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/Header.png'
import Button from 'react-bootstrap/Button';
import React from 'react'
import Login from './Login'
import Register from './Register'

function NavBar() {
    const [loginShow, setLoginShow] = React.useState(false)
    const [registerShow, setRegisterShow] = React.useState(false)
    return(
        <>
            <Navbar bg="white" variant="white" className="mt-4">
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt=""/></Navbar.Brand>
                    <Nav className="d-flex justify-content-end gap-3">
                        <Button style={{color:'#bd0707', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} onClick={() => setLoginShow(true)}>Login</Button>
                        <Button style={{color:'white', borderColor:'#bd0707', backgroundColor:'#bd0707'}} onClick={() => setRegisterShow(true)}>Register</Button>
                        <Login
                            show={loginShow}
                            onHide={() => setLoginShow(false)}
                        />
                        <Register 
                            show={registerShow}
                            onHide={() => setRegisterShow(false)}
                        />
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar