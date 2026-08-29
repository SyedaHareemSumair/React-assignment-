import { useContext } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { CartContext } from "../context/cartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <br />
      <br />

      <div className="container pt-5 py-5">
        <h1 className="text-center mb-5">My Cart 🛒</h1>

        {cart.length === 0 ? (
          <h3 className="text-center">Your cart is empty.</h3>
        ) : (
          <div className="row">
            {cart.map((product) => (
              <div className="col-md-6 mb-4" key={product._id}>
                <div className="card shadow p-3">
                  <div className="row align-items-center">

                    <div className="col-4">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid"
                        style={{
                          height: "150px",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div className="col-8">
                      <h5>{product.title}</h5>

                      <p className="mb-2">
                        ${product.price}
                      </p>

                      <p className="mb-2">
                        ⭐ {product.rating}
                      </p>

                      <p className="mb-3">
                        {product.category}
                      </p>

                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(product._id)}
                      >
                        Remove from Cart
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
