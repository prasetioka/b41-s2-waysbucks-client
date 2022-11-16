import React from 'react'
import FotoProfile from '../img/profile-page/Rectangle 12.png'
import Logo from '../img/Header.png'
import Barcode from '../img/profile-page/barcode.png'
import { Container, Card, Button } from 'react-bootstrap'
import Coffee1 from '../img/detail-product/coffee-1.png'

function ProfilePage() {
    return(
        <Container className='d-flex flex-row justify-content-between mb-5 px-0 '>
            <Container className='d-flex flex-column p-3' style={{border:'0', width:'60%'}}>
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
            </Container>
            <Container className="d-flex flex-column p-3 w-75 gap-3" >
                <p className="fs-3 fw-bold mb-0" style={{color:'#613D2B'}}>My Transaction</p>
                <Card.Body className="d-flex flex-row p-3 rounded-4" style={{backgroundColor:'#F6DADA', border:'0'}}>
                    <Container className="d-flex flex-column gap-3 ps-0" style={{width:'75%'}}>
                        <div className="d-flex flex-row gap-3">
                            <Card.Img src={Coffee1} className="rounded-3" style={{width:'100px'}}/>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title style={{color:'#bd0707', fontSize:'20px', fontWeight:'bold', marginBottom:'0'}}>Ice Coffee Palm Sugar</Card.Title>
                                <Card.Text style={{color:'#bd0707', fontSize:'15px', marginBottom:'0'}}>Saturday, 5 March 2020</Card.Text>
                                <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Toping: Bill Berry Boba, Bubble Tea Gelatin</Card.Text>
                                <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Price: Rp.33.000</Card.Text>
                            </Card.Body>
                        </div>
                        <div className="d-flex flex-row gap-3">
                            <Card.Img src={Coffee1} className="rounded-3" style={{width:'100px'}}/>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title style={{color:'#bd0707', fontSize:'20px', fontWeight:'bold', marginBottom:'0'}}>Ice Coffee Palm Sugar</Card.Title>
                                <Card.Text style={{color:'#bd0707', fontSize:'15px', marginBottom:'0'}}>Saturday, 5 March 2020</Card.Text>
                                <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Toping: Bill Berry Boba, Manggo</Card.Text>
                                <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Price: Rp.36.000</Card.Text>
                            </Card.Body>
                        </div>
                    </Container>
                    <Container className="d-flex flex-column w-25 p-0 gap-3">
                        <div className="d-flex justify-content-center">
                            <Card.Img src={Logo} style={{width:'80px'}} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Card.Img src={Barcode} style={{width:'100px'}} />
                        </div>
                        <Button style={{backgroundColor:'rgb(0, 209, 255,0.1)', border:'0', color:'#00D1FF'}} disabled>On The Way</Button>
                        <Card.Text style={{color:'#974A4A', fontWeight:'bold', fontSize:'15px', textAlign:'center'}}>Sub Total : 69.000</Card.Text>
                    </Container>
                </Card.Body>
            </Container>
        </Container>
    )
}

export default ProfilePage