import React from 'react'
import FotoProfile from '../img/profile-page/Rectangle 12.png'
import { Container, Card } from 'react-bootstrap'
import Coffee1 from '../img/detail-product/coffee-1.png'

function ProfilePage() {
    return(
        <Container className='d-flex flex-row justify-content-between mb-5'>
            <Card className='d-flex flex-column justify-content-center' style={{border:'0', width:'60%'}}>
                <Card.Title className="fs-3 fw-bold mb-3" style={{color:'#bd0707'}}>My Profile</Card.Title>
                <div className="d-flex flex-row">
                    <Card.Img src={FotoProfile} style={{width:'200px',height:'auto'}}/>
                    <Card.Body>
                        <Card.Title>Full Name</Card.Title>
                        <Card.Text>Babang Tamvan</Card.Text>
                        <Card.Title>Email</Card.Title>
                        <Card.Text>babangtamvan@gmail.com</Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <Card className='d-flex flex-column p-3 w-100' style={{backgroundColor:'#F6DADA', border:'0'}}>
                <p className="fs-3 fw-bold mb-3" style={{color:'#613D2B'}}>My Transaction</p>
                <div className="d-flex flex-row">
                    <Card.Img src={Coffee1} style={{width:'20%'}}/>
                    <Card.Body className="d-flex flex-column">
                        <Card.Title style={{fontSize:'15px', fontWeight:'bold', marginBottom:'0'}}>Ice Coffee Palm Sugar</Card.Title>
                        <Card.Text style={{fontSize:'15px', marginBottom:'0'}}>Saturday, 5 March 2020</Card.Text>
                        <Card.Text style={{fontSize:'15px', marginBottom:'0'}}>Toping: Bill Berry Boba, Bubble Tea Gelatin</Card.Text>
                        <Card.Text style={{fontSize:'15px', marginBottom:'0'}}>Price: Rp.33.000</Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </Container>
           
    )
}

export default ProfilePage