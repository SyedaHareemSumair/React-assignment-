import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

import img1 from "../assets/computer-icons-instagram-logo-sticker-logo-Photoroom.png";
import img2 from "../assets/facebook-logo-vector-icon-logotype-vector-eps_901408-408-Photoroom.png";
import img3 from "../assets/images-Photoroom.png";

function About() {
  return (
    <>
      <Navbar />

      {/* About Image */}
      <div className="container pt-5">
        <div className="text-center">
          <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5HgDSNZ3wxcA8Ckc-cnxA0nOY3TgxhHzQ8ZriUMklq20mP-Qc1lUr0U&s=100"
  className="img-fluid w-100"
  alt="about-us img"
  style={{
    maxWidth: "880px",
    height: "480px",
    objectFit: "contain",
  }}
/>
        </div>
      </div>

      {/* About Content */}
      <div className="container py-5">
        <h2 className="text-center mb-4">About Us</h2>

        <p
          className="text-center mx-auto"
          style={{
            maxWidth: "900px",
            lineHeight: "1.8",
          }}
        >
          We are an online retail company dedicated to bringing you quality
          products at the best possible prices, delivered right to your
          doorstep. Our mission is to provide a seamless, fast, and reliable
          shopping experience for every customer. We prioritize product
          quality and customer satisfaction above all else, ensuring that every
          purchase meets your expectations. From fashion to electronics to
          everyday essentials, we bring everything together under one roof.
          Your trust is the foundation of our success, and we strive to earn
          it with every order.
        </p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/amazon/reels/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img1}
              alt="Instagram"
              style={{
                width: "45px",
                height: "45px",
                objectFit: "contain",
              }}
            />
          </a>

          <a
            href="https://www.facebook.com/Amazon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img2}
              alt="Facebook"
              style={{
                width: "45px",
                height: "45px",
                objectFit: "contain",
              }}
            />
          </a>

          <a
            href="https://x.com/amazon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img3}
              alt="Twitter"
              style={{
                width: "45px",
                height: "45px",
                objectFit: "contain",
              }}
            />
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
