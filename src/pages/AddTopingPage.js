import React from "react"
import { Form, Row, Col, Image, Container, Button} from 'react-bootstrap'
import Menu1 from '../img/toping.png'

function AddTopingPage() {
    return(
        <Container className="mt-5 mb-5">
            <Row>
                <Col className="d-flex flex-column justify-content-center">
                    <Form>
                        <Form.Label className="fs-3 mb-4 fw-bold" style={{color:'#bd0707'}}>Toping</Form.Label>
                        <Form.Control type="text" placeholder="Name Toping" className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />
                        <Form.Control type="number" placeholder="Price" className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />
                        <Form.Control type="file" className="mb-5" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}}/>
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

export default AddTopingPage