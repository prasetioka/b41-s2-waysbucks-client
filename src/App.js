import React from 'react'
import NavBar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import CardMenu from './components/CardMenu'
import DetailProduct from './pages/DetailProduct'
import ProfilePage from './pages/ProfilePage'
import MyCart from './pages/MyCart'
import AddProductPage from './pages/AddProductPage'
import AddTopingPage from './pages/AddTopingPage'

function App() {
  return (
  <>
    <NavBar />
    <Jumbotron />
    <CardMenu />
    <DetailProduct />
    <ProfilePage />
    <MyCart />
    <AddProductPage />
    <AddTopingPage />
  </>
);
}

export default App;
