const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/products");

const products = [
  {
    title: "Classic Black Dress",
    price: 3500,
    description: "Elegant black dress for women",
    thumbnail: "https://png.pngtree.com/png-clipart/20250513/original/pngtree-lady-in-black-dress-png-sticker-illustration-png-image_20962266.png",
    category: "Dresses",
    rating: 4.5,
    stock: 10,
  },

  {
    title: "White Casual T-Shirt",
    price: 1800,
    description: "Comfortable white casual t-shirt",
    thumbnail: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/806530s.jpg?im=Resize,width=750",
    category: "T-Shirts",
    rating: 4.2,
    stock: 15,
  },

  {
    title: "Blue Denim Jeans",
    price: 3200,
    description: "Stylish blue denim jeans for women",
    thumbnail: "https://www.beginningboutique.com.au/cdn/shop/files/Austin-Mid-Rise-Mid-Wash-Blue-Denim-Jeans-15_07_2026-1.jpg?v=1784092982",
    category: "Jeans",
    rating: 4.4,
    stock: 8,
  },

  {
    title: "Brown Handbag",
    price: 4500,
    description: "Elegant brown handbag for everyday use",
    thumbnail: "https://www.styleit.pk/cdn/shop/files/ChatGPTImageDec30_2025_10_38_33AM.png?v=1770056901",
    category: "Bags",
    rating: 4.6,
    stock: 12,
  },

  {
    title: "Classic Sneakers",
    price: 5500,
    description: "Comfortable sneakers for everyday wear",
    thumbnail: "https://cdn.sanity.io/images/z60zyrm2/production/6326d775fe46e0710ae64eaa41c95b3ab46750b3-1596x2107.jpg?w=1920&fit=max&auto=format",
    category: "Shoes",
    rating: 4.7,
    stock: 20,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected! ✅");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products added successfully! 🎉");

    await mongoose.connection.close();

    console.log("Database connection closed.");
  } catch (error) {
    console.log("Error:", error);
  }
};

seedProducts();