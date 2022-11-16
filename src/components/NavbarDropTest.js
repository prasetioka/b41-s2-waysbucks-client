import Logo from '../img/Header.png'
import React, { useState, useRef } from 'react';
import { Container, Nav, Navbar, Button, Overlay, Popover, Image} from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import AddTopingImg from '../img/add-toping.png'
import AddProductImg from '../img/add-product.png'
import LogoutIcon from '../img/logout 1.png'

function NavBarDropTest() {
    const [loginShow, setLoginShow] = React.useState(false)
    const [registerShow, setRegisterShow] = React.useState(false)

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    }

    return(
        <>
            <Navbar bg="white" variant="white" className="mt-4">
                <Container>
                    {/* Logo navbar start */}
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt=""/>
                    </Navbar.Brand>
                    {/* Logo navbar end */}

                    <Nav className="d-flex justify-content-end gap-3">

                        {/* Tombol login start */}
                        <Button style={{width:'100px', color:'#bd0707', fontWeight:'bold', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} onClick={() => setLoginShow(true)}>Login</Button>
                        <Login show={loginShow} onHide={() => setLoginShow(false)} />
                        {/* Tombol login end */}

                        {/* Tombol register start */}
                        <Button style={{width:'100px', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}} onClick={() => setRegisterShow(true)}>Register</Button>
                        <Register show={registerShow} onHide={() => setRegisterShow(false)} />
                        {/* Tombol register end */}

                        {/* Tombol dropdown start */}
                        <div ref={ref}>
                            <Button onClick={handleClick}>Dropdown Test</Button>
                            <Overlay show={show} target={target} placement="bottom-end" container={ref}>
                                <Popover id="popover-contained">
                                    <Popover.Body>
                                        {/* Tombol add product start */}
                                        <Button className="d-flex flex-column justify-content-center bg-white border-0 mb-3">
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Image src={AddProductImg} style={{width:'50%'}}/>
                                                </div>
                                                <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Add Product</p>
                                            </div>
                                        </Button>
                                        {/* Tombol add product end */}

                                        {/* Tombol add toping start */}
                                        <Button className="d-flex flex-column justify-content-center bg-white border-0">
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Image src={AddTopingImg} style={{width:'50%'}}/>
                                                </div>
                                                <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Add Toping</p>
                                            </div>
                                        </Button>
                                        {/* Tombol add toping end */}

                                        <hr/>

                                        {/* Tombol logout start */}
                                        <Button className="d-flex flex-column justify-content-center bg-white border-0">
                                            <div className="d-flex flex-row justify-content-center">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Image src={LogoutIcon} style={{width:'50%'}}/>
                                                </div>
                                                <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}}>Logout</p>
                                            </div>
                                        </Button>
                                        {/* Tombol logout end */}

                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarDropTest