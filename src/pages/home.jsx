import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Carousel from "../Components/Carousal";
import Cards from "../Components/cards";

function Home() {
  return (
    <>
      <Navbar />
        <Carousel />
        <br />
        <h2>Products</h2>
        <br />
        <Cards />
      <Footer />
    </>
  );
}


export default Home