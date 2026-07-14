import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar'
import Carousel from './Components/Carousal'
import Cards from './Components/cards'
import Footer from './Components/footer'
import Home from './pages/home'
import About from './pages/about-us'
import Products from './pages/products'






function App() {


    return (
        <>


       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>

        </>

    )
}
export default App 
