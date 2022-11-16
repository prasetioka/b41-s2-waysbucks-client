import React from 'react'
import { Container, Image, Button, Stack } from 'react-bootstrap'
import Logo from '../img/waysbucks-1.png'
import Coffee1 from '../img/detail-product/coffee-1.png'
import Toping1 from '../img/detail-product/toping-bubble-tea.png'
import Toping2 from '../img/detail-product/toping-mango.png'
import Toping3 from '../img/detail-product/toping-green-coconut.png'
import Toping4 from '../img/detail-product/toping-boba-mango.png'
import Toping5 from '../img/detail-product/toping-bill-berry-boba.png'
import Toping6 from '../img/detail-product/toping-kiwi-pearl.png'
import Toping7 from '../img/detail-product/toping-matcha-cantaloupe.png'
import Toping8 from '../img/detail-product/toping-strawbery-poping.png'

function DetailProduct() {
    return(
        <>
            <Container className="d-flex mb-5 mt-5">
                <Stack direction="horizontal" gap={4}>
                    <div className="d-flex justify-content-center">
                        <Image src={Coffee1} style={{width:'450px'}}/>
                        <Image src={Logo} style={{position:'absolute', width:'110px', paddingTop:'350px'}}/>
                    </div>
                    <Stack direction="vertical" gap={3}>
                        <p className="fs-1 fw-bold mb-0" style={{color:'#bd0707'}}>Ice Coffee Palm Sugar</p>
                        <p className="fs-5 mt-0" style={{color:'#bd0707'}}>Rp.27.000</p>
                        <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Toping</p>

                        <Stack direction="horizontal" gap={3}>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping1} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Bubble Tea Gelatin</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping2} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Manggo</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping3} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Green Coconut</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping4} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Boba Manggo</p>
                            </div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping5} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Bill Berry Boba</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping6} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Kiwi Popping Pearl</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping7} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Matcha Cantaloupe</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center" style={{width:'150px'}}>
                                <div className="d-flex justify-content-center">
                                    <Image src={Toping8} alt="" style={{width:'60px', borderRadius:'60%'}} />
                                </div>
                                <p className="text-center mb-0" style={{color:'#bd0707'}}>Strawberry Popping</p>
                            </div>
                        </Stack>
                        <div className="d-flex justify-content-between mt-4">
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Total</p>
                            <p className="fs-5 fw-bold mb-0" style={{color:'#bd0707'}}>Rp.27.000</p>
                        </div>
                        <Button style={{width:'100%', color:'white', fontWeight:'bold', borderColor:'#bd0707', backgroundColor:'#bd0707'}}>Add Cart</Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default DetailProduct