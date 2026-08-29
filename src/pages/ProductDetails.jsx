import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { CartContext } from "../context/cartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Product fetch error:", error);
      });
  }, [id]);

  if (!product) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <br />
      <br />

      <div className="container product-details py-5">
        <div className="row align-items-center">

          <div className="col-12 col-md-5 text-center p-3">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                maxHeight: "450px",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="col-12 col-md-7 p-3">

            <h1 className="mb-3">
              {product.title}
            </h1>

            <p className="text-muted mb-3">
              Category: {product.category}
            </p>

            <p className="mb-3">
              {product.description}
            </p>

            <h3 className="mb-3">
              ${product.price}
            </h3>

            <p className="mb-3">
              ⭐ {product.rating}
            </p>

            <p className="mb-3">
              Stock: {product.stock}
            </p>

            <button
              className="btn btn-dark px-4 py-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
