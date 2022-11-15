import Card from 'react-bootstrap/Card';
import Logo from '../img/Header.png'
import Menu1 from '../img/menu-1.png'


function CardMenu() {
    return(
        <div>
            <Card>
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={Menu1} style={{width:'200px'}} />
                    <Card.Img variant="top" src={Logo} style={{position:'absolute', width:'70px', marginTop:'85px'}} />
                </div>
                <Card.Body>
                    <Card.Text>Ice Coffee Palm Sugar</Card.Text>
                    <Card.Text>Rp.27.000</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardMenu