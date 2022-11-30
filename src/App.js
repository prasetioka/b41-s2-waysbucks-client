import React from 'react'
import HomePage from './pages/HomePage'
import DetailProduct from './pages/DetailProduct'
import ProfilePage from './pages/ProfilePage'
import MyCart from './pages/MyCart'
import AddProductPage from './pages/AddProductPage'
import AddTopingPage from './pages/AddTopingPage'
import IncomePage from './pages/IncomePage'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
        <>
          <Navbar/>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/AddProductPage' element={<AddProductPage />} />
              <Route exact path='/AddTopingPage' element={<AddTopingPage />} />
              <Route exact path='/DetailProduct/:productid' element={<DetailProduct />} />
              <Route exact path='/IncomePage' element={<IncomePage />} />
              <Route exact path='/MyCart' element={<MyCart />} />
              <Route exact path='/ProfilePage' element={<ProfilePage />} />
          </Routes>
        </>
  )
}

export default App;
