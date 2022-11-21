import React from "react"
import { useState } from 'react'
import { Form, Row, Col, Image, Container, Button, Stack} from 'react-bootstrap'
import AttachIcon from '../img/attach-icon.png'
// import Navbar from '../components/Navbar'

function AddProductPage() {
        const product = []
        const DataProduct = localStorage.getItem("PRODUCT_DATA")
        const ProductData = JSON.parse(DataProduct)
        const [state, setState] = useState({
            productid: 0,
            productname: "",
            price: "",
            photo: ""
        })

        const handleOnSubmit = (e) => {
            // e.preventDefault()
            if (ProductData == null) {
                state.price = parseInt(state.price)
                product.push(state)
                localStorage.setItem("PRODUCT_DATA", JSON.stringify(product))
            } else {
                for (let i = 0; i < ProductData.length;i++) {
                    product.push(ProductData[i])
                }
                state.productid = ProductData.length
                
                state.price = parseInt(state.price)
                product.push(state)
                localStorage.setItem("PRODUCT_DATA", JSON.stringify(product))
            }
        }

    return(
            <>
            {/* <Navbar/> */}
            <Container className="mt-5 mb-5">
                <Row>
                    <Col className="d-flex flex-column justify-content-center">
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Label className="fs-3 mb-4 fw-bold" style={{color:'#bd0707'}}>Product</Form.Label>

                            <Form.Control type="text" placeholder="Name Product" value={state.productname} onChange={(e) => setState({...state, productname: e.target.value})} className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                            <Form.Control type="number" placeholder="Price" value={state.price} onChange={(e) => setState({...state, price: e.target.value})} className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                            <Form.Label className="pe-2 mb-4 text-secondary fw-normal rounded-3" style={{width:'100%', border:'solid', borderWidth:'3px', borderColor:'#bd0707', backgroundColor:'rgb(224,200,200,0.25)', cursor:'pointer'}}>
                                <Stack direction="horizontal">
                                    <Form.Control type="text" placeholder="Photo Product" value={state.photo} onChange={(e) => setState({...state, photo: e.target.value})} className="border-0 bg-transparent" style={{width:'100%'}} />
                                    <Image src={AttachIcon}/>
                                </Stack>
                            </Form.Label>

                            {/* <Form.Label className="px-2 py-1 mb-4 text-secondary fw-normal rounded-3" style={{width:'100%', border:'solid', borderWidth:'3px', borderColor:'#bd0707', backgroundColor:'rgb(224,200,200,0.25)', cursor:'pointer'}}>
                                <Stack direction="horizontal">
                                    <p className="d-flex flex-column justify-content-center m-0">Photo Product</p>
                                        <Image src={AttachIcon} className="ms-auto"/>
                                </Stack>
                                <Form.Control type="file" style={{width:'100%', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} hidden/>
                            </Form.Label> */}
                        
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" type="submit" style={{width:'80%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Product</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                        <div className="d-flex flex-row justify-content-center">
                            <Image src={state.photo} style={{width:'70%'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>  
            </>
            
    )
}

export default AddProductPage