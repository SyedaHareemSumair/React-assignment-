
import { Link } from 'react-router-dom'
import logoimg from '../assets/amazon-logo-amazon-icon-transparent-free-png.webp'
import cartimg from '../assets/5166615-Photoroom.png'





function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#8d8d8d' }}>
      <div className="container">
        
        <a className="navbar-brand" href="/home">
          <img src={logoimg} alt="logo" style={{ height: '60px' , width: '130px' }} />
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        
        <div className="collapse navbar-collapse links" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-black" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/Cart">
              <img className="cart-icon" src={cartimg} alt="Cart" />              </Link>
            </li>
           
          </ul>
        </div> 


      </div>
    </nav>
  )
}

export default Navbar