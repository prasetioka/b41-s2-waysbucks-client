import Logo from '../img/Header.png'
import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'

function NavBar() {
    const [loginShow, setLoginShow] = React.useState(false)
    const [registerShow, setRegisterShow] = React.useState(false)

    return(
        <>
            <Navbar bg="white" variant="white" className="mt-4">
                <Container>
                    {/* Logo navbar start */}
                    <Link to="/">
                        <Image src={Logo} alt=""/>
                    </Link>
                    {/* Logo navbar end */}

                    <Nav className="d-flex justify-content-end gap-3">

                        {/* Tombol login start */}
                        <Button style={{width:'100px', color:'#bd0707', fontWeight:'bold', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} onClick={() => setLoginShow(true)}>Login</Button>
                        <Login show={loginShow} onHide={() => setLoginShow(false)} setLoginShow={setLoginShow} setRegisterShow={setRegisterShow}/>
                        {/* Tombol login end */}

                        {/* Tombol register start */}
                        <Button style={{width:'100px', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}} onClick={() => setRegisterShow(true)}>Register</Button>
                        <Register show={registerShow} onHide={() => setRegisterShow(false)} setLoginShow={setLoginShow} setRegisterShow={setRegisterShow}/>
                        {/* Tombol register end */}

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar