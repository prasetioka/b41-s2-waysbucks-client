import React from 'react';
import Card from 'react-bootstrap/Card';
import Logo from '../img/Header.png'
import Menu1 from '../img/menu-1.png'
import Menu2 from '../img/menu-2.png'
import Menu3 from '../img/menu-3.png'
import Menu4 from '../img/menu-4.png'
import Container from 'react-bootstrap/Container'
import Img from 'react-bootstrap/Image'

function CardMenu() {
    return(
        <>
            <Container className="mt-5">
                <Card.Text className="fs-2 fw-bold" style={{color:'#bd0707'}}>Let's Order</Card.Text>
            </Container>
            <Container className="d-flex flex-row justify-content-between mb-5">
                    <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Img  src={Logo} style={{position:'absolute', left:'75px', width:'90px', paddingBottom:'100px'}} />
                    <Card.Img  src={Menu1} />
                        <Card.Body>
                            <Card.Text className="text-left fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</Card.Text>
                            <Card.Text className="text-left fs-6" style={{color:'#bd0707'}}>Rp.27.000</Card.Text>
                        </Card.Body>
                    </Card>
                <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Img  src={Logo} style={{position:'absolute', left:'78px', width:'90px', paddingBottom:'100px'}} />
                    <Card.Img  src={Menu2} />
                    <Card.Body>
                        <Card.Text className="text-left fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Ice Coffee Green Tea</Card.Text>
                        <Card.Text className="text-left fs-6" style={{color:'#bd0707'}}>Rp.31.000</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Img  src={Logo} style={{position:'absolute', left:'80px', width:'90px', paddingBottom:'100px'}} />
                    <Card.Img  src={Menu3} />
                    <Card.Body>
                        <Card.Text className="text-left fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Hanami Latte</Card.Text>
                        <Card.Text className="text-left fs-6" style={{color:'#bd0707'}}>Rp.29.000</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Img  src={Logo} style={{position:'absolute', left:'83px', width:'90px', paddingBottom:'38px'}} />
                    <Card.Img  src={Menu4} />
                    <Card.Body>
                        <Card.Text className="text-left fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Clepon Coffee</Card.Text>
                        <Card.Text className="text-left fs-6" style={{color:'#bd0707'}}>Rp.28.000</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default CardMenu