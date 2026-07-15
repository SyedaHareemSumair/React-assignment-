
import { Link } from 'react-router-dom'
import logoimg from '../assets/amazon-logo-amazon-icon-transparent-free-png.webp'




function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#8d8d8d' }}>
      <div className="container">
        
        <a className="navbar-brand" href="#">
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Product
              </Link>
            </li>
           
          </ul>
        </div>


      </div>
    </nav>
  )
}

export default Navbar