import React, { useState } from "react"
import { Form, Row, Col, Image, Container, Button, Stack} from 'react-bootstrap'
import AttachIcon from '../img/attach-icon.png'
// import Navbar from '../components/Navbar'

function AddTopingPage() {
    const toping = []
        const DataToping = localStorage.getItem("TOPING_DATA")
        const TopingData = JSON.parse(DataToping)
        const [state, setState] = useState({
            topingid: 0,
            topingname: "",
            price: "",
            photo: ""
        })

        const handleOnSubmit = (e) => {
            // e.preventDefault()
            if (TopingData == null) {
                state.price = parseInt(state.price)
                toping.push(state)
                localStorage.setItem("TOPING_DATA", JSON.stringify(toping))
            } else {
                for (let i = 0; i < TopingData.length;i++) {
                    toping.push(TopingData[i])
                }
                state.topingid = TopingData.length
                state.price = parseInt(state.price)
                toping.push(state)
                localStorage.setItem("TOPING_DATA", JSON.stringify(toping))
            }
        }

    return(
        <>
        {/* <Navbar/> */}
        <Container className="mt-5 mb-5">
            <Row>
                <Col className="d-flex flex-column justify-content-center">
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Label className="fs-3 mb-4 fw-bold" style={{color:'#bd0707'}}>Toping</Form.Label>

                        <Form.Control type="text" placeholder="Name Toping" value={state.topingname} onChange={(e) => setState({...state, topingname: e.target.value})} className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                        <Form.Control type="number" placeholder="Price" value={state.price} onChange={(e) => setState({...state, price: e.target.value})} className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                        <Form.Label className="pe-2 mb-4 text-secondary fw-normal rounded-3" style={{width:'100%', border:'solid', borderWidth:'3px', borderColor:'#bd0707', backgroundColor:'rgb(224,200,200,0.25)', cursor:'pointer'}}>
                            <Stack direction="horizontal">
                                <Form.Control type="text" placeholder="Photo Product" value={state.photo} onChange={(e) => setState({...state, photo: e.target.value})} className="bg-transparent border-0" style={{width:'100%'}}/> 
                                <Image src={AttachIcon} />
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

export default AddTopingPage