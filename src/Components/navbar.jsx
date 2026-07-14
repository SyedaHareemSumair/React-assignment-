
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#8d8d8d' }}>
      <div className="container">
        
        {/* Logo space */}
        <a className="navbar-brand" href="#">
          <img src="src/assets/amazon-logo-amazon-icon-transparent-free-png.webp" alt="logo" style={{ height: '60px' , width: '130px' }} />
        </a>

        {/* Toggle button for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}

        
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
            {/* Cart icon space */}
           
          </ul>
        </div>


      </div>
    </nav>
  )
}

export default Navbar