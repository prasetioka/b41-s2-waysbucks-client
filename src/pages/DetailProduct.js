import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { API } from '../config/api'
// import { UserContext } from '../context/userContext'

import Checked from '../img/green-check.svg'

function DetailProduct() {
    
    // const [state] = useContext(UserContext);
    
    let { id } = useParams()
    
    // const navigate = useNavigate()

    let { data: product } = useQuery("productCache", async () => {
      const response = await API.get('/product/' + id)
      console.log("Get data product success!", response.data.data)
      return response.data.data
    })

    const formatIDR = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    })

    let { data: toppings } = useQuery("toppingsCache", async () => {
      const response = await API.get('/toppings')
      console.log("Get data topping success!", response.data.data)
      return response.data.data
    })

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

//   const totalPrice = product?.price + topingPrice
//   console.log(totalPrice)

//   const email = state.isLogin[0].email
//   console.log(email)

  // const idProduct = parseInt(productid)
  // const idCart = new Date()

  // const Transaction = { email, topingCheck, idProduct, totalPrice, idCart }
  // const arrTransaction = []

  // const DataTransaction = JSON.parse(
  //   localStorage.getItem(`TRANSACTION_${isLogin[0].email}`)
  // )

  // const handleOnSubmit = (e) => {
  //   e.preventDefault()
  //   if (DataTransaction == null) {
  //     arrTransaction.push(Transaction)
  //     localStorage.setItem(
  //       `TRANSACTION_${isLogin[0].email}`,
  //       JSON.stringify(arrTransaction)
  //     )
  //   } else {
  //     DataTransaction.map((e) => {
  //       arrTransaction.push(e)
  //     })
  //     arrTransaction.push(Transaction)
  //     localStorage.setItem(
  //       `TRANSACTION_${isLogin[0].email}`,
  //       JSON.stringify(arrTransaction)
  //     )
  //   }
  //   navigate("/MyCart")
  // }
  // console.log(Transaction)

    return(
        <>
            <Container className="mt-5 mb-5">
                <Row className="d-flex justify-content-center">
                
                    <Col sm={4}>
                        <div className="d-flex justify-content-end mt-3 me-3">
                            <div className="d-flex justify-content-center">
                            <Image src={product?.image} style={{width:'330px'}}/>
                            </div>
                        </div>
                    </Col>
              
                    <Col sm={5} className="pe-3 ">
                        <p className="fs-1 fw-bold mb-0" style={{color:'#bd0707'}}>{product?.title}</p>
                        
                        <p className="fs-5 mt-0 mb-5" style={{color:'#bd0707'}}>{formatIDR.format(product?.price)}</p>

                        <p className="fs-5 fw-bold mb-4" style={{color:'#bd0707'}}>Toping</p>
                        
                        {toppings?.length !== 0 ? (
                        <Row md={4} className="mb-5">
                            {toppings?.map((item, index) => (
                                
                                <Col className="d-flex flex-column justify-content-center mb-3" >
                                    <div className="d-flex justify-content-center" 
                                    onClick={() => handleChecked(item.title, item.price)}
                                    >
                                        <Image src={item.image} style={{width:'60px', cursor:'pointer'}} />
                                        {topingCheck.filter((element) => element === item.title)[0] ? (<Image src={Checked} className="position-absolute ms-4" />
                                        ) : (
                                        <Image src={Checked} className="position-absolute ms-4 d-none" />)}
                                    </div>
                                    <p className="text-center mb-0" style={{color:'#bd0707', fontSize:'10px'}}>{item.title}</p>
                                    <p className="text-center mb-0" style={{ color: "#bd0707", fontSize: "10px" }}>{formatIDR.format(item.price)}</p>
                                </Col>
                                ))}
                        </Row>
                        ) : (
                          <></>
                        )}
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Total</p>
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>
                                {formatIDR.format(product?.price + topingPrice)}
                                </p>
                        </div>
                        <Button 
                        // onClick={handleOnSubmit} 
                        style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Cart</Button>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailProduct