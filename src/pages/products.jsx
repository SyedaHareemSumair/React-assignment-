import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.products);
      });
  }, []);

  return (

    <>
    <Navbar />
    




    <div className="container py-4">
      <h1 className="text-center mb-4">Products</h1>

      <div className="row">
        {users.map((user) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={user.id}>
      <div className="card h-100 shadow">

      <img
      src={user.thumbnail}
      className=" card-img card-img-top"
    alt={user.title}
     />

     <div className="content">

     <div className="card-body">

      <h5 className="card-title">{user.title}</h5>

      <p className="description">
    {user.description.split(" ").slice(0, 5).join(" ")}...
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

     <button>
    
     Add to cart
    

    </button>

   </div>
   </div>
   </div>
     ))}
      </div>
    </div>


    <Footer />
    </>
  );
}

export default App;