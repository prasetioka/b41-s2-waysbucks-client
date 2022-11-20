import React, { useState, useRef } from 'react';
import { Nav, Image, Stack, Button, Overlay, Popover } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ProfileAdmin from '../img/asus-chan.jpg'
import AddTopingImg from '../img/add-toping.png'
import AddProductImg from '../img/add-product.png'
import LogoutIcon from '../img/logout 1.png'

function NavBarUser({Logout}) {

    const [show, setShow] = useState(false);

    const [target, setTarget] = useState(null);
    
    const ref = useRef(null);

    const Navigate = useNavigate()

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    }

    return(
        <>
            <Nav className="d-flex flex-row justify-content-end">
                <Stack direction='horizontal' gap={5} className="d-flex flex-row justify-content-end">    
                    <div ref={ref}>
                        <Button onClick={handleClick} className="p-0 m-0 bg-transparent border-0" style={{width:'70px', height:'70px'}}>
                            <Image src={ProfileAdmin} style={{width:'70px', height:'70px', borderRadius:'50%', border:'solid', borderWidth:'2px', borderColor:'#bd0707'}} />
                        </Button>
                                
                        <Overlay show={show} target={target} placement="bottom-end" container={ref}>
                            <Popover id="popover-contained">
                                <Popover.Body>
                                    {/* button add product start */}
                                    <Button onClick={() => {Navigate('/AddProductPage')}} className="d-flex flex-column justify-content-center bg-white border-0 mb-3">
                                        <div className="d-flex flex-row justify-content-center">
                                            <div className="d-flex flex-column justify-content-center">
                                                <Image src={AddProductImg} style={{width:'50%'}}/>
                                            </div>
                                            <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Add Product</p>
                                        </div>
                                    </Button>
                                    {/* button add product end */}

                                    {/* button add toping start */}
                                    <Button onClick={() => {Navigate('/AddTopingPage')}} className="d-flex flex-column justify-content-center bg-white border-0">
                                        <div className="d-flex flex-row justify-content-center">
                                            <div className="d-flex flex-column justify-content-center">
                                                <Image src={AddTopingImg} style={{width:'50%'}}/>
                                            </div>
                                            <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}}>Add Toping</p>
                                        </div>
                                    </Button>
                                    {/* button add toping end */}
                                </Popover.Body>
                                <hr className="m-0 p-0"/>
                                <Popover.Body>
                                {/* button logout start */}
                                <Button onClick={Logout} className="d-flex flex-column justify-content-center bg-white border-0">
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
        </>
    )
}

export default NavBarUser