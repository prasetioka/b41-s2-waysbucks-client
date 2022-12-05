import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

import Jumbotron from '../components/Jumbotron'
import CardMenu from '../components/CardMenu'
import IncomeTransaction from '../components/IncomeTransaction'
import ToppingList from '../components/ToppingList'

function HomePage() {

    const [state] = useContext(UserContext);

    return(
        <>
            { state.isLogin ? (
                <>
                    {state.user.role === "admin" ? (
                        <>
                            <IncomeTransaction />
                            <CardMenu />
                            <ToppingList />
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