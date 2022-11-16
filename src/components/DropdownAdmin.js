import React, { useState, useRef } from 'react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import AddTopingImg from '../img/add-toping.png'
import AddProductImg from '../img/add-product.png'
import LogoutIcon from '../img/logout 1.png'

function DropdownAdmin() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    }

    return(
        <div ref={ref}>
            <Button onClick={handleClick}>Dropdown Test</Button>
                <Overlay show={show} target={target} placement="bottom-end" container={ref}> 
                    <Popover id="popover-contained">
                        <Popover.Body>
                            {/* button add product start */}
                            <Button className="d-flex flex-column justify-content-center bg-white border-0 mb-3">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <Image src={AddProductImg} style={{width:'50%'}}/>
                                    </div>
                                    <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Add Product</p>
                                </div>
                            </Button>
                            {/* button add product end */}

                            {/* button add toping start */}
                            <Button className="d-flex flex-column justify-content-center bg-white border-0">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <Image src={AddTopingImg} style={{width:'50%'}}/>
                                    </div>
                                    <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Add Toping</p>
                                </div>
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
    )
}

export default DropdownAdmin