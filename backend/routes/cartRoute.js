const express = require("express");
const Cart = require("../models/cart");

const router = express.Router();

// ADD PRODUCT TO CART
router.post("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        products: [productId],
      });
    } else {
      cart.products.push(productId);
    }

    await cart.save();
    await cart.populate("products");

    res.status(200).json(cart);
  } catch (error) {
    console.error("Add cart error:", error);

    res.status(500).json({
      message: "Failed to add product to cart",
      error: error.message,
    });
  }
});

// GET USER CART
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userId: req.params.userId,
    }).populate("products");

    res.json(cart || { products: [] });
  } catch (error) {
    console.error("Get cart error:", error);

    res.status(500).json({
      message: "Failed to fetch cart",
      error: error.message,
    });
  }
});

// REMOVE PRODUCT FROM CART
router.delete("/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    cart.products = cart.products.filter(
      (id) => id.toString() !== productId
    );

    await cart.save();
    await cart.populate("products");

    res.json(cart);
  } catch (error) {
    console.error("Remove cart error:", error);

    res.status(500).json({
      message: "Failed to remove product from cart",
      error: error.message,
    });
  }
});

module.exports = router;
