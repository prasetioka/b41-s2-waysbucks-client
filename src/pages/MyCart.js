import React from "react"
import Coffee1 from "../img/menu-1.png"
import Bin1 from "../img/bin 1.png"
import AttachImg from "../img/invoices 1.png"
import { Button, Container, Image, Row, Col, Stack, Form } from "react-bootstrap"

function MyCart() {
    return(
        <Container className="mt-3">
            <Row>
                <Col>
                    <Stack direction='vertical'>
                        <p className="fs-3 fw-bold" style={{color:'#bd0707'}}>My Cart</p>
                        <p className="fs-5 mb-0" style={{color:'#bd0707'}}>Review Your Order</p>
                    </Stack>
                    <hr/>
                    <Stack direction='horizontal' className="mb-3">
                        <Image src={Coffee1} style={{width:"8%"}}/>
                        <div className="ms-3">
                            <p className="m-0 fw-bold" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</p>
                            <p className="m-0" style={{color:'#bd0707'}}>Toping: Bill Berry Boba, Bubble Tea Gelatin</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fw-bold" style={{color:'#bd0707'}}>Rp.33.000</p>
                            <div className="d-flex justify-content-end" >
                                <Image src={Bin1} style={{width:"20%"}}/>
                            </div>
                        </div>
                    </Stack>
                    <Stack direction='horizontal' className="mb-3">
                        <Image src={Coffee1} style={{width:"8%"}}/>
                        <div className="ms-3">
                            <p className="m-0 fw-bold" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</p>
                            <p className="m-0" style={{color:'#bd0707'}}>Toping: Bill Berry Boba, Bubble Tea Gelatin</p>
                        </div>
                        <div className="ms-auto">
                            <p className="m-0 fw-bold" style={{color:'#bd0707'}}>Rp.36.000</p>
                            <div className="d-flex justify-content-end">
                                <Image src={Bin1} style={{width:"20%"}}/>
                            </div>
                        </div>
                    </Stack>
                    <hr/>
                    <Row>
                        <Col>
                            <hr/>
                            <Stack direction='vertical'>
                                <Stack direction='horizontal'>
                                    <p>Subtotal</p>
                                    <p className='ms-auto'>69.000</p>
                                </Stack>
                                <Stack direction='horizontal'>
                                    <p>Qty</p>
                                    <p className='ms-auto'>2</p>
                                </Stack>
                                <hr/>
                                <Stack direction='horizontal'>
                                    <p>Total</p>
                                    <p className='ms-auto'>69.000</p>
                                </Stack>
                            </Stack>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <div className="d-flex flex-column justify-content-center">
                                <Button style={{backgroundColor:'rgb(224,200,200,0.25)', color:'#bd0707', borderColor:'#bd0707', height:'150px', borderWidth:'3px'}}>
                                    <div className="d-flex flex-column justify-content-center">
                                        <div> 
                                            <Image src={AttachImg} />
                                        </div>
                                        Atache of Transaction
                                    </div>
                                </Button>
                            </div>  
                        </Col>
                    </Row>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Form className="d-flex flex-column justify-content-center w-75">
                        <Form.Control type="text" placeholder="Name" className="mb-3" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>
                        <Form.Control type="email" placeholder="Email" className="mb-3" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>
                        <Form.Control type="number" placeholder="Phone" className="mb-3" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>
                        <Form.Control type="number" placeholder="Pos Code" className="mb-3" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>
                        <Form.Control as="textarea" rows={4} placeholder="Address" className="mb-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>
                        <Button variant="primary" type="submit" style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Pay</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default MyCart