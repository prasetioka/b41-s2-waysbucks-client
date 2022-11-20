import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { Nav, Image, Stack, Button, Overlay, Popover } from 'react-bootstrap'
import BasketIcon from '../img/shopping-basket.png'
import ProfileIcon from '../img/pp.png'
import IconProfile from '../img/user 2.png'
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
                    <Button onClick={() => {Navigate('/MyCart')}} className="p-0 m-0 bg-transparent border-0">
                        <Image src={BasketIcon} alt="" />
                    </Button> 
                    
                <div ref={ref}>
                    <Button onClick={handleClick} className="p-0 m-0 bg-transparent border-0" style={{width:'70px', height:'70px'}}>
                        <Image src={ProfileIcon} style={{width:'70px', height:'70px', borderRadius:'50%', border:'solid', borderWidth:'2px', borderColor:'#bd0707'}} />
                    </Button>
                                
                    <Overlay show={show} target={target} placement="bottom-end" container={ref}>
                    <Popover id="popover-contained">
                        <Popover.Body>
                            {/* Button profile start */}
                            <Button onClick={() => {Navigate('/ProfilePage')}}  className="d-flex flex-column justify-content-center bg-white border-0">
                                    <div className="d-flex flex-row justify-content-center">         
                                        <div className="d-flex flex-column justify-content-center">
                                            <Image src={IconProfile} style={{width:'50%'}}/>
                                        </div>
                                        <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Profile</p>             
                                    </div>
                            </Button>
                            {/* Button profile end */}
                        </Popover.Body>
                        <hr className="m-0 p-0"/>
                        <Popover.Body>
                            {/* Button logout start */}
                            <Button onClick={Logout} className="d-flex flex-column justify-content-center bg-white border-0 ">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <Image src={LogoutIcon} style={{width:'50%'}}/>
                                    </div>
                                    <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}}>Logout</p>
                                </div>
                            </Button>
                            {/* Button logout end */}
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