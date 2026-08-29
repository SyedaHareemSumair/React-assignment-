import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Link } from "react-router-dom";



function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
  <>
    <Navbar />
     <br />
    
    <div className="  container pt-5 py-4">
      <h1 className="text-center mb-4">Products</h1>
      <br />

      <div className="row">
        {users.map((user) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
            key={user._id}
          >
            <Link
              to={`/products/${user._id}`}
              className="text-decoration-none text-dark"
        
            >



              <div className="card h-100 shadow">

                <img
                  src={user.thumbnail}
                  className="card-img card-img-top"
                  alt={user.title}
                />

                <div className="content">
                  <div className="card-body">

                    <h5 className="card-title">
                      {user.title}
                    </h5>

                    <p className="description">
                      {user.description
                        .split(" ")
                        .slice(0, 5)
                        .join(" ")}
                      ...
                    </p>

                    <div className="bottom">

                      <p className="price">
                        ${user.price}
                      </p>

                      <p className="rating">
                        ⭐ {user.rating}
                      </p>

                    </div>

                  </div>


                  <button type="button">
                    Add to cart
                  </button>

                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

    <Footer />
  </>
);}

export default App;