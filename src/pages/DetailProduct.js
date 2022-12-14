import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
import { useQuery, useMutation } from 'react-query'
import { API } from '../config/api'
import { UserContext } from '../context/userContext'

import Checked from '../img/green-check.svg'

function DetailProduct() {
    
    const { id } = useParams()
    const [state] = useContext(UserContext)
    
    const formatIDR = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })
  
    let { data: product } = useQuery("productCache", async () => {
      const response = await API.get("/product/" + id)
  
      return response.data.data
    })

    let { data: toppings } = useQuery("toppingsCache", async () => {
      const response = await API.get("/toppings")
  
      return response.data.data
    })
  
    const [toppingCheck, setToppingCheck] = useState([0])
    const [toppingPrice, setToppingPrice] = useState(0)
  
    const handleChecked = (id, price) => {
      let filterID = toppingCheck.filter((e) => e === id)
      if (filterID[0] !== id) {
        setToppingCheck([...toppingCheck, id])
        setToppingPrice(toppingPrice + price)
      } else {
        setToppingCheck(toppingCheck.filter((e) => e !== id))
        setToppingPrice(toppingPrice - price)
      }
    }
  
    const navigate = useNavigate()
  
    const handleSubmit = useMutation(async (e) => {
      e.preventDefault()
  
      // const config = {
      //   headers: { "Content-type": "application/json" },
      // }
  
      const data = {
        buyer_id: state.user.id,
        product_id: product.id,
        topping_id: toppingCheck,
      }
      console.log("ini console data", data)

      const datatrans = {
        user_id: state.user.id,
      }
  
      const bodytrans = JSON.stringify(datatrans)
      // const response = await API.get("/my-order")
    //   console.log("ini data response", response)
    //   console.log("ini data response status", response.data.data.status)
  
      await API.post("/transaction", bodytrans)
    //   console.log("ini data didalam if", response)
      
      const body = JSON.stringify(data)
      console.log("ini body",body)
  
      await API.post("/order", body)
  
      navigate("/MyCart")
    })

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
                            {toppings?.map((item) => (
                                
                                <Col className="d-flex flex-column justify-content-center mb-3" >
                                    <div className="d-flex justify-content-center" 
                                    onClick={() => handleChecked(item.id, item.price)}
                                    >
                                        <Image src={item.image} style={{width:'60px', cursor:'pointer'}} />
                                        {toppingCheck.filter((element) => element === item.id)[0] ? (<Image src={Checked} className="position-absolute ms-4" />
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
                                {formatIDR.format(product?.price + toppingPrice)}
                            </p>
                        </div>
                        <Button onClick={(e) => handleSubmit.mutate(e)} style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Cart</Button>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailProduct