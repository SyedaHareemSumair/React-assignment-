function Carousel() {
    return(
        <div id="carouselExampleIndicators" className="Carousel carousel slide" data-bs-ride="carousel" width="600px">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active"> 
      <img src="src/assets/619geyiQI5L._SX3000_.jpg" className="d-block w-100 carousel-img"     alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.lazcdn.com/us/domino/8655ebc7-b72c-43a4-92b6-d998c630a1c0_PK-1976-688.jpg_2200x2200q80.jpg_.avif" className="d-block w-100 carousel-img"   alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="src/assets/71ROLBmB4AL._SX3000_.jpg" className="d-block w-100 carousel-img"   alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}


export default Carousel