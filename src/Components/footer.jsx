function Footer() {
  return (
    <footer className=" text-light pt-5 pb-3 mt-5"  style={{ backgroundColor: '#616060' }}>
      <div className="container">
        <div className="row">
          
          {/* Column 1: About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">MyWebsite</h5>
            <p className="text-light">
              Quality products at your doorstep. Shop with confidence and enjoy fast delivery.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Icons */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <a href="#" className="text-light me-3 fs-4"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3 fs-4"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light me-3 fs-4"><i className="bi bi-twitter"></i></a>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-light">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer