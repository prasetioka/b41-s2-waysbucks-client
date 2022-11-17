import React from "react"
import { Form, Row, Col, Image, Container, Button, Stack} from 'react-bootstrap'
import Menu1 from '../img/detail-product/coffee-2.png'
import AttachIcon from '../img/attach-icon.png'


function AddProductPage() {
    return(
            <Container className="mt-5 mb-5">
                <Row>
                    <Col className="d-flex flex-column justify-content-center">
                        <Form>
                            <Form.Label className="fs-3 mb-4 fw-bold" style={{color:'#bd0707'}}>Product</Form.Label>
                            <Form.Control type="text" placeholder="Name Product" className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />
                            <Form.Control type="number" placeholder="Price" className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                            <Form.Label className="px-2 py-1 mb-4 text-secondary fw-normal rounded-3" style={{width:'100%', border:'solid', borderWidth:'3px', borderColor:'#bd0707', backgroundColor:'rgb(224,200,200,0.25)', cursor:'pointer'}}>
                                <Stack direction="horizontal">
                                    <p className="d-flex flex-column justify-content-center m-0">Photo Product</p>
                                        <Image src={AttachIcon} className="ms-auto"/>
                                </Stack>
                                <Form.Control type="file" style={{width:'100%', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} hidden/>
                            </Form.Label>
                        
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" type="submit" style={{width:'80%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Product</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                        <div className="d-flex flex-row justify-content-center">
                            <Image src={Menu1} style={{width:'70%'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>  
    )
}

export default AddProductPage