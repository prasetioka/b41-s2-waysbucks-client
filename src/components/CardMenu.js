import Card from 'react-bootstrap/Card';
import Logo from '../img/Header.png'
import Menu1 from '../img/menu-1.png'
import Menu2 from '../img/menu-2.png'
import Container from 'react-bootstrap/Container'
import Img from 'react-bootstrap/Image'


function CardMenu() {
    return(
        <>
            <Container className="d-flex flex-row justify-content-evenly mb-5">
                <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Container className="d-flex justify-content-center">
                        <Img  src={Logo} style={{position:'absolute', width:'90px', paddingTop:'110px'}} />
                    </Container>
                    <Card.Img  src={Menu1} style={{width:'cover'}} />
                    <Container className="d-flex flex-column justify-content-center border-1">
                        <Card.Body>
                            <Card.Text className="text-center fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</Card.Text>
                            <Card.Text className="text-center fs-6" style={{color:'#bd0707'}}>Rp.27.000</Card.Text>
                        </Card.Body>
                    </Container>
                </Card>
                <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Container className="d-flex justify-content-center">
                        <Img  src={Logo} style={{position:'absolute', width:'90px', paddingTop:'110px'}} />
                    </Container>
                    <Card.Img  src={Menu2} style={{width:'cover'}} />
                    <Container className="d-flex flex-column justify-content-center border-1">
                        <Card.Body>
                            <Card.Text className="text-center fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</Card.Text>
                            <Card.Text className="text-center fs-6" style={{color:'#bd0707'}}>Rp.27.000</Card.Text>
                        </Card.Body>
                    </Container>
                </Card>
                <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Container className="d-flex justify-content-center">
                        <Img  src={Logo} style={{position:'absolute', width:'90px', paddingTop:'110px'}} />
                    </Container>
                    <Card.Img  src={Menu1} style={{width:'cover'}} />
                    <Container className="d-flex flex-column justify-content-center border-1">
                        <Card.Body>
                            <Card.Text className="text-center fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</Card.Text>
                            <Card.Text className="text-center fs-6" style={{color:'#bd0707'}}>Rp.27.000</Card.Text>
                        </Card.Body>
                    </Container>
                </Card>
                <Card className="mt-5 d-flex justify-content-center rounded-4 border-0" style={{backgroundColor:'#F6DADA'}}>
                    <Container className="d-flex justify-content-center">
                        <Img  src={Logo} style={{position:'absolute', width:'90px', paddingTop:'110px'}} />
                    </Container>
                    <Card.Img  src={Menu1} style={{width:'cover'}} />
                    <Container className="d-flex flex-column justify-content-center border-1">
                        <Card.Body>
                            <Card.Text className="text-center fw-bold fs-5 mb-0" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</Card.Text>
                            <Card.Text className="text-center fs-6" style={{color:'#bd0707'}}>Rp.27.000</Card.Text>
                        </Card.Body>
                    </Container>
                </Card>
            </Container>
        </>
        

        
    )
}

export default CardMenu