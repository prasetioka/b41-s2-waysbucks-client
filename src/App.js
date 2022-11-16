import React from 'react'
import NavBar from './components/Navbar'
// import NavBarUser from './components/NavbarUser'
import Jumbotron from './components/Jumbotron'
import CardMenu from './components/CardMenu'
import DetailProduct from './pages/DetailProduct'
import ProfilePage from './pages/ProfilePage'
import MyCart from './pages/MyCart'
import AddProductPage from './pages/AddProductPage'
import AddTopingPage from './pages/AddTopingPage'
import IncomePage from './pages/IncomePage'

function App() {
  return (
  <>
    <NavBar />
    {/* <NavBarUser /> */}
    <Jumbotron />
    <CardMenu />
    <hr/>
    <DetailProduct />
    <hr/>
    <ProfilePage />
    <hr/>
    <MyCart />
    <hr/>
    <AddProductPage />
    <hr/>
    <AddTopingPage />
    <hr/>
    <IncomePage />
  </>
);
}

export default App;
