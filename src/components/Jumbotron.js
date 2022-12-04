import React from 'react'
import RectangleTwo from '../img/Rectangle 3.png'
import { Container, Card } from 'react-bootstrap'
import JumbotronCard from '../img/Jumbotron.png'

function Jumbotron() {
    return (
        <>
            <Container className="d-flex mt-5 p-0">
                <Card className="d-flex justify-content-center mx-5 border-0 ps-5" style={{width:'80%'}}>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <Card.Img src={JumbotronCard} /> 
                        <Card.Img fluid src={RectangleTwo} style={{left:'600px', position:'absolute', width:'45%'}}/>
                    </Card.Body>

                    <Card.Body className="d-flex justify-content-center flex-column text-white ms-5 mt-2" style={{width:'50%', position:'absolute'}}>
                        <Card.Title className="fs-1 fw-bold mb-0">WAYSBUCKS</Card.Title>
                        <Card.Text className="fs-5 fw-light mt-3 mb-3">Things are changing, but we're still here for you</Card.Text>
                        <Card.Text className="fs-6 fw-light mb-4">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <span className="fw-bold">Waysbucks</span> Drivers is also available</Card.Text>
                        <Card.Text className="fs-6 fw-light mb-4">Let's Order...</Card.Text>
                    </Card.Body>
                </Card>
            </Container>

            {/* <Container className="d-flex mt-4">
                <Card style={{display:'flex', justifyContent:'center', width:'90%', height:'400px', backgroundColor:'#bd0707'}}>
                    <Card.Img src={RectangleTwo} centered style={{right:'-115px', width:'450px', position:'absolute'}}/>
                    <Card.Body className="d-flex justify-content-center flex-column text-white ms-5" style={{width:'60%'}}>
                        <Card.Title style={{fontSize:'70px', fontWeight:'bold'}}>WAYSBUCKS</Card.Title>
                        <Card.Text className="fs-4 mt-3 mb-4">Things are changing, but we're still here for you</Card.Text>
                        <Card.Text className="fs-5 mb-4">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available</Card.Text>
                        <Card.Text className="fs-5 mb-3">Let's Order...</Card.Text>
                    </Card.Body>
                </Card>
            </Container> */}
        </>
    )
}

export default Jumbotron