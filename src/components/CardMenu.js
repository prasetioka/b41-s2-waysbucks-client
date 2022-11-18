import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col} from 'react-bootstrap'
import Menus from './Menu'

function CardMenu() {
    return(
        <>
        {/* Card Menu Start */}
            <Container className="mt-5">
                <Card.Text className="fs-2 fw-bold" style={{color:'#bd0707'}}>Let's Order</Card.Text>
            </Container>
            <Container className="mb-5">
                <Row>
                    {Menus.map((Menu, menuId) => (
                        <Col>
                            <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                                <Link to="/DetailProduct"><Card.Img  src={Menu.image} /></Link>
                                <Card.Body>
                                    <Card.Text className="text-left fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>{Menu.title}</Card.Text>
                                    <Card.Text className="text-left fs-6" style={{color:'#bd0707'}}>Rp.{Menu.price}</Card.Text>
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