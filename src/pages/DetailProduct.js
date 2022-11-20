import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
// import Navbar from '../components/Navbar'

function DetailProduct() {
    const { productid } = useParams()

    const Products = JSON.parse(localStorage.getItem("PRODUCT_DATA"))

    const Topings = JSON.parse(localStorage.getItem("TOPING_DATA"))

    return(
        <>
            {/* <Navbar/> */}
            <Container className="mt-5 mb-5">
                <Row className="d-flex justify-content-center">
                
                    <Col sm={4}>
                        <div className="d-flex justify-content-end mt-3 me-3">
                            <div className="d-flex justify-content-center">
                            <Image src={Products[productid].photo} style={{width:'330px'}}/>
                            </div>
                        </div>
                    </Col>
              
                    <Col sm={5} className="pe-3 ">
                        <p className="fs-1 fw-bold mb-0" style={{color:'#bd0707'}}>{Products[productid].productname}</p>
                        <p className="fs-5 mt-0 mb-5" style={{color:'#bd0707'}}>Rp.{Products[productid].price}</p>

                        <p className="fs-5 fw-bold mb-4" style={{color:'#bd0707'}}>Toping</p>
                        
                    
                        <Row md={4} className="mb-5">
                            {Topings.map((toping) => {
                                return(
                                <Col className="d-flex flex-column justify-content-center mb-3" >
                                    <div className="d-flex justify-content-center">
                                        <Image src={toping.photo} alt="" style={{width:'60px', cursor:'pointer'}} />
                                    </div>
                                    <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>{toping.topingname}</p>
                                </Col>
                                )})}
                        </Row>
                    
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Total</p>
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Rp.{Products[productid].price}</p>
                        </div>
                        <Button style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Cart</Button>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailProduct