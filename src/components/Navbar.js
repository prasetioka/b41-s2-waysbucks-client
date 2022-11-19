import Logo from '../img/Header.png'
import React from 'react';
import { Link,  useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import NavbarUser from './NavbarUser'
import NavbarAdmin from './NavbarAdmin'

function NavBar() {
    const [loginShow, setLoginShow] = React.useState(false)
    const [registerShow, setRegisterShow] = React.useState(false)

    const UserData = localStorage.getItem("USER_DATA")
    const DataUser = JSON.parse(UserData)
    const array = []

    const Navigate = useNavigate()
    const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))

    const LoginUser = (user) => {
        DataUser.forEach((element) => {
            if (user.email === element.email && user.password === element.password) {
                array.push(element); localStorage.setItem("DATA_LOGIN", JSON.stringify(array))
            } else {
                console.log("can't login")
            }
        })
    }

    const Logout = () => {
        isLogin.pop()
        localStorage.setItem("DATA_LOGIN", JSON.stringify(isLogin))
        Navigate("/")
    }

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
                        { isLogin.length > 0 ? (
                            <>
                                { isLogin[0].status === "admin" ? (
                                    <NavbarAdmin Logout={Logout} />
                                ) : (
                                    <NavbarUser Logout={Logout} />
                                )}
                            </>
                        ) : (
                            <>
                            {/* Tombol login start */}
                            <Button style={{width:'100px', color:'#bd0707', fontWeight:'bold', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} onClick={() => setLoginShow(true)}>Login</Button>
                            <Login show={loginShow} onHide={() => setLoginShow(false)} setLoginShow={setLoginShow} setRegisterShow={setRegisterShow} LoginUser={LoginUser}/>
                            {/* Tombol login end */}

                            {/* Tombol register start */}
                            <Button  style={{width:'100px', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}} onClick={() => setRegisterShow(true)}>Register</Button>
                            <Register show={registerShow} onHide={() => setRegisterShow(false)} setLoginShow={setLoginShow} setRegisterShow={setRegisterShow}/>
                            {/* Tombol register end */}
                            </>
                        ) }

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar