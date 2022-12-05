import React, { useState, useContext, useEffect } from "react"
import { Button, Container, Image, Row, Col, Stack, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { useQuery, useMutation } from "react-query"
import { API } from "../config/api"

import Bin1 from "../img/bin 1.png"
import AttachImg from "../img/invoices 1.png"

function MyCart() {
    
    const navigate = useNavigate()
    const [state] = useContext(UserContext)

    const { data: order, refetch } = useQuery("ordersCache", async () => {
        if (state.isLogin === true) {
        const response = await API.get("/orders-id")
        return response.data.data
        }
    })

    const formatIDR = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    })

    let handleDelete = async (id) => {
        await API.delete(`/order/` + id)
        refetch()
    }

    let Totals = 0
    let Qty = 0

    order?.map((e) => {
        Totals += e.total
        Qty += e.qty
    })

    const { data: user } = useQuery("userCache", async () => {
        if (state.isLogin === true) {
        const response = await API.get("/user/" + state.user.id)
        return response.data.data
        }
    })
    
    const [form, setForm] = useState({
        fullname: "",
        phone: "",
        address: "",
    })

    const handleSubmit = useMutation(async (e) => {
        const config = {
        headers: {
            "Content-type": "application/json",
        },
        }

        if (form.fullname != "") {
        user.fullname = form.fullname
        }
        if (form.phone != "") {
        user.phone = form.phone
        }
        if (form.address != "") {
        user.address = form.address
        }
        const data = {
        ID: order[0].transaction_id,
        Name: user.fullname,
        Address: user.address,
        Phone: user.phone,
        UserID: user.id,
        Total: Totals,
        Status: "pending",
        }
        refetch()
        const response = await API.patch("/transaction", data, config)
        console.log("ini data token", response)
        navigate("/ProfilePage")
    })

    return(
        <>
        <Container className="mt-3">
            <Row>
                <Col>
                    <Stack direction='vertical'>
                        <p className="fs-3 fw-bold" style={{color:'#bd0707'}}>My Cart</p>
                        <p className="fs-5 mb-0" style={{color:'#bd0707'}}>Review Your Order</p>
                    </Stack>
                    <hr style={{borderTop:'1px solid #974A4A'}}/>
                    {state.isLogin === true ? (
                        <>
                        {order?.map((item) => {
                        return (
                            <Stack direction='horizontal' className="mb-3">
                                <Image src={item.product.image} style={{width:"8%"}}/>
                                    <div className="ms-3">
                                        <p className="m-0 fw-bold" style={{color:'#bd0707'}}>{item.product.title}</p>
                                        <p className="m-0" style={{color:'#bd0707'}}>Topping:{" "}
                                        {item.topping.map((topping, index) => {
                                        return <span key={index}>{topping.title},</span>
                                        })}
                                        </p>
                                    </div>
                                    
                                <div className="ms-auto">
                                    <p className="m-0 fw-bold" style={{color:'#bd0707'}}>{formatIDR.format(item.total)}</p>
                                    <div style={{ cursor: "pointer" }} className="d-flex justify-content-end" >
                                        <Image onClick={() => {handleDelete(item.id)}} src={Bin1} style={{width:"20%"}}/>
                                    </div>
                                </div>
                            </Stack>   
                            )
                        })}
                        </>
                    ) : (
                        <></>
                    )}
                    
                    <hr style={{borderTop:'1px solid #974A4A'}}/>
                    <Row>
                        <Col>
                            <hr style={{borderTop:'1px solid #974A4A'}}/>
                            <Stack direction='vertical'>
                                <Stack direction='horizontal'>
                                    <p>Subtotal</p>
                                    <p className='ms-auto'>{Totals}</p>
                                </Stack>
                                <Stack direction='horizontal'>
                                    <p>Qty</p>
                                    <p className='ms-auto'>{Qty}</p>
                                </Stack>
                                <hr style={{borderTop:'1px solid #974A4A'}}/>
                                <Stack direction='horizontal'>
                                    <p>Total</p>
                                    <p className='ms-auto'>{Totals}</p>
                                </Stack>
                            </Stack>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <Form className="d-flex flex-column justify-content-center">
                                <Form.Label className="btn d-flex flex-column justify-content-center" style={{backgroundColor:'rgb(224,200,200,0.25)', color:'#bd0707', borderColor:'#bd0707', height:'150px', borderWidth:'3px'}}>
                                    <div className="d-flex flex-column justify-content-center">
                                        <div> 
                                            <Image src={AttachImg} />
                                        </div>
                                        Atache of Transaction
                                    </div>
                                    <Form.Control type="file" style={{width:'100%', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} hidden/>
                                </Form.Label>
                            </Form>  
                        </Col>
                    </Row>
                </Col>
                <Col className="d-flex justify-content-center mt-5">
                    <Form className="d-flex flex-column justify-content-center w-75">
                        
                        <Form.Control type="text" placeholder="Name" name="fullname" onChange={(e) => setForm({ ...form, fullname: e.target.value })} className="mb-3" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>

                        <Form.Control type="number" placeholder="Phone" name="phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mb-3" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>

                        <Form.Control as="textarea" rows={4} placeholder="Address" name="address" onChange={(e) => setForm({ ...form, address: e.target.value })} className="mb-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>
                   
                        <Button onClick={(e) => handleSubmit.mutate(e)}
                        variant="primary" type="submit" style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Pay</Button>

                    </Form>
                </Col>
            </Row>
        </Container>
        </>
        
    )
}

export default MyCart