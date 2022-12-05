import React from "react"
import { Card, Container, Button} from "react-bootstrap"
import { useQuery } from "react-query"
import { API } from "../config/api"

import Logo from '../img/Header.png'
import Barcode from '../img/profile-page/barcode.png' 

function Transaction() {

    // const formatIDR = new Intl.NumberFormat(undefined, {
    //     style: "currency",
    //     currency: "IDR",
    //     maximumFractionDigits: 0,
    //   })
    
      let { data: transUser } = useQuery("transUserCache", async () => {
        const response = await API.get("/transaction-user")
    
        return response.data.data
      })
    
      console.log(transUser)

    return(
        <Container className="d-flex flex-row p-3 rounded-4" style={{backgroundColor:'#F6DADA', border:'0'}}>
            {transUser?.map((e, index) => {
            return (
                <>
            <Card.Body className="d-flex flex-column gap-3 ps-0" style={{width:'75%'}}>
                  
                    {e.order?.map((a) => {
                    return (
                        <div className="d-flex flex-row gap-3">
                            <Card.Img src={a.product?.image} className="rounded-3" style={{width:'100px'}}/>
                            <Card.Body className="d-flex flex-column justify-content-center">

                                <Card.Title style={{color:'#bd0707', fontSize:'20px', fontWeight:'bold', marginBottom:'0'}}>
                                    {a.product?.title}
                                </Card.Title>

                                <Card.Text style={{color:'#bd0707', fontSize:'15px', marginBottom:'0'}}>
                                    Saturday, 5 March 2020
                                </Card.Text>

                                <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>
                                    Toping: {a.topping?.map((b) => {return <span>{b.title},</span>})}
                                </Card.Text>

                                <Card.Text style={{color:'#974A4A', fontSize:'15px', marginBottom:'0'}}>
                                    Price: {a.total}
                                </Card.Text>

                            </Card.Body>
                        </div>
                        )
                    })}    
            </Card.Body>
        
            <Card.Body className="d-flex flex-column w-25 p-0 gap-3">
                <div className="d-flex justify-content-center">
                    <Card.Img src={Logo} style={{width:'80px'}} />
                </div>
                <div className="d-flex justify-content-center">
                    <Card.Img src={Barcode} style={{width:'100px'}} />
                </div>
                <Button style={{backgroundColor:'rgb(0, 209, 255,0.1)', border:'0', color:'#00D1FF'}} disabled>On The Way</Button>
                <Card.Text style={{color:'#974A4A', fontWeight:'bold', fontSize:'15px', textAlign:'center'}}>Sub Total : {e.total}
                </Card.Text>
            </Card.Body>
            </>
               )
            })}
        </Container>
    )
}

export default Transaction