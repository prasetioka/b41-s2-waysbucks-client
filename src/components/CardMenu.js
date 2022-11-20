import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col} from 'react-bootstrap'

function CardMenu() {

    const navigate = useNavigate()
    const Products = JSON.parse(localStorage.getItem("PRODUCT_DATA"))
    
    return(
        <>
        {/* Card Menu Start */}
            <Container className="mt-5">
                <Card.Text className="fs-2 fw-bold" style={{color:'#bd0707'}}>Let's Order</Card.Text>
            </Container>
            <Container className="mb-5">
                <Row>
                    {Products.map((product) => (
                        <Col>
                            <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                                <Card.Img src={product.photo} onClick={() => {navigate(`/DetailProduct/${product.productid}`)}} style={{cursor:'pointer'}} />
                                <Card.Body>
                                    <Card.Text className="text-left fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>{product.productname}</Card.Text>
                                    <Card.Text className="text-left fs-6" style={{color:'#bd0707'}}>Rp.{product.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default CardMenu