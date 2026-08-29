import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from "./pages/ProductDetails";
import Home from './pages/home'
import About from './pages/about-us'
import Products from './pages/products'
import Signup from './pages/signup'
import Login from './pages/login'
import Cart from './pages/cart'
import CartProvider from "./context/cartContext";


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}

export default App