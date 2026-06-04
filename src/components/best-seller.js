import { useState,useRef } from "react";
import "../styles/best-seller.css";
import { products } from "./categories-data";

export default function TrendingPlants() {
  const [activeTab, setActiveTab] = useState("Bestsellers");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const tabs = [
    "Bestsellers",
    "New Arrivals",
    "Indoor Plants",
    "Money Plants",
    "Air Purifying",
  ];

const filteredProducts = products.filter(
  (product) => product.category === activeTab
);

  return (
    <section className="container py-6">

      <ul className="nav nav-tabs plant-tabs">
        {tabs.map((tab) => (
          <li className="nav-item flex-fill" key={tab}>
            <button
              className={`nav-link  w-100 ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="products-container">

        <button className="slider-btn left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="products-scroll" ref={scrollRef}>

          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="p-2">

                <p className="product-title">
                  {product.name}
                </p>

                <div className="d-flex align-items-center flex-wrap">

                  <span className="fw-semibold fs-6">
                    &#8377;{product.price}
                  </span>

                  {product.oldPrice && (
                    <>
                      <span className="old-price ms-2">
                        &#8377;{product.oldPrice}
                      </span>

                      <span className="discount ms-2">
                        {product.discount}
                      </span>
                    </>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

        <button className="slider-btn right" onClick={scrollRight}>
          ❯
        </button>

      </div>

    </section>
  );
}