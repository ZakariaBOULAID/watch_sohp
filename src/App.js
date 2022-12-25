import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutus from './components/Aboutus';
import Product from './components/Product';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <Aboutus />
        <Product />
        <Contact />
    </>
  )
}

export default App
