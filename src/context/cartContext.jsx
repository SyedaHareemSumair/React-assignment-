import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // Get cart from MongoDB
  useEffect(() => {
    if (!user?.id) return;

    fetch(`http://localhost:5000/api/cart/${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCart(data.products || []);
      })
      .catch((error) => {
        console.error("Cart fetch error:", error);
      });
  }, []);

  // Add product to cart
  const addToCart = async (product) => {
    if (!user?.id) {
      alert("Please login first!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${user.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product._id,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setCart(data.products || []);
        alert("Product added to cart! 🛒");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  // Remove product from cart
  const removeFromCart = async (productId) => {
    if (!user?.id) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${user.id}/${productId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setCart(data.products || []);
        alert("Product removed from cart! ❌");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Remove from cart error:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
