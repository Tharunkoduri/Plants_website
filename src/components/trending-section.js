import { GardenDecor } from "./garden-decor";
import "../styles/trending.css";

export function TrendingSection() {
  return (
    <div className="container">
      <h4 className="text-center fw-semibold  mb-4">Trending</h4>
      <div className="row g-3">

        <div className="col-6 col-lg-3">
          <img src="https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-bonsai-plants-new_404x404.png" className="w-100 trending-img" alt="" />
          <p className="text-center text-danger fw-semibold mt-2">Bonsai Plants-Upto 50% Off</p>
        </div>

        <div className="col-6 col-lg-3">
          <img src="https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-ceramic-planters-new1_404x404.png" className="w-100 trending-img" alt="" />
          <p className="text-center text-danger fw-semibold mt-2">Ceramic Planters-Starting &#8377;299</p>
        </div>

        <div className="col-6 col-lg-3">
          <img src="https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-kokedama-plants-new_404x404.png" className="w-100 trending-img" alt="" />
          <p className="text-center text-danger fw-semibold mt-2">Kokedama-Starting &#8377;249</p>
        </div>

        <div className="col-6 col-lg-3">
          <img src="https://nurserylive.com/cdn/shop/files/nurserylive-home-page-trending-monthwise-gardening-new_404x404.png" className="w-100 trending-img" alt="" />
          <p className="text-center text-danger fw-semibold mt-2">Month Wise Gardening-Upto 65% Off</p>
        </div>

      </div>

    </div>
  )
}