import React, { useContext, useState } from 'react'
import { Container, Card, Row, Col, Form, Stack, Image, Button } from 'react-bootstrap'
import { UserContext } from '../context/userContext'
import { useQuery, useMutation } from 'react-query'
import { API } from '../config/api'
import AttachIcon from '../img/attach-icon.png'

import Transaction from '../components/Transaction'

function ProfilePage() {

    const [state] = useContext(UserContext);

    let { data: profile, refetch } = useQuery("profileCache", async () => {
        const response = await API.get('/user/' + state.user.id)
        console.log("Get data user success!", response.data.data)
        return response.data.data
      })

    const [form, setForm] = useState({
        image: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
            e.target.type === "file" ? e.target.files : e.target.value,
        })
    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData()
            formData.set("image", form.image[0], form.image[0].name)

            const response = await API.patch("/user/" + state.user.id, formData);
            console.log("Foto berhasil diupdate", response.data.data);

            refetch()

        } catch (error) {
            console.log(error);
        }
    }) 

    return(
        <>
        <Container className="mt-5">
            <Row>
                <Col sm={5} className='d-flex flex-column p-3' style={{border:'0'}}>  
                    <Card.Title className="fs-3 fw-bold mb-4" style={{color:'#bd0707'}}>My Profile</Card.Title>
                    <div className="d-flex flex-row gap-3">
                        <Card.Img src={profile?.image} className="rounded-3" style={{width:'150px',height:'auto'}}/>
                            <Card.Body>
                                <Card.Title style={{color:'#613D2B'}}>Full Name</Card.Title>
                                <Card.Text className="mb-4">{profile?.fullname}</Card.Text>
                                <Card.Title style={{color:'#613D2B'}}>Email</Card.Title>
                                <Card.Text>{profile?.email}</Card.Text>
                            </Card.Body>

                            
                    </div>

                    <div className="mt-3">
                    <Form.Label className="px-2 py-1 mb-2 text-secondary fw-normal rounded-3" style={{width:'34%', border:'solid', borderWidth:'3px', borderColor:'#bd0707', backgroundColor:'rgb(224,200,200,0.25)', cursor:'pointer'}}>
                                <Stack direction="horizontal">
                                    <p className="d-flex flex-column justify-content-center m-0">Update Photo</p>
                                        <Image src={AttachIcon} className="ms-auto"/>
                                </Stack>
                                <Form.Control type="file" name="image" onChange={handleChange} style={{width:'100%', borderColor:'#bd0707', borderWidth:'3px', backgroundColor:'rgb(224,200,200,0.25)'}} hidden/>
                    </Form.Label>
                    </div>

                    <div>
                        <Button variant="primary" type="submit" onClick={(e) => handleSubmit.mutate(e)} style={{width:'34%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Update</Button>
                    </div>

                </Col>
                <Col className="d-flex flex-column p-3 w-75 gap-3">
                    <p className="fs-3 fw-bold mb-0" style={{color:'#613D2B'}}>My Transaction</p>
                    <Transaction />
                </Col>
            </Row>
        </Container>
        </>
        
    )
}

export default ProfilePage