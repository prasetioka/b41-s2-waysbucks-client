import React from 'react'
import FotoProfile from '../img/profile-page/Rectangle 12.png'
import { Container, Card, Row, Col } from 'react-bootstrap'
import Transaction from '../components/Transaction'
// import Navbar from '../components/Navbar'

function ProfilePage() {
    return(
        <>
        {/* <Navbar /> */}
        <Container>
            <Row>
                <Col sm={5} className='d-flex flex-column p-3' style={{border:'0'}}>  
                    <Card.Title className="fs-3 fw-bold mb-4" style={{color:'#bd0707'}}>My Profile</Card.Title>
                    <div className="d-flex flex-row gap-3">
                        <Card.Img src={FotoProfile} className="rounded-3" style={{width:'150px',height:'auto'}}/>
                            <Card.Body>
                                <Card.Title style={{color:'#613D2B'}}>Full Name</Card.Title>
                                <Card.Text className="mb-4">Babang Tamvan</Card.Text>
                                <Card.Title style={{color:'#613D2B'}}>Email</Card.Title>
                                <Card.Text>babangtamvan@gmail.com</Card.Text>
                            </Card.Body>
                    </div>
                </Col>
                <Col className="d-flex flex-column p-3 w-75 gap-3">
                    <p className="fs-3 fw-bold mb-0" style={{color:'#613D2B'}}>My Transaction</p>
                    <Transaction />
                </Col>
            </Row>
        </Container>
        </>
        
    )
}

export default ProfilePage