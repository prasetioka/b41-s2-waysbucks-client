import React from 'react'
import NavBar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import CardMenu from './components/CardMenu'
import DetailProduct from './pages/DetailProduct'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
  <>
    <NavBar />
    <Jumbotron />
    <CardMenu />
    <DetailProduct />
    <ProfilePage />
  </>
);
}

export default App;
