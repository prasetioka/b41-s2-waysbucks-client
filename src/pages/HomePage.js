import React from 'react'
import Jumbotron from '../components/Jumbotron'
import CardMenu from '../components/CardMenu'
import IncomePage from '../pages/IncomePage'
// import Navbar from '../components/Navbar'

function HomePage() {
    const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))

    return(
        <>
            {/* <Navbar /> */}
            { isLogin.length > 0 ? (
                <>
                    {isLogin[0].status === "admin" ? (
                    <IncomePage />
                    ) : (
                        <>
                            <Jumbotron />
                            <CardMenu />
                        </>
                    )}
                </>
            ) : (<><Jumbotron /></>)}
        </>
    )
}

export default HomePage