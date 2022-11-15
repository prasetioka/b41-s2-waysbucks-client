import React from 'react'
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from './components/Jumbotron'
import CardMenu from './components/CardMenu'

function App() {
  return (
  <>
    <NavBar />
    <Jumbotron />
    <CardMenu />
  </>
);
}

export default App;
