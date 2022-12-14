import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { UserContext } from './context/userContext'
import { API, setAuthToken } from './config/api'

import HomePage from './pages/HomePage'
import DetailProduct from './pages/DetailProduct'
import ProfilePage from './pages/ProfilePage'
import MyCart from './pages/MyCart'
import AddProductPage from './pages/AddProductPage'
import UpdateProductPage from './pages/UpdateProductPage'
import AddTopingPage from './pages/AddTopingPage'
import UpdateToppingPage from './pages/UpdateToppingPage'
import Navbar from './components/Navbar'

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      navigate('/');
    }

  },[state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      console.log("response check auth", response)

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      // console.log("ini data state", state)
      
    } catch (error) {
      console.log(error);
   
    }
  };

  useEffect(() => {
    checkUser();
  },[]);

  return (
    
      <>
        { state.isLogin ? (
            <>
            {state.user.role === "admin" ? (
            <>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/AddProductPage' element={<AddProductPage />} />
                <Route exact path='/UpdateProductPage/:id' element={<UpdateProductPage />} />
                <Route exact path='/AddTopingPage' element={<AddTopingPage />} />
                <Route exact path='/UpdateToppingPage/:id' element={<UpdateToppingPage />} />
            </Routes>
            </>
            ) : (
              <>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/DetailProduct/:id' element={<DetailProduct />} />
                    <Route exact path='/MyCart' element={<MyCart />} />
                    <Route exact path='/ProfilePage' element={<ProfilePage />} />
                </Routes>
              </>
            )}
            </>
        ) : (
        <>
          <Navbar/>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
            </Routes>    
        </>
        )}
      </>
       
  )
}

export default App;
