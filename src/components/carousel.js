import { LogoSection } from "./logo-section";
import { Products } from "./products";
import { TrendingSection } from "./trending-section";
import "../styles/home.css";

export function Carousel() {
  return (
    <section className="mt-5">

      <div id="carouselExample" className="carousel slide cursor-pointer" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.ugaoo.com/cdn/shop/files/Desktop-b.jpg" className="caro-img d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="https://www.ugaoo.com/cdn/shop/files/Website_Banner-New.webp" className="caro-img d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="https://www.ugaoo.com/cdn/shop/files/Desktop_3b72e57e-bcbe-416e-9b6a-79738d23892e.jpg" className="caro-img d-block w-100" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img src="https://www.ugaoo.com/cdn/shop/files/New.webp" className="caro-img d-block w-100" alt="Fourth slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" ></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>



    </section>
  )
}