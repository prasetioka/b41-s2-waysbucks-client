import React, { useState, useRef } from 'react'
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import ProfileIcon from '../img/user 2.png'
import LogoutIcon from '../img/logout 1.png'

function DropdownUser() {
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
                            {/* Button profile start */}
                            <Button className="d-flex flex-column justify-content-center bg-white border-0">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-column justify-content-center">
                                        <Image src={ProfileIcon} style={{width:'50%'}}/>
                                    </div>
                                    <p className="d-flex flex-column justify-content-center m-0 fw-bold" style={{color:'#bd0707'}} >Profile</p>
                                </div>
                            </Button>
                            {/* Button profile end */}

                            <hr/>

                            {/* Button logout start */}
                            <Button className="d-flex flex-column justify-content-center bg-white border-0">
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
    )
}

export default DropdownUser