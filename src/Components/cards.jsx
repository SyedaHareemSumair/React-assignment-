function Cards() {
  const products = [
    {
      image:
        "https://nexton.com.pk/cdn/shop/files/baby_shampoo_500ml.jpg?v=1736588834&width=1000",
    },
    {
      image:
        "https://shoprex.com/images/srproducts/large/fancy-stitched-embroidered-shamoz-silk-party-wear-maroon-maxi-for-girls-2-piece_46069.jpg",
    },
    {
      image:
        "https://shebeauty.com.pk/cdn/shop/products/Eyelash_Amplifier-7.jpg?v=1678544123",
    },
    {
      image:
        "https://starlet.pk/cdn/shop/files/p170_e2932840-f4a2-499f-b9a3-acdae88aad43.jpg?v=1774950289",
    },
    {
      image:
        "https://bluestoneclothing.pk/cdn/shop/files/DarkBlue_800x.jpg?v=1751531976",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/480/640/xif0q/key-chain/h/w/6/handmade-crochet-keychain-cute-gift-for-bags-keys-mezulot-1-original-imahezs8gfu4rgbm.jpeg?q=90",
    },
    {
      image:
        "https://lagirlpakistan.com/cdn/shop/files/GLG940-949_prod_img_main_1_640x_2x_01e69772-5671-449b-b74d-e0bee119897e_1080x.jpg?v=1687290280",
    },
    {
      image:
        "https://myhomestyle.pk/cdn/shop/files/royal-blue-velvet-bedsheet-set-5-pcs-335682.jpg?v=1736860958",
    },
    {
      image:
        "https://astore.pk/cdn/shop/files/7_b1aff18f-bb79-40f1-b0d9-3ec0765010c7.jpg?v=1763469061",
    },
  ];

  return (
    <div className="container py-4">
      <div className="row g-4">
        {products.map((product, index) => (
          <div
            className="col-12 col-sm-6 col-lg-4"
            key={index}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt="Product"
                style={{
                  height: "280px",
                  objectFit: "contain",
                }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Product</h5>

                <p className="card-text">
                  Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </p>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
