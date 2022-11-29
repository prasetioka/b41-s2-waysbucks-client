import React from "react"
import { Card, Container, Button} from "react-bootstrap"
import Logo from '../img/Header.png'
import Barcode from '../img/profile-page/barcode.png' 

function Transaction() {

    const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))
    const transaction = JSON.parse(
      localStorage.getItem(`TRANSACTION_${isLogin[0].email}`)
    )
    const Products = JSON.parse(localStorage.getItem("PRODUCT_DATA"))
  
    const formatIDR = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })

    return(
        <Container className="d-flex flex-row p-3 rounded-4" style={{backgroundColor:'#F6DADA', border:'0'}}>
            <Card.Body className="d-flex flex-column gap-3 ps-0" style={{width:'75%'}}>
            
            {transaction.map((e) => {
                return (
                    <>
                    {Products.map((product) => {
                        return (
                            <>
                                {product.productid === e.idProduct ? (
                                    <div className="d-flex flex-row gap-3">
                                    <Card.Img src={product.photo} className="rounded-3" style={{width:'100px'}}/>
                                    <Card.Body className="d-flex flex-column justify-content-center">
                                        <Card.Title style={{color:'#bd0707', fontSize:'20px', fontWeight:'bold', marginBottom:'0'}}>{product.productname}</Card.Title>
                                        <Card.Text style={{color:'#bd0707', fontSize:'15px', marginBottom:'0'}}>Saturday, 5 March 2020</Card.Text>
                                        <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Toping: {e.topingCheck.map((e) => {return <> {e},</>})}</Card.Text>
                                        <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Price: {formatIDR.format(e.totalPrice)}</Card.Text>
                                    </Card.Body>
                                </div>
                                ) : (
                                <></>
                            )}
                            </>
                        )
                    })}
                    </>
                )
            })}

                



                {/* <div className="d-flex flex-row gap-3">
                    <Card.Img src={Coffee1} className="rounded-3" style={{width:'100px'}}/>
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Card.Title style={{color:'#bd0707', fontSize:'20px', fontWeight:'bold', marginBottom:'0'}}>Ice Coffee Palm Sugar</Card.Title>
                        <Card.Text style={{color:'#bd0707', fontSize:'15px', marginBottom:'0'}}>Saturday, 5 March 2020</Card.Text>
                        <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Toping: Bill Berry Boba, Manggo</Card.Text>
                        <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>Price: Rp.36.000</Card.Text>
                    </Card.Body>
                </div> */}
            </Card.Body>

            <Card.Body className="d-flex flex-column w-25 p-0 gap-3">
                <div className="d-flex justify-content-center">
                    <Card.Img src={Logo} style={{width:'80px'}} />
                </div>
                <div className="d-flex justify-content-center">
                    <Card.Img src={Barcode} style={{width:'100px'}} />
                </div>
                <Button style={{backgroundColor:'rgb(0, 209, 255,0.1)', border:'0', color:'#00D1FF'}} disabled>On The Way</Button>
                <Card.Text style={{color:'#974A4A', fontWeight:'bold', fontSize:'15px', textAlign:'center'}}>Sub Total : {formatIDR.format(transaction.map((e) => e.totalPrice).reduce((a, b) => a + b))}
                </Card.Text>
            </Card.Body>
        </Container>
    )
}

export default Transaction