import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

// import { setAuthToken } from '../config/api'
import Jumbotron from '../components/Jumbotron'
import CardMenu from '../components/CardMenu'
import IncomeTransaction from '../components/IncomeTransaction'

function HomePage() {

    const [state] = useContext(UserContext);
    
    return(
        <>
            { state.isLogin ? (
                <>
                    {state.user.role === "admin" ? (
                        <>
                            <IncomeTransaction />
                            {/* <CardMenu /> */}
                        </>
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