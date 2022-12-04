import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { useQuery, useMutation } from 'react-query'
import { API } from '../config/api'
import { UserContext } from '../context/userContext'

function CardMenu() {

    const navigate = useNavigate()

    const [state] = useContext(UserContext)

    const formatIDR = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      })
    
    let { data: products, refetch } = useQuery('productsCache', async () => {
        const response = await API.get('/products');
        return response.data.data;
    });

    const handleUpdate = (id) => {
        navigate('/UpdateProductPage/' + id);
    };

    const handleDelete = useMutation(async (id) => {
        try {
          await API.delete(`/product/${id}`);
          refetch()
        } catch (error) {
          console.log(error);
        }
    });

    return(
        <>
        {/* Card Menu Start */}
            <Container className="mt-5">
                { state.user.role === "admin" ? (
                    <Card.Text className="fs-2 fw-bold" style={{color:'#bd0707'}}>Product List</Card.Text>
                ) : (
                    <Card.Text className="fs-2 fw-bold" style={{color:'#bd0707'}}>Let's Order</Card.Text>
                )}
            </Container>
            <Container className="mb-5">
            {products?.length !== 0 ? (
                <Row md={4}>
                    {products?.map((item, index) => (
                    <Col>
                        <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                            <Card.Img src={item.image} onClick={() => {navigate(`/DetailProduct/${item.id}`)}} 
                            style={{cursor:'pointer'}} />
                            <Card.Body>
                                <Card.Text className="text-left fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>{item.title}</Card.Text>
                                <Card.Text className="text-left fs-6" style={{color:'#bd0707'}}>{formatIDR.format(item.price)}</Card.Text>
                                { state.user.role === "admin" ? (
                                    <div className="d-flex flex-row justify-content-center gap-3">
                                        <Button onClick={() => handleUpdate(item.id)} className="btn-dark w-100" >Update</Button>
                                        <Button onClick={() => handleDelete.mutate(item.id)} className="btn-danger w-100">Delete</Button>
                                    </div>
                                ) : (<></>)}
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            ) : (
            <></>
            )}
            </Container>
        </>
    )
}

export default CardMenu