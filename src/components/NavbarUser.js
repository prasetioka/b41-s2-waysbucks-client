import React from 'react';
import { Container, Nav, Navbar, Image, Stack, Button } from 'react-bootstrap'
import Logo from '../img/Header.png'
import BasketIcon from '../img/shopping-basket.png'
import ProfileIcon from '../img/pp.png'

function NavBarUser() {

    return(
        <>
            <Navbar bg="white" variant="white" className="mt-4">
                <Container>
                    <Navbar.Brand href="#home"><Image src={Logo} alt=""/></Navbar.Brand>

                    <Nav className="d-flex flex-row justify-content-end">
                        <Stack direction='horizontal' gap={5} className="d-flex flex-row justify-content-end">
                            <Button className="p-0 m-0 bg-transparent border-0">
                                <Image src={BasketIcon} alt="" />
                            </Button>
                            <Button className="p-0 m-0 bg-transparent border-0" style={{width:'70px', height:'70px'}}>
                                <Image src={ProfileIcon} style={{width:'70px', height:'70px', borderRadius:'50%', border:'solid', borderWidth:'2px', borderColor:'#bd0707'}} />
                            </Button>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarUser