import React, { useState, useRef } from 'react';
import { Container, Nav, Navbar, Image, Stack, Button, Overlay, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../img/Header.png'
import BasketIcon from '../img/shopping-basket.png'
import ProfileIcon from '../img/pp.png'
import AddTopingImg from '../img/add-toping.png'
import AddProductImg from '../img/add-product.png'
import LogoutIcon from '../img/logout 1.png'

function NavBarUser() {

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
                    <Link to="/" >
                        <Image src={Logo} alt=""/>
                    </Link>

                    <Nav className="d-flex flex-row justify-content-end">
                        <Stack direction='horizontal' gap={5} className="d-flex flex-row justify-content-end">
                            <Button className="p-0 m-0 bg-transparent border-0">
                            <Link to="MyCart" ><Image src={BasketIcon} alt="" /></Link>
                            </Button>
                            
                            <div ref={ref}>
                                <Button onClick={handleClick} className="p-0 m-0 bg-transparent border-0" style={{width:'70px', height:'70px'}}>
                                    <Image src={ProfileIcon} style={{width:'70px', height:'70px', borderRadius:'50%', border:'solid', borderWidth:'2px', borderColor:'#bd0707'}} />
                                </Button>
                                
                                <Overlay show={show} target={target} placement="bottom-end" container={ref}>
                                    <Popover id="popover-contained">
                                        <Popover.Body>
                                            {/* button add product start */}
                                            <Button className="d-flex flex-column justify-content-center bg-white border-0 mb-3">
                                                <Link to="/AddProductPage" className="text-decoration-none">
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <Image src={AddProductImg} style={{width:'50%'}}/>
                                                    </div>
                                                    <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Add Product</p>
                                                </div>
                                                </Link>
                                            </Button>
                                            {/* button add product end */}

                                            {/* button add toping start */}
                                            <Button className="d-flex flex-column justify-content-center bg-white border-0">
                                                <Link to="/AddTopingPage" className="text-decoration-none">
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <Image src={AddTopingImg} style={{width:'50%'}}/>
                                                    </div>
                                                    <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}}>Add Toping</p>
                                                </div>
                                                </Link>
                                            </Button>
                                            {/* button add toping end */}

                                            <hr/>

                                            {/* button logout start */}
                                            <Button className="d-flex flex-column justify-content-center bg-white border-0">
                                                <div className="d-flex flex-row justify-content-center">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <Image src={LogoutIcon} style={{width:'50%'}}/>
                                                    </div>
                                                    <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}}>Logout</p>
                                                </div>
                                            </Button>
                                            {/* button logout end */}
                                        </Popover.Body>
                                    </Popover>
                                </Overlay>
                            </div>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarUser