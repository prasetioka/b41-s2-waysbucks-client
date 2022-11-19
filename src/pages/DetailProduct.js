import React from 'react'
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
import Menu1 from '../img/menu-1.png'
import Toping1 from '../img/toppings/bubble-tea-gelatin.png'
import Toping2 from '../img/toppings/manggo.png'
import Toping3 from '../img/toppings/green-coconut.png'
import Toping4 from '../img/toppings/boba-manggo.png'
import Toping5 from '../img/toppings/bill-berry-boba.png'
import Toping6 from '../img/toppings/kiwi-popping-pearl.png'
import Toping7 from '../img/toppings/matcha-cantaloupe.png'
import Toping8 from '../img/toppings/strawberry-popping.png'
import Menus from '../components/Menu'

function DetailProduct() {
    return(
        <>
            <Container className="mt-5 mb-5">
                <Row className="d-flex justify-content-center">
                    <Col sm={4}>
                    
                        <div className="d-flex justify-content-end mt-3 me-3">
                            <div className="d-flex justify-content-center">
                            <Image src={Menu1} style={{width:'330px'}}/>
                            </div>
                        </div>
                   
                    </Col>
                    <Col sm={5} className="pe-3 ">
                        <p className="fs-1 fw-bold mb-0" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</p>
                        <p className="fs-5 mt-0 mb-5" style={{color:'#bd0707'}}>Rp.27.000</p>
                        <p className="fs-5 fw-bold mb-4" style={{color:'#bd0707'}}>Toping</p>

                        <Row className="mb-5">
                            <Col className="d-flex flex-column justify-content-center" >
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping1} alt="" style={{width:'60px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Bubble Tea Gelatin</p>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center" >
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping2} alt="" style={{width:'60px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Manggo</p>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center">
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping3} alt="" style={{width:'60px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Green Coconut</p>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center" >
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping4} alt="" style={{width:'60px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Boba Manggo</p>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col className="d-flex flex-column justify-content-center" >
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping5} alt="" style={{width:'60px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Bill Berry Boba</p>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center" >
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping6} alt="" style={{width:'60px', marginBottom:'7px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Kiwi Popping Pearl</p>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center" >
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping7} alt="" style={{width:'60px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Matcha Cantaloupe</p>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center">
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping8} alt="" style={{width:'60px'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>Strawberry Popping</p>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Total</p>
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Rp.27.000</p>
                        </div>
                        <Button style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Cart</Button>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailProduct