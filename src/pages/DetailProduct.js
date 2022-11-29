import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
import Checked from '../img/green-check.svg'
// import Navbar from '../components/Navbar'

function DetailProduct() {
    const { productid } = useParams()

    const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))

    const Products = JSON.parse(localStorage.getItem("PRODUCT_DATA"))

    const formatIDR = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      })

    const Topings = JSON.parse(localStorage.getItem("TOPING_DATA"))

    const [topingCheck, setTopingCheck] = useState([])
    const [topingPrice, setTopingPrice] = useState(0)

    const handleChecked = (name, price) => {
        let filterID = topingCheck.filter((e) => e === name)
        if (filterID[0] !== name) {
            setTopingCheck([...topingCheck, name])
            setTopingPrice(topingPrice + price)
        } else {
            setTopingCheck(topingCheck.filter((e) => e !== name))
            setTopingPrice(topingPrice - price)
        }
    }

    const totalPrice = Products[productid].price + topingPrice

  const email = isLogin[0].email
//   console.log(email)
//   console.log(topingCheck)
  const idProduct = parseInt(productid)
  const idCart = new Date()

  const Transaction = { email, topingCheck, idProduct, totalPrice, idCart }
  const arrTransaction = []

  const DataTransaction = JSON.parse(
    localStorage.getItem(`TRANSACTION_${isLogin[0].email}`)
  )

  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (DataTransaction == null) {
      arrTransaction.push(Transaction)
      localStorage.setItem(
        `TRANSACTION_${isLogin[0].email}`,
        JSON.stringify(arrTransaction)
      )
    } else {
      DataTransaction.map((e) => {
        arrTransaction.push(e)
      })
      arrTransaction.push(Transaction)
      localStorage.setItem(
        `TRANSACTION_${isLogin[0].email}`,
        JSON.stringify(arrTransaction)
      )
    }
    navigate("/MyCart")
  }
  console.log(Transaction)

    return(
        <>
            {/* <Navbar/> */}
            <Container className="mt-5 mb-5">
                <Row className="d-flex justify-content-center">
                
                    <Col sm={4}>
                        <div className="d-flex justify-content-end mt-3 me-3">
                            <div className="d-flex justify-content-center">
                            <Image src={Products[productid].photo} style={{width:'330px'}}/>
                            </div>
                        </div>
                    </Col>
              
                    <Col sm={5} className="pe-3 ">
                        <p className="fs-1 fw-bold mb-0" style={{color:'#bd0707'}}>{Products[productid].productname}</p>
                        
                        <p className="fs-5 mt-0 mb-5" style={{color:'#bd0707'}}>{formatIDR.format(Products[productid].price)}</p>

                        <p className="fs-5 fw-bold mb-4" style={{color:'#bd0707'}}>Toping</p>
                        
                    
                        <Row md={4} className="mb-5">
                            {Topings.map((toping) => {
                                return(
                                <Col className="d-flex flex-column justify-content-center mb-3" >
                                    <div className="d-flex justify-content-center" onClick={() => handleChecked(toping.topingname, toping.price)}>
                                        <Image src={toping.photo} style={{width:'60px', cursor:'pointer'}} />
                                        {topingCheck.filter((element) => element === toping.topingname)[0] ? (<Image src={Checked} className="position-absolute ms-4" />
                                        ) : (
                                        <Image src={Checked} className="position-absolute ms-4 d-none" />)}
                                    </div>
                                    <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>{toping.topingname}</p>
                                    <p className="text-center mb-0" style={{ color: "#bd0707", fontSize: "10px" }}>{formatIDR.format(toping.price)}</p>
                                </Col>
                                )})}
                        </Row>
                    
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Total</p>
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>{formatIDR.format(Products[productid].price + topingPrice)}</p>
                        </div>
                        <Button onClick={handleOnSubmit} style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Cart</Button>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailProduct