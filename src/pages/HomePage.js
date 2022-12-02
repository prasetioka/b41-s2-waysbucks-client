import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

// import { setAuthToken } from '../config/api'
import Jumbotron from '../components/Jumbotron'
import CardMenu from '../components/CardMenu'
import IncomePage from '../pages/IncomePage'

function HomePage() {

    const [state] = useContext(UserContext);
    
    return(
        <>
            { state.isLogin ? (
                <>
                    {state.user.role === "admin" ? (
                    <IncomePage />
                    ) : (
                        <>
                            <Jumbotron />
                            <CardMenu />
                        </>
                    )}
                </>
            ) : (
            <>
            <Jumbotron />
            </>
            )}
        </>
    )
}

export default HomePage