import React, { useState } from "react"
import { Form, Row, Col, Image, Container, Button, Stack} from 'react-bootstrap'
import { useMutation } from 'react-query'
import { API } from '../config/api'
import { useNavigate } from 'react-router-dom'

import AttachIcon from '../img/attach-icon.png'
// import ToppingList from '../components/ToppingList'

function AddTopingPage() {

        const navigate = { useNavigate }
        const [preview, setPreview] = useState(null)
        const [form, setForm] = useState({
            title: "",
            price: "",
            image: "",
            qty: "",
        })

        const handleChange = (e) => {
            setForm({
                ...form,
                [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
            })

            if (e.target.type === "file") {
                let url = URL.createObjectURL(e.target.files[0])
                setPreview(url)
            }
        }

        const handleSubmit = useMutation(async (e) => {
            try {
                // e.preventDefault()

                const formData = new FormData()
                formData.set("title", form.title)
                formData.set("price", form.price)
                formData.set("image", form.image[0], form.image[0].name)
                formData.set("qty", form.qty)

                const response = await API.post("/topping", formData);
                console.log("data topping berhasil ditambahkan", response.data.data);

                navigate("/")

            } catch (error) {
                console.log(error);
            }
        }) 

    return(
        <>
        <Container className="mt-5 mb-5">
            <Row>
                <Col className="d-flex flex-column justify-content-center">
                    <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Label className="fs-2 mb-4 fw-bold" style={{color:'#bd0707'}}>Add Toping</Form.Label>

                        <Form.Control type="text" placeholder="Name Toping" name="title" onChange={handleChange} className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                        <Form.Control type="number" placeholder="Price" name="price" onChange={handleChange} className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                        <Form.Control type="number" placeholder="Qty" name="qty" onChange={handleChange} className="mb-4" style={{borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} />

                        {/* <Form.Label className="pe-2 mb-4 text-secondary fw-normal rounded-3" style={{width:'100%', border:'solid', borderWidth:'3px', borderColor:'#bd0707', backgroundColor:'rgb(224,200,200,0.25)', cursor:'pointer'}}>
                            <Stack direction="horizontal">
                                <Form.Control type="text" placeholder="Photo Product" value={state.photo} onChange={(e) => setState({...state, photo: e.target.value})} className="bg-transparent border-0" style={{width:'100%'}}/> 
                                <Image src={AttachIcon} />
                            </Stack>
                        </Form.Label> */}
                        
                        <Form.Label className="px-2 py-1 mb-4 text-secondary fw-normal rounded-3" style={{width:'100%', border:'solid', borderWidth:'3px', borderColor:'#bd0707', backgroundColor:'rgb(224,200,200,0.25)', cursor:'pointer'}}>
                            <Stack direction="horizontal">
                                <p className="d-flex flex-column justify-content-center m-0">Photo Product</p>
                                    <Image src={AttachIcon} className="ms-auto"/>
                            </Stack>
                            <Form.Control type="file" name="image" onChange={handleChange} style={{width:'100%', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} hidden/>
                        </Form.Label>

                        <div className="d-flex justify-content-center mb-5">
                            <Button variant="primary" type="submit" style={{width:'80%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Product</Button>
                        </div>
                    </Form>
                </Col>
                <Col>
                    {preview && (
                        <div className="d-flex flex-row justify-content-center">
                            <Image src={preview} style={{width:'70%'}}/>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
        <Container>
            <hr style={{borderTop:'3px solid #974A4A'}}/>  
        </Container>

        {/* <ToppingList /> */}
        </>
        
    )
}

export default AddTopingPage