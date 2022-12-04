import React from "react"
import { Container, Row, Table, Button, Image,  Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { API } from '../config/api'

function ToppingList() {

    const navigate = useNavigate()

    const formatIDR = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    })

    let { data: toppings, refetch } = useQuery("toppingsCache", async () => {
        const response = await API.get('/toppings')
        console.log("Get data topping success!", response.data.data)
        return response.data.data
    })

    const handleUpdate = (id) => {
        navigate('/UpdateToppingPage/' + id);
    };

    const handleDelete = useMutation(async (id) => {
        try {
          await API.delete(`/topping/${id}`);
          refetch()
        } catch (error) {
          console.log(error);
        }
    });

    

    return(
        <>
        <Container className="mb-5 mt-5">
            <Row>
                <p className="fs-2 mb-4 fw-bold" style={{color:'#bd0707'}}>Topping List</p>
            </Row>
            <Row className="d-flex flex-row justify-content-center">
                <Table bordered hover style={{textAlign:'center', width:'90%', borderColor:'#828282'}}>
                    <thead style={{backgroundColor:'#E5E5E5'}}>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {toppings?.length !== 0 ? (
                    <tbody>
                        {toppings?.map((item, index) => (
                        <tr style={{verticalAlign:'middle'}}>
                            <td >{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{formatIDR.format(item.price)}</td>
                            <td>
                                <Image src={item.image} />
                            </td>
                            <td style={{color:'#061E99'}}>{item.qty}</td>
                            <td>
                                <Stack direction='horizontal' gap={2} className='d-flex justify-content-center'> 
                                    <Button variant='dark' onClick={() => handleUpdate(item.id)} className="w-50 py-2">Update</Button>
                                    <Button variant='danger' onClick={() => handleDelete.mutate(item.id)} className="w-50 py-2">Delete</Button>
                                </Stack>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    ) : (
                        <></>
                    )}
                </Table>
            </Row>
        </Container>
        </>
    )
}

export default ToppingList