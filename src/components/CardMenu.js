import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col} from 'react-bootstrap'
import { useQuery } from 'react-query'
import { API } from '../config/api'

function CardMenu() {

    const navigate = useNavigate()

    const formatIDR = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      })

    let { data: products } = useQuery('productsCache', async () => {
        const response = await API.get('/products');
        return response.data.data;
    });

    return(
        <>
        {/* Card Menu Start */}
            <Container className="mt-5">
                <Card.Text className="fs-2 fw-bold" style={{color:'#bd0707'}}>Let's Order</Card.Text>
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