import React from "react"
import { Card, Container, Button} from "react-bootstrap"
import Coffee1 from '../img/detail-product/coffee-1.png'
import Logo from '../img/Header.png'
import Barcode from '../img/profile-page/barcode.png'

function Transaction() {
    return(
        <Container className="d-flex flex-row p-3 rounded-4" style={{backgroundColor:'#F6DADA', border:'0'}}>
            <Card.Body className="d-flex flex-column gap-3 ps-0" style={{width:'75%'}}>
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
            </Card.Body>

            <Card.Body className="d-flex flex-column w-25 p-0 gap-3">
                <div className="d-flex justify-content-center">
                    <Card.Img src={Logo} style={{width:'80px'}} />
                </div>
                <div className="d-flex justify-content-center">
                    <Card.Img src={Barcode} style={{width:'100px'}} />
                </div>
                <Button style={{backgroundColor:'rgb(0, 209, 255,0.1)', border:'0', color:'#00D1FF'}} disabled>On The Way</Button>
                <Card.Text style={{color:'#974A4A', fontWeight:'bold', fontSize:'15px', textAlign:'center'}}>Sub Total : 69.000</Card.Text>
            </Card.Body>
        </Container>
    )
}

export default Transaction