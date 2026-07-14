import { Links } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5HgDSNZ3wxcA8Ckc-cnxA0nOY3TgxhHzQ8ZriUMklq20mP-Qc1lUr0U&s=100" className="aboutUsImg" alt="about-us img" style={{ height: '480px' , width: '55rem' }} />
      </div>

      <br />
      <br /> 

      <h2>About Us</h2>

      
      
      <p className="para">We are an online retail company dedicated to bringing you quality products at the best possible prices, delivered right to your doorstep. Our mission is to provide a seamless, fast, and reliable shopping experience for every customer. We prioritize product quality and customer satisfaction above all else, ensuring that every purchase meets your expectations. From fashion to electronics to everyday essentials, we bring everything together under one roof. Your trust is the foundation of our success, and we strive to earn it with every order.</p>

     <div className="icons">
  <a href="https://www.instagram.com/amazon/reels/?hl=en" target="_blank" rel="noopener noreferrer">
    <img src="src/assets/computer-icons-instagram-logo-sticker-logo-Photoroom.png" alt="instagram" className="icon" />
  </a>

  <a href="https://www.facebook.com/Amazon/" target="_blank" rel="noopener noreferrer">
    <img src="src/assets/facebook-logo-vector-icon-logotype-vector-eps_901408-408-Photoroom.png" alt="facebook" className="icon" />
  </a>

  <a href="https://x.com/amazon" target="_blank" rel="noopener noreferrer">
    <img src="src/assets/images-Photoroom.png" alt="twitter" className="icon" />
  </a>

  
</div>
        
      
      <Footer />
    


    </>
  );
}

export default About