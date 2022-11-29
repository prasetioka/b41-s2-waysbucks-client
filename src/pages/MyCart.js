import React, { useState } from "react"
import Bin1 from "../img/bin 1.png"
import AttachImg from "../img/invoices 1.png"
import { Button, Container, Image, Row, Col, Stack, Form } from "react-bootstrap"
import PopOrder from "../components/PopOrder"


function MyCart() {

    const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))
    const transaction = JSON.parse(
      localStorage.getItem(`TRANSACTION_${isLogin[0].email}`)
    )
    const Products = JSON.parse(localStorage.getItem("PRODUCT_DATA"))
  
    const formatIDR = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })
  
    const handleDelete = (idCart) => {
      const filterIdCart = transaction.filter((e) => e !== idCart)
      console.log(filterIdCart)
    }
  
    const [showPop, setShowPop] = useState(false)

    return(
        <>
        {/* <Navbar /> */}
        <Container className="mt-3">
            <Row>
                <Col>
                    <Stack direction='vertical'>
                        <p className="fs-3 fw-bold" style={{color:'#bd0707'}}>My Cart</p>
                        <p className="fs-5 mb-0" style={{color:'#bd0707'}}>Review Your Order</p>
                    </Stack>
                    <hr style={{borderTop:'1px solid #974A4A'}}/>
                    {transaction.map((e) => {
                        return (
                        <>
                        {isLogin[0].email === e.email ? (
                            <>
                            <Stack direction='horizontal' className="mb-3">
                                {Products.map((product) => {
                                return (
                                <>
                                    {product.productid === e.idProduct ? (
                                        <>
                                        <Image src={product.photo} style={{width:"8%"}}/>
                                        <div className="ms-3">
                                            <p className="m-0 fw-bold" style={{color:'#bd0707'}}>{product.productname}</p>
                                            <p className="m-0" style={{color:'#bd0707'}}>Toping: {e.topingCheck.map((e) => {return <> {e},</>})}</p>
                                        </div>
                                        </>  
                                        ) : (
                                        <>
                                        </>
                                    )}
                                </>
                                )
                                })}
                                <div className="ms-auto">
                                    <p className="m-0 fw-bold" style={{color:'#bd0707'}}>{formatIDR.format(e.totalPrice)}</p>
                                    <div onClick={handleDelete(e.idCart)} style={{ cursor: "pointer" }} className="d-flex justify-content-end" >
                                        <Image src={Bin1} style={{width:"20%"}}/>
                                    </div>
                                </div>
                            </Stack>   
                            </>
                            ) : (
                            <>
                            </>
                            )}
                        </>
                        )
                    })}
                    
                    <hr style={{borderTop:'1px solid #974A4A'}}/>
                    <Row>
                        <Col>
                            <hr style={{borderTop:'1px solid #974A4A'}}/>
                            <Stack direction='vertical'>
                                <Stack direction='horizontal'>
                                    <p>Subtotal</p>
                                    <p className='ms-auto'>{formatIDR.format(transaction.map((e) => e.totalPrice).reduce((a, b) => a + b))}</p>
                                </Stack>
                                <Stack direction='horizontal'>
                                    <p>Qty</p>
                                    <p className='ms-auto'>{transaction.length}</p>
                                </Stack>
                                <hr style={{borderTop:'1px solid #974A4A'}}/>
                                <Stack direction='horizontal'>
                                    <p>Total</p>
                                    <p className='ms-auto'>{formatIDR.format(transaction.map((e) => e.totalPrice).reduce((a, b) => a + b))}</p>
                                </Stack>
                            </Stack>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <div className="d-flex flex-column justify-content-center">
                                <Form.Label className="btn d-flex flex-column justify-content-center" style={{backgroundColor:'rgb(224,200,200,0.25)', color:'#bd0707', borderColor:'#bd0707', height:'150px', borderWidth:'3px'}}>
                                    <div className="d-flex flex-column justify-content-center">
                                        <div> 
                                            <Image src={AttachImg} />
                                        </div>
                                        Atache of Transaction
                                    </div>
                                    <Form.Control type="file" style={{width:'100%', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} hidden/>
                                </Form.Label>
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

                        <Button onClick={() => setShowPop(true)} variant="primary" type="submit" style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Pay</Button>

                        <PopOrder show={showPop} hide={() => {setShowPop(false)}}/>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
        
    )
}

export default MyCart